const router = require('express').Router();
const { User, Review } = require('../../models/index');
const withAuth = require('../../utils/auth');

// Get all users - /api/user/
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// Get single user - /api/user/:id
router.get('/:id', (req, res) => {
    User.findOne({
        include: [
            {
                model: Review
            }
        ]
    })
    .then(userData => {
        if (!userData) {
            res.status(400).json({ message: 'Unable to find any users using the provided ID.' });
            return;
        }

        res.status(200).json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'The system was uanble to process your request.',
            err
        })
    });
});

// POST create user - /api/user
router.post('/', checkAuth, (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(userData => {
        if (!userData) {
            res.status(400).json({ message: 'Unable to create user.' });
            return;
        }

        res.status(200).json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'The system was uanble to process your request.',
            err
        })
    });
});

// PUT update user - /api/user/:id
router.put('/:id', checkAuth, (req, res) => {
    User.update(req.body, {
        where: { id: req.params.id }
    })
    .then(userData => {
        if (!userData) {
            res.status(400).json({ message: 'Unable to update user.' });
            return;
        }

        res.status(200).json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'The system was uanble to process your request.',
            err
        })
    });
});

// DELETE user - /api/user/:id
router.delete('/:id', checkAuth, (req, res) => {
    User.destroy({
        where: { id: req.params.id }
    })
    .then(userData => {
        if (!userData) {
            res.status(400).json({ message: 'Unable to delete user.' });
            return;
        }

        res.status(200).json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'The system was uanble to process your request.',
            err
        })
    });
});

// Login - /api/user/login
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(userData => {
        if (!userData) {
            res.status(400).json({ message: 'Unable to find a user using the provided user ID.' });
            return;
        }

        // Validate Password
        const validPassword = userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;
            // Frontend TODO
            
            // Redirect user to page once logged in
            res.status(200).json({
                message: 'Successfully logged in.',
    
                session: req.session
            });
        });

        

    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'The system was uanble to process your request.',
            err
        });
    });
});

// Logout - /api/user/logout
router.post('/logout', (req, res) => {
    console.log(req.session);
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });   
    } else {
        res.status(404).end();
    }
});

module.exports = router;