import express from "express";
import { port } from "./src/config/config.js";
import apiRoutes from "./src/routes/api.mjs";
import flash from "flash";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import session from "express-session";
import bodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(
	session({
		secret: "your-secret-key",
		resave: false,
		saveUninitialized: true,
	})
);

app.use(flash());

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use(express.static(join(__dirname, "public")));
app.use("/routes", apiRoutes);

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
