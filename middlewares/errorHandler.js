/* 
	? Error Handler using Middleware Chaining
	* avoids repeated try/catch
	* avoids repeated calls
	* utilizes chained middleware functions to be reached
*/

const saveFile = require("../helpers/saveFile");
const timestamp = require("../helpers/timestamp");

const errorHandler = async function (error, req, res, next) {
	const status = error.status || 500;
	const msg = error.code || "internal error"

	console.error(error);
	const log = `${timestamp()}: ${error}`;

	await saveFile("./logs/errorLog", log);

	res.status(status).json({
		message: `${msg}`,
	});
};

module.exports = errorHandler;
