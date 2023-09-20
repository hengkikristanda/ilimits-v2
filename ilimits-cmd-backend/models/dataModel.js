const db = require("./database");

const fetchData = (params) => {
	return new Promise((resolve, reject) => {
		const query = "SELECT * FROM actor";
		db.query(query, params, (err, results) => {
			if (err) {
				reject(err);
			} else {
				resolve(results);
			}
		});
	});
};

module.exports = {
	fetchData,
};
