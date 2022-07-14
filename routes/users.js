const express = require('express');
const { getHello, postHello, helloName } = require('../controllers/users');

const router = express.Router();

router.get('/', getHello);
router.post('/', postHello);

router.get('/:name', helloName);
router.get('/', helloName);

module.exports = router;
