const { Review } = require('../models');

const reviewData = [
    {
        title: 'The Godfather',
        rating: 95,
        review: "The film is perfect and only a dope wouldn't watch it. I'll point out that you do NOT need to like gangster films to enjoy this film. Yes, it's violent and nasty in spots--but it's also brilliantly written and produced from start to finish and deserves the accolades it's received.",
        user_id: 1
    },
    {
        title: 'Finding Neverland',
        rating: 78,
        review: "I really can't find much fault with this movie except that the first 30 minutes might be a little slow. If you know that in advance and stick with it, it's a wonderful and rewarding movie experience.",
        user_id: 2
    },
    {
        title: 'Interstellar',
        rating: 87,
        review: "Overall, less than stellar and was expecting much better. This said, 'Interstellar' is often impressive and very beautiful (especially technically, though the central relationship was also beautifully realised).",
        user_id: 3
    }
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews ;