import express from "express";

import promotionController from "../controllers/promotionController.mjs";
import { imageUploader } from "../controllers/uploaderController.mjs";

import { dataProcessor } from "../controllers/dataProcessorController.js";

import * as testController from "../controllers/testController.mjs";

const router = express.Router();

router.get("/test", testController.convertImage);

router.get("/promotions/home", promotionController.home);
router.get("/promotions", promotionController.findAll);
router.post("/promotions", promotionController.insertData);

router.post("/previewContent", promotionController.previewContent);
router.post("/uploads", imageUploader);

export default router;
