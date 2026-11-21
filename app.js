require("dotenv").config()
const express = require("express")
const app = express()

const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || "127.0.0.1"

const authRoutes = require("./routes/auth.routes")
const apiRoutes = require("./routes/api.routes")
const { emailValidator } = require("./middlewares/auth.validator")
const errorHandler = require("./middlewares/errorHandler")
const rateLimiter = require("./middlewares/rateLimiter")
const authLogger = require("./middlewares/authLogger")
const customHeaders = require("./middlewares/headers")

app.use(rateLimiter)
app.use(customHeaders)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// TODO: protect our coffee!!!!
app.use("/api/v1/coffee", apiRoutes)
app.use("/api/v1/auth", emailValidator, authLogger, authRoutes)
// must be last to catch 'em all (errors, not Pokemons)
app.use(errorHandler)

app.listen(PORT, HOST, () => {
	try {
		console.log(`[server] running on ${HOST}:${PORT}`)
	} catch(error) {
		console.error(error)
	}
})
