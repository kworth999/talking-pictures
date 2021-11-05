var express = require('express');
var router = express.Router();

const dashboardRoutes = require('./dashboardRoutes');
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/', loginRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/homepage', homeRoutes);
module.exports = router;