const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const bodyParser = require("body-parser");

const corsMiddleware = require("./middleware/cors");
const apiRoutes = require("./routes/api");
const config = require("./config/config");

const app = express();

app.use(
	session({
		secret: "your-secret-key",
		resave: false,
		saveUninitialized: true,
	})
);

app.use(flash());
app.use(bodyParser.json());
app.use(corsMiddleware);
app.use(express.json({ limit: "100mb" }));
app.use("/api/v1", apiRoutes);

app.listen(config.port, () => {
	console.log(`Server is running on port ${config.port}`);
});
