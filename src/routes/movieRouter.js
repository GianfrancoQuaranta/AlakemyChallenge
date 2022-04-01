// express
import express from "express";
const router = express.Router();

// require controller
import { list, detail, create, update, deleted} from "../controllers/movieController";

// get
router.get("/movies", list);
router.get("/movies/:id", detail);


// post
router.post("/movies", create);

// put
router.put("/movies/:id", update);

// delete
router.delete("/movies/:id", deleted);


export default router;