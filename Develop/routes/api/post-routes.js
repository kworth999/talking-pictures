const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');

// get all posts for one user
router.get('/:id', (req, res) => {
    Post.findAll({
        where: { 
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
                // order: ['createdAt', 'DESC']
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'User has not created any posts yet' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});