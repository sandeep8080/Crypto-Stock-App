var express = require('express');
var router = express.Router();
const cryptoData = require('../controller/crypto');

/* Define Application Routes here */

router.get('/', cryptoData.test);
router.post('/saveData', cryptoData.savedCData);
router.get('/getData', cryptoData.getData);
router.get('/delData/:id', cryptoData.deleteRecord);

module.exports = router;
