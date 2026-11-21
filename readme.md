# Bean Counter Server

This server built using node, express, jwt, bcrypt, and sequelize will perform CRUD operation on coffee data.

It needs basic authentication for now of register and login routes.

Stretch goal: add 2FA, SSO, and password reset

## Routes & Data Modeling

- `api/auth` route
	- `/register`
		- fullName
		- email
		- password
		- phone
	- `/login`
		- email
		- password
- `api/` route (full CRUD)
	- GET `/` home
	- GET `/all` show all data
	- GET `/:id` show specific coffee
	- GET `/filter` show specific coffee using filter criteria
	- POST `/add` coffee data
		- coffee name
		- roaster
		- origin
		- roast level
		- brew method
		- grinder
		- grind size
		- dose in
		- dose out
		- time
	- PUT `/:id` update coffee data
	- DELETE `/:id` delete coffee data

# API Architecture

`app.js`, the request pipeline:

request -->
	--> rateLimiter
	--> express.json()
	--> urlencoded()
	--> /api apiRoutes
	--> /api authValidator, emailValidator, authLogger, authRoutes
	--> errorHandler

Issue: `/api` prefix is shared by auth and coffee routes, we fix by prefixiing with /coffee and /auth

This helps our route vocabulary to be more action oriented and consistent:

GET   /api/v1/coffee
GET   /api/v1/coffee/:id
POST  /api/v1/coffee
PATCH /api/v1/coffee/:id
DELTE /api/v1/coffee/:id

We move filtering into the first GET / for clarity

Name your functions clearly: ex `getData` is fine now, but what if we need to get different types of data? `listAllCoffee` might be a better function name here.

`auth.validator.js` has route hardcoded path. Better to couple it to the current mounting path instead