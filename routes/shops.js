const express = require('express');
const router = express.Router();
const shopController = require("../controllers/Shop.controller");



router.post('/create', shopController.create);
router.get('/find',shopController.findAll);
router.get('/find/:id',shopController.findOne);
router.delete('/delete/:id',shopController.delete);
router.put('/update/:id',shopController.update);

module.exports = router;