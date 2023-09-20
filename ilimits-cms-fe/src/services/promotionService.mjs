// promotionService.mjs

import * as PromotionModel from "../models/promotionModel.mjs";

// Service function to retrieve all promotions
export const getAllPromotions = async () => {
	try {
		return await PromotionModel.getAllPromotions();
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching promotions");
	}
};

// Service function to create a new promotion
export const createPromotion = (promotionData) => {
	try {
		return PromotionModel.createPromotion(promotionData);
	} catch (error) {
		console.log(error);
		throw new Error("Error creating promotion");
	}
};
