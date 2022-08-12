const { register, login } = require("../controllers/authControllers");
const { checkUser } = require("../Middleware/authMiddleware");

const router = require("express").Router();

router.post("/");
router.post("/register", register);
router.post("/login", login);

module.exports = router;
