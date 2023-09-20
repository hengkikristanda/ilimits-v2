// promotionController.mjs
import * as promotionService from "../services/promotionService.mjs";
import { preprocessData } from "../utils/dataPreprocessor.mjs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Controller function to retrieve all promotions
const findAll = async (req, res) => {
	try {
		const promotions = await promotionService.getAllPromotions();
		res.json(promotions);
	} catch (error) {
		console.error("Error fetching promotions:", error);
		res.status(500).json({ error: "An error occurred while fetching promotions." });
	}
};

// // Controller function to create a new promotion
const insertData = (req, res) => {
	try {
		const { promotionTitle, ctaButton, ctaButtonLink, contentStatus } = req.body;

		const { contentData, imageSource } = preprocessData(req.body);

		const promotionData = {
			promotionTitle,
			imageSource,
			contentData,
			ctaButton,
			ctaButtonLink,
			contentStatus,
		};
		const insertedId = promotionService.createPromotion(promotionData);
		// res.status(201).json({ message: "Promotion created successfully", success: true });
		res.redirect("/promotions/index.html");
	} catch (error) {
		console.error("Error creating promotion:", error);
		res.status(500).json({ error: "An error occurred while creating the promotion." });
	}
};

const test = async (req, res) => {
	try {
		res.status(201).json({ message: "Connected" });
	} catch (error) {
		console.error("Error creating promotion:", error);
		res.status(500).json({ error: "An error occurred while creating the promotion." });
	}
};

const previewContent = (req, res, next) => {
	let destinationURL = "index.html";

	const { body } = req;

	const modifiedHtml = preprocessData(body);
	const title = body.title;
	const ctaButton = body.ctaButton;
	const ctaButtonLink = body.ctaButtonLink;

	if (!body || typeof body !== "object") {
		return res.status(400).json({ message: "Invalid data format", redirectURL: destinationURL });
	}
	destinationURL = "preview.html";

	res.json({
		redirectURL: destinationURL,
		title: title,
		ctaButton: ctaButton,
		ctaButtonLink: ctaButtonLink,
		content: modifiedHtml,
	});
};

const home = (req, res, next) => {
	res.sendFile(__dirname + "/index.html");
};

export default { test, findAll, previewContent, insertData, home };
