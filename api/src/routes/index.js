const { Router } = require('express');
const api = require('./api.js');

const router = Router();

router.use('/api', api)

module.exports = router;
