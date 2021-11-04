var express = require('express');
var router = express.Router();

const dashboardRoutes = require('./dashboardRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/dashboard', dashboardRoutes);
router.use('/homepage', homeRoutes);
module.exports = router;