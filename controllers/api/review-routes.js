const router = require('express').Router();
const { User, Review } = require('../../models/index');
const checkAuth = require('../../utils/auth');
const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../../config/connection');

// Get all users - /api/review/
router.get('/', /*checkAuth,*/ (req, res) => {
    Review.findAll({
        attributes: ['id', 'title', 'rating', 'review'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Review.findOne({
        where: { 
            id: req.params.id
        },
        attributes: [ 'id', 'title', 'rating', 'review'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbReviewData => {
        if (!dbReviewData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbReviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Create review
router.post('/', (req, res) => {

    console.log({
        user_id: req.session,
        title: req.body.title,
        rating: req.body.rating,
        review: req.body.review
    })
    
    Review.create({
        user_id: req.session.user_id,
        title: req.body.title,
        rating: req.body.rating,
        review: req.body.review
    })
        .then(dbReviewData => {
            // res.json(dbReviewData)
            res.redirect('/dashboard');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', checkAuth, (req, res) => {
    Review.update(
        {
            title: req.body.title,
            post_text: req.body.post_text
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbReviewData => {
        if (!dbReviewData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbReviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// Get all reviews by movie ID
// router.get('/', /*checkAuth,*/ (req, res) => {
//     Review.findAll({
//         where: {
//             title
//         }
//     })
//     .then(reviewData => {
//         if (!reviewData) {
//             res.status(400).json({ message: 'Unable to find reviews using the provided user ID.'});
//             return;
//         }
//         res.status(200).json(reviewData);
//     })
//     .catch(error => {
//         console.log(error);
//         res.status(500).json({
//             message: 'The system was unable to process your request.',
//             error
//         })
//     });
// });

// // Get all user reviews by user ID
// // /api/review/user/:user_id
// router.get('/user/:user_id', /*checkAuth,*/ (req, res) => {
//     Review.findAll({
//         where: {
//             user_id: req.params.user_id
//         }
//     })
//     .then(reviewData => {
//         if (!reviewData) {
//             res.status(400).json({ message: 'Unable to find reviews using the provided user ID.'});
//             return;
//         }
//         res.status(200).json(reviewData);
//     })
//     .catch(error => {
//         console.log(error);
//         res.status(500).json({
//             message: 'The system was unable to process your request.',
//             error
//         })
//     });
// });

// // Get top 10 user reviews
// router.get('/user/:user_id', /*checkAuth,*/ (req, res) => {
//     Review.findAll({limit:10}) ({
//         where: {
//             user_id: req.params.user_id
//         }
//     })
//     .then(reviewData => {
//         if (!reviewData) {
//             res.status(400).json({ message: 'Unable to find reviews using the provided user ID.'});
//             return;
//         }
//         res.status(200).json(reviewData);
//     })
//     .catch(error => {
//         console.log(error);
//         res.status(500).json({
//             message: 'The system was unable to process your request.',
//             error
//         })
//     });
// });
// // Get review by ID
// // /api/review/:id
// router.get('/:id', /*checkAuth,*/ (req, res) => {
//     Review.findOne({
//         where: {
//             id
//         }
//     })
//     .then(reviewData => {
//         if (!reviewData) {
//             res.status(400).json({message: 'Could not find review using provided ID.'});
//             return;
//         }

//         res.status(200).json(reviewData)
//     })
//     .catch(error => {
//         console.log(error);
//         res.status(500).json({ message: 'The system was unable to process your request.'})
//     });
// });

// // Update review by ID

// // Delete review by ID

module.exports = router;