const router = require('express').Router();
const { User, Review } = require('../../models/index');
const withAuth = require('../../utils/auth');

// Get all reviews - /api/review/
router.get('/', (req, res) => {
    Review.findAll({
        attributes: [ 'id', 'imdb_id', 'user_id', 'rating', 'comment' ],
        order: [[ 'created_at', 'DESC' ]],
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

//get one review
router.get('/:id', (req, res) => {
    Review.findOne({
      where: {
        id: req.params.id
      },
      attributes: [ 'id', 'imdb_id', 'user_id', 'rating', 'comment' ],
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
router.post('/', withAuth, (req, res) => {
    Review.create({
        title: req.body.title,
        review_text: req.body.review_text,
        user_id: req.body.user_id
    })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
    });
});

// Get all reviews by movie ID
router.get('/', checkAuth, (req, res) => {
    Review.findAll({
        where: {
            imdb_id: req.params.imdb_id
        }
    })
    .then(dbReviewData => {
        if (!dbReviewData) {
            res.status(400).json({ message: 'Unable to find reviews using the provided user ID.'});
            return;
        }
        res.status(200).json(dbReviewData);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'The system was unable to process your request.',
            error
        })
    });
});

// Get all user reviews by user ID
// /api/review/user/:user_id
router.get('/user/:user_id', checkAuth, (req, res) => {
    Review.findAll({
        where: {
            user_id: req.params.user_id
        }
    })
    .then(dbReviewData => {
        if (!dbReviewData) {
            res.status(400).json({ message: 'Unable to find reviews using the provided user ID.'});
            return;
        }
        res.status(200).json(dbReviewData);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'The system was unable to process your request.',
            error
        })
    });
});

// Get top 10 user reviews
router.get('/user/:user_id', checkAuth, (req, res) => {
    Review.findAll({limit:10}) ({
        where: {
            user_id: req.params.user_id
        }
    })
    .then(dbReviewData => {
        if (!dbReviewData) {
            res.status(400).json({ message: 'Unable to find reviews using the provided user ID.'});
            return;
        }
        res.status(200).json(dbReviewData);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'The system was unable to process your request.',
            error
        })
    });
});
// Get review by ID
// /api/review/:id
router.get('/:id', checkAuth, (req, res) => {
    Review.findOne({
        where: {
            id
        }
    })
    .then(dbReviewData => {
        if (!dbReviewData) {
            res.status(400).json({message: 'Could not find review using provided ID.'});
            return;
        }

        res.status(200).json(dbReviewData)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: 'The system was unable to process your request.'})
    });
});

// Update review by ID

// Delete review by ID

module.exports = router;