const router = require("express").Router()
const { getData, getByID, addData, modifyData, deleteData } = require("../controllers/api.controllers")

router.get("/", getData)
// ? filtering will belong in GET / query params
router.get("/:id", getByID)

router.post("/", addData)
router.put("/:id", modifyData)
router.delete("/:id", deleteData)

module.exports = router