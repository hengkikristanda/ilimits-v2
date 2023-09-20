import { config } from "dotenv";

config();

const port = process.env.PORT || 3000;

const dbConfig = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
};

export { dbConfig, port };
