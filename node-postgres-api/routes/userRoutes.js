const express = require("express");
router = express.Router();

userRoute = require("../controllers/userControllers");

router.get("/", userRoute.getUsers)
router.get("/:id", userRoute.getUserById)

module.exports = router;
