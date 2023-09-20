const cors = require("cors");

// Define a list of allowed origins
const allowedOrigins = [
	"http://localhost",
	"http://localhost:5500",
	"http://127.0.0.1",
	"http://127.0.0.1:5500",
];

const corsOptions = {
	origin: (origin, callback) => {
		// Check if the requesting origin is in the list of allowed origins
		if (!origin) {
			//for bypassing postman req with  no origin
			return callback(null, true);
		}
		if (allowedOrigins.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
};

module.exports = cors(corsOptions);
