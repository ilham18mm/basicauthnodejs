const express = require('express');
const router = express.Router();
const userContorllers = require('../controllers/userConstrollers');

router.get('/', userContorllers.viewData);
router.post('/',userContorllers.createData);


module.exports = router;
