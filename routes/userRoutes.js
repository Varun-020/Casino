const express = require("express");
const router = express.Router();

const { createUser, createUserValidations, loginUserValidations, userLogin, userLogout } = require("../controllers/UserController");

router.post('/create', createUserValidations, createUser);
router.post('/login', loginUserValidations, userLogin);
router.post('/logout', userLogout);


module.exports = router;