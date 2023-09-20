const express = require("express");
const promotionController = require("../controllers/promotion/promotionController");
const uploadController = require("../controllers/uploadController");

const router = express.Router();

router.get("/promotions", promotionController.findAll);
router.post("/promotions", promotionController.insertData);

router.post("/uploader", uploadController.uploadImage);

module.exports = router;
