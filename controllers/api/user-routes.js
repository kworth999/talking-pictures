const router = require('express').Router();
const { User, Review } = require('../../models/index');
const checkAuth = require('../../utils/auth');

// Get all users - /api/user/
router.get('/', (req, res) => {
   
    User.findAll()
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'Unable to find any users' });
            return;
        }

        res.status(200).json(dbUserData);
// router.get('/', (req, res) => {
//     User.findAll({
//         attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// Get single user - /api/user/:id
router.get('/:id', checkAuth, (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: { 
            id: req.params.id
        },
        include: [
            {
                model: Review,
                attributes: [ 'title', 'rating', 'review', 'user_id' ]
            }
        ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST create user - /api/user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData)
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT update user - /api/user/:id
router.put('/:id', checkAuth, (req, res) => {
    User.update(req.body, {
        where: { id: req.params.id }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'Unable to update user.' });
            return;
        }

        res.status(200).json(dbUserData);
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
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'Unable to delete user.' });
            return;
        }

        res.status(200).json(dbUserData);
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
        where: 
        {
            username: req.body.username
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'Username not found' });
            return;
        }
        console.log(req.body.password);
        // Validate Password
        const validPassword = dbUserData.checkPassword(req.body.password);
        console.log(validPassword);
        console.log(dbUserData);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            // Frontend TODO
            res.json({ user: dbUserData, message: 'You are finally logged in!' });
            console.log('This is working');
            // Redirect user to page once logged in
            // res.redirect('/dashboard');
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'The system was unable to process your request.',
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