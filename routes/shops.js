const express = require('express');
const router = express.Router();
const shopController = require("../controllers/Shop.controller");
const userController = require("../controllers/User.controller");



router.post('/create', userController.isAuthenticated, shopController.create);
router.get('/find', shopController.findAll);
router.get('/find/:id', shopController.findOne);
router.delete('/delete/:id', userController.isAuthenticated, shopController.delete);
router.put('/update/:id', userController.isAuthenticated, shopController.update);

module.exports = router;