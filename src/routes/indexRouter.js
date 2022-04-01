import express from 'express';
var router = express.Router();
import { index } from "../controllers/mainController";

/* GET home page. */
router.get('/', index);

export default router;
