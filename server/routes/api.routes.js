const router = require("express").Router()
const { getData, getByID, getByFilter, addData, modifyData, deleteData } = require("../controllers/api.controllers")

router.get("/all", getData)
router.get("/:id", getByID)

router.post("/add", addData)
router.put("/:id", modifyData)
router.delete("/:id", deleteData)

module.exports = router