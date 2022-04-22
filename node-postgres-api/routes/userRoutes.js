const express = require("express");
router = express.Router();

userRoute = require("../controllers/userControllers");

//router.get('/', userRoute.userController);

router.get('/something', (req, res) => {
  res.json("Node.js, Express, and Postgres API");
});

router.get("/api", (req, res) => {
res.json({message: "Hello"});
});

//router.get('/users', userRoute.getUsers);

router.get("/", userRoute.getUsers)

module.exports = router;
