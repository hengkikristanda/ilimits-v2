const db = require("./database");

const fetchData = (params) => {
	return new Promise((resolve, reject) => {
		const query = "SELECT id, title, imageSource, contentStatus, className FROM promotion_view";
		db.query(query, params, (err, results) => {
			if (err) {
				reject(err);
			} else {
				resolve(results);
			}
		});
	});
};

const findAll = () => {
	return new Promise((resolve, reject) => {
		const query = "SELECT id, title, imageSource, contentStatus, className FROM promotion_view";
		db.query(query, (err, results) => {
			if (err) {
				reject(err);
			} else {
				resolve(results);
			}
		});
	});
};

const insertData = (data) => {
	return new Promise((resolve, reject) => {
		const query = "INSERT INTO promotion SET ?";
		db.query(query, data, (err, result) => {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
};

module.exports = {
	findAll,
	insertData,
};
