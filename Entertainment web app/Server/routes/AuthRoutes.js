const { register, login } = require('../controllers/authControllers');
const { checkUser } = require('../middlewares/authmiddlewares');

const router = require('express').Router();

router.post("/",checkUser)
router.post("/register",register)
router.post("/login",login)

module.exports = router