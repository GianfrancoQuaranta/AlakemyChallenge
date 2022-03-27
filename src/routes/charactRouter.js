//
let express = require("express");
let router = express.Router();

// require controller
let charactController = require("../controllers/charactController");

// get
router.get("/characters", charactController.list);
router.get("/characters/:id", charactController.detail);

// post
router.post("/characters", charactController.create);

// put
router.put("/characters/:id", charactController.update);

// delet
router.delete("/characters/:id", charactController.delete);

module.exports = router;

