const router = require('express').Router();

const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');

router.use('/user', userRoutes);
router.use('/reviews', reviewRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;