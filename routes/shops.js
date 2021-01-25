const express = require('express');
const router = express.Router();
const shopController = require('../controllers/Shop.controller');
const { isAuthenticated } = require('../controllers/User.controller');
const { shopValidator } = require('../middlewares/shop.validator');
const { checkInvalid } = require('../middlewares/validationResult');

router.post(
    '/create',
    isAuthenticated,
    shopValidator,
    checkInvalid,
    shopController.create
);
router.get('/find', shopController.findAll);
router.get('/find/:id', shopController.findOne);
router.delete('/delete/:id', isAuthenticated, shopController.delete);
router.put('/update/:id', isAuthenticated, shopController.update);

module.exports = router;
