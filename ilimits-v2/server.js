// Import necessary modules
import express from "express";
import { config } from "dotenv";

const app = express();

config();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not defined in .env

// Serve static files from the 'public' folder
app.use(express.static("public"));

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
