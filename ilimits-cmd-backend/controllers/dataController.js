const PromotionDTO = require("../models/PromotionDAO");

const getData = async (req, res) => {
	try {
		const { someParam } = req.query;
		const data = await PromotionDTO.fetchData([someParam]);
		res.json(data);
	} catch (error) {
		console.error("Error fetching data:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

module.exports = {
	getData,
};
