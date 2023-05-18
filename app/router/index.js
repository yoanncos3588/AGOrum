const express = require(`express`);
const router = express.Router();
const mainController = require(`../controllers/mainController`);
const loginController = require(`../controllers/loginController`);
const registerController = require(`../controllers/registerController`);
const validateRegisterForm = require(`../middlewares/validateRegisterForm`);

router.get(`/`, mainController.showHomePage);

router.get(`/login`, loginController.showLogin);

router.get(`/register`, registerController.showRegister);
router.post(`/register`, validateRegisterForm, registerController.registerUser);

router.get(`/category`);
router.get(`/topic`);
router.get(`/user`);

module.exports = router;