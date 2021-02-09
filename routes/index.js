const express = require('express');
const router = express.Router();
const fileController = require('../controllers/file.controller');

/* GET home page. */
router.get('/', function (req, res) {
    // res.render('index', { title: 'Express' });
    res.send('Hello World');
});

router.post('/upload', fileController.upload.single('myFile'), fileController.fileUpload);

// export default router;
module.exports = router;
