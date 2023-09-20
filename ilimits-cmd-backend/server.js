// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());

app.use(
	cors({
		origin: "http://localhost:5500", // Specify the allowed origin
		credentials: true, // Enable credentials support
	})
);

app.post("/save", (req, res) => {
	const content = req.body.content;
	console.log("Received content:", content);
	res.json({ success: true });
});

app.get("/test", (req, res) => {
	res.json({ success: true });
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
