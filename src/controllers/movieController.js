let db = require("../database/models");

exports.list = async (req, res) => {

    try {

        let allMovie = await db.Movie.findAll();

        //console.log("allMovie", allMovie);

        res.send(allMovie)


    } catch (e) {
        res.send(e)
    }

};

exports.detail = async (req, res) => {

    try {

        let idMovie = req.params.id;

        console.log("idMovie", idMovie);

        let readyToSend = await db.Movie.findOne({
            where: {
                id: idMovie
            },
            include: [{ association: "charact" }, { association: "genre" }]
        });

        res.send(readyToSend)

    } catch (e) {

        res.send(e);

    };

};

exports.create = async (req, res) => {

    try {

        let createdProduct = await db.Movie.create({
            image: req.body.image,
            title: req.body.title,
            release_date: req.body.release_date,
            rating: req.body.rating
        });

        if (createdProduct) {
            res.json({
                status: 200,
                confirm: "Succesful movie creation",
                movie_added: createdProduct
            });
        };

    } catch (e) {

        res.send(e);

    };

};

exports.update = async (req, res) => {     
    
    try {

        let movieToUpdate = await db.Movie.findOne({
            where: {
                id: req.params.id
            }
        });

        console.log("movieToUpdate", movieToUpdate);

        let movieUpdated = await db.Movie.update({
            image: req.body.image ? req.body.image : movieToUpdate.image,
            title: req.body.title ? req.body.title : movieToUpdate.title,
            release_date: req.body.release_date ? req.body.release_date : movieToUpdate.release_date,
            rating: req.body.rating ? req.body.rating : movieToUpdate.rating
        }, {
            where: {
                id: req.params.id
            }
        });

        if (movieUpdated) {
            res.json({
                status: 200,
                confirm: "Succesful movie update",
                movie_updated: {
                    image: req.body.image ? req.body.image : movieToUpdate.image,
                    title: req.body.title ? req.body.title : movieToUpdate.title,
                    release_date: req.body.release_date ? req.body.release_date : movieToUpdate.release_date,
                    rating: req.body.rating ? req.body.rating : movieToUpdate.rating
                }
            });
        };

    } catch (e) {
        res.send(e);
    };

};

exports.delete = async (req, res) => {       // Hacer Delete

    try {

        let deletedMovie = await db.Movie.destroy({
            where:{
                id: req.params.id
            }
        });

        if(deletedMovie){
            res.json({
                status: 200,
                confirm: "Succesful movie deleted"
            })
        }

    } catch (e) {

        res.send(e);

    };

};