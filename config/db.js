const { Sequelize } = require("sequelize")

/* 
	? Sequelize Connection
	* requires a connection string
	* dbtype://user:pwd@host:port/dbname
	* ex: postgres://paul:secret@localhost:5432/pebblecolors
	* can be more granular as seen below
	* helpful when a reconfig between environments is needed
	* for ex: moving from dev env to prod env
*/

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PWD,
	{
		host: process.env.DB_HOST,
		port: Number(process.env.DB_PORT || 5432),
		dialect: "postgres",
		logging: console.log
	}
)

module.exports = sequelize