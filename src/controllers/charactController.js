import db from "../database/models";

let list = async (req, res) => {

    try {

        let characters = await db.Charact.findAll({
            include: [{ association: "movie" }]
        });

        let readyToSend = characters.map(c => {
            return {
                image: c.image,
                name: c.name
            }
        });

        return res.json(readyToSend);

    } catch (e) {
        res.send(e)
    }

};


let detail = async (req, res) => {

    try {

        let idCharact = req.params.id;

        let charactFound = await db.Charact.findOne({
            include: [{ association: "movie" }],
            where: {
                id: idCharact
            }
        });

        res.json(charactFound);

    } catch (e) {
        res.send(e)
    }

};


let create = async (req, res) => {

    try {

        let createdProduct = await db.Charact.create({
            image: req.body.image,
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            story: req.body.story
        })

        if (createdProduct) {
            res.json({
                status: 200,
                confirm: "Succesful character creation",
                character_added: createdProduct
            });
        };

    } catch (e) {
        res.send(e);
    };

};


let update = async (req, res) => {

    try {

        let characterToUpdate = await db.Charact.findOne({
            where: {
                id: req.params.id
            }
        });

        //console.log("charactToUpdate", characterToUpdate);

        console.log("req.body.name", Boolean(req.body.name));

        let updatedCharacter = await db.Charact.update({
            image: req.body.image ? req.body.image : characterToUpdate.image,
            name: req.body.name ? req.body.name : characterToUpdate.name,
            age: req.body.age ? req.body.age : characterToUpdate.age,
            weight: req.body.weight ? req.body.weight : characterToUpdate.weight,
            story: req.body.story ? req.body.story : characterToUpdate.story
        }, {
            where: {
                id: req.params.id
            }
        });

        if (updatedCharacter) {
            res.json({
                status: 200,
                confirm: "Succesful character update",
                character_updated: {
                    image: req.body.image ? req.body.image : characterToUpdate.image,
                    name: req.body.name ? req.body.name : characterToUpdate.name,
                    age: req.body.age ? req.body.age : characterToUpdate.age,
                    weight: req.body.weight ? req.body.weight : characterToUpdate.weight,
                    story: req.body.story ? req.body.story : characterToUpdate.story
                }
            });
        };

    } catch (e) {
        res.send(e);
    };

};


let deleted = async (req, res) => {

    try {

        let deletedCharact = await db.Charact.destroy({
            where:{
                id: req.params.id
            }
        });

        if(deletedCharact == 1){
            res.json({
                status:200,
                confirm: "Succesful character deleted"
            });
        };

    } catch (e) {

        res.send(e);

    };

};

export { list, detail, create, update, deleted};