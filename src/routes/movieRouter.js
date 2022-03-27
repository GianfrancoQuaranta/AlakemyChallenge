// express
const express = require("express");
const router = express.Router();

// require controller
let movieController = require("../controllers/movieController");

// get
router.get("/movies", movieController.list);
router.get("/movies/:id", movieController.detail);


// post
router.post("/movies", movieController.create);

// put
router.put("/movies/:id", movieController.update);

// delete
router.delete("/movies/:id", movieController.delete);


module.exports = router;