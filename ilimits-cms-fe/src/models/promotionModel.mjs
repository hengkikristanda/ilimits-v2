// promotionModel.mjs

import mysql from "mysql2/promise";
import { dbConfig } from "../config/config.js";
import { generateTimestampBasedUUID } from "../../src/utils/uuid.js";

const pool = mysql.createPool(dbConfig);

const TABLE_NAME = "promotion";
const TABLE_ROWS =
	"id, title, contentStatusId, imageSource, content, buttonLabel, ctaLink, createdBy, createdDate, modifiedBy, modifiedDate";
const TABLE_ROWS_INSERT =
	"id, title, imageSource, content, contentStatusId, buttonLabel, ctaLink, createdDate, modifiedDate";

const VIEW_NAME = "promotion_view";
const VIEW_ROWS = "id, title, imageSource, contentStatus, className, modifiedDate";

// Model function to retrieve all promotions from the database
export const getAllPromotions = async () => {
	const connection = await pool.getConnection();
	const [rows] = await connection.query(`SELECT ${VIEW_ROWS} FROM ${VIEW_NAME}`);
	connection.release();
	return rows;
};

export const createPromotion = async (data) => {
	try {
		const connection = await pool.getConnection();

		const id = generateTimestampBasedUUID();
		const title = data.promotionTitle;

		const content = data.contentData;
		const ctaButton = data.ctaButton;
		const ctaButtonLink = data.ctaButtonLink;
		const contentStatus = data.contentStatus;
		const imageSource = data.imageSource;

		const sql = `INSERT INTO ${TABLE_NAME} (${TABLE_ROWS_INSERT}) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`;
		const values = [id, title, imageSource, content, contentStatus, ctaButton, ctaButtonLink];

		const [rows, fields] = await connection.execute(sql, values);

		connection.release(); // Release the connection back to the pool

		return rows.insertId; // Return the ID of the inserted row
	} catch (error) {
		throw error;
	}
};
