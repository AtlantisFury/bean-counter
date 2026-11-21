const fs = require("fs")

async function saveFile(filepath, data) {
	await fs.appendFile(filepath, data + "\n", (err) => {
		if (err) throw err
	})
}

module.exports = saveFile