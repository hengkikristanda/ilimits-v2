// uploadController.js
const multer = require("multer");
const path = require("path");

// Handle image upload
const uploadImage = (req, res, next) => {
	const storage = multer.diskStorage({
		destination: function (request, file, callback) {
			callback(null, "public/uploads/");
		},
		filename: function (request, file, callback) {
			const temp_file_arr = file.originalname.split(".");
			const temp_file_name = temp_file_arr[0];
			const temp_file_extension = temp_file_arr[1];
			callback(null, temp_file_name + "-" + Date.now() + "." + temp_file_extension);
		},
	});

	const upload = multer({ storage: storage }).single("sample_image");

	upload(req, res, function (error) {
		if (error) {
			res.status(500).json({ error: "Internal server error" });
		} else {
			const image = req.file;
			console.log(image);
			req.flash("success", req.file.filename);
			res.status(200).json({ message: "File uploaded successfully", filename: image.filename });
		}
	});
};

module.exports = {
	uploadImage,
};
