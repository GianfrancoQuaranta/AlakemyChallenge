//
import express from "express";
let router = express.Router();

// require controller
import { list, detail, create, update, deleted} from "../controllers/charactController";

// get
router.get("/characters", list);
router.get("/characters/:id", detail);

// post
router.post("/characters", create);

// put
router.put("/characters/:id", update);

// delet
router.delete("/characters/:id", deleted);

export default router;

