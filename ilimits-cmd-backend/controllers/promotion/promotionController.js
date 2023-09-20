const multer = require("multer");
const path = require("path");

const PromotionDAO = require("../../models/PromotionDAO");
const generateTimestampBasedUUID = require("../../utils/uuid");

const findAll = async (req, res) => {
	try {
		const data = await PromotionDAO.findAll();
		res.json(data);
	} catch (error) {
		console.error("Error fetching data:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

const insertData = async (req, res) => {
	try {
		const { body } = req;

		if (!body || typeof body !== "object") {
			return res.status(400).json({ message: "Invalid data format" });
		}

		body.id = generateTimestampBasedUUID();

		console.log(body);

		// const result = await PromotionDAO.insertData(body);
		// res.status(201).json({ message: "Data saved successfully", insertedId: result.id });
		res.status(201).json({ message: "Data saved successfully" });
	} catch (error) {
		console.error("Error saving data:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads/");
	},
	filename: (req, file, cb) => {
		cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
	},
});

const upload = multer({ storage });

// Handle image upload
const uploadImage = upload.single("image", (req, res) => {
	// Handle the uploaded image here
	// const imageUrl = "/uploads/" + req.file.filename;
	// console.log(`imageUrl: ${imageUrl}`);
	// res.json({ message: "Image uploaded successfully" });
	const musicFiles = req.files;
	console.log(musicFiles);
});

module.exports = {
	findAll,
	insertData,
	uploadImage,
};
