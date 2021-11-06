const { User } = require('../models');

const userdata = [
    {
        username: 'john0',
        email: 'john@example.com',
        password: 'password123'
    }
    // { 
    //     username: 'alice1',
    //     email: 'alice@example.com',
    //     password: 'password123',
    //     top_ten
    // },
    // { 
    //     username: 'bob2',
    //     email: 'bob@example.com',
    //     password: 'password123',
    //     top_ten: 
    //     {
    //         1: 'Goodfellas',
    //         2: 'Star Wars',
    //         3: 'Amadeus',
    //         4: 'Psycho',
    //         5: 'Braveheart',
    //         6: 'M',
    //         7: 'Good Will Hunting',
    //         8: 'Bridges of Madison County',
    //         9: 'Citizen Kane',
    //         10: 'Halloween'
    //     }
    // },
    // {
    //     username: 'jane3',
    //     email: 'jane@example.com',
    //     password: 'password123',
    //     top_ten:
    //     {
    //         1: 'Singin in the Rain',
    //         2: "Schindler's List",
    //         3: 'Full Metal Jacket',
    //         4: 'North by Northwest',
    //         5: 'Lawrence of Arabia',
    //         6: 'Taxi Driver',
    //         7: '1917',
    //         8: 'Monty Python and the Holy Grail',
    //         9: 'Die Hard',
    //         10: 'The Sting'
    //     }
    // },
    // {
    //     username: 'george4',
    //     email: 'george@example.com',
    //     password: 'password123',
    //     top_ten:
    //     {
    //         1: 'Seven Samurai',
    //         2: 'Mrs. Doubtfire',
    //         3: "One Flew Over the Cuckoo's Nest",
    //         4: 'Se7en',
    //         5: 'The Silence of the Lambs',
    //         6: 'Inception',
    //         7: 'Some Like It Hot',
    //         8: 'Parasite',
    //         9: 'The Pianist',
    //         10: 'The Wolf of Wall Street'
    //     }
    // },
    // {
    //     username: 'kathy5',
    //     email: 'kathy@example.com',
    //     password: 'password123',
    //     top_ten:
    //     {
    //         1: 'Interstellar',
    //         2: 'Ben-Hur',
    //         3: "It's a Wonderful Life",
    //         4: 'Stand by Me',
    //         5: 'Mad Max: Fury Road',
    //         6: "Howl's Moving Castle",
    //         7: 'Gone Girl',
    //         8: 'Spirited Away',
    //         9: 'Dead Poets Society',
    //         10: 'Mr. Smith Goes to Washington'
    //     }
    // },
    // {
    //     username: 'alan6',
    //     email: 'alan@example.com',
    //     password: 'password123',
    //     top_ten:
    //     {
    //         1: 'Grand Budapest Hotel',
    //         2: 'The Deer Hunter',
    //         3: 'Kill Bill: Vol. 1',
    //         4: 'Blade Runner',
    //         5: 'Chinatown',
    //         6: 'Raging Bull',
    //         7: 'The Great Escape',
    //         8: 'Jurassic Park',
    //         9: 'The Elephant Man',
    //         10: 'No County for Old Men'
    //     }
    // },
    // {
    //     username: 'penny7',
    //     email: 'penny@example.com',
    //     password: 'password123',
    //     top_ten:
    //     {
    //         1: 'Ghostbusters',
    //         2: 'Iron Man',
    //         3: "Pan's Labyrinth",
    //         4: 'Truman Show',
    //         5: 'Beetlejuice',
    //         6: 'Promising Young Woman',
    //         7: 'Parasite',
    //         8: 'The Nightmare Before Christmas',
    //         9: 'Titanic',
    //         10: 'Transformers'
    //     }
    // },
    // {
    //     username: 'mitch8',
    //     email: 'mitch@example.com',
    //     password: 'password123',
    //     top_ten:
    //     {
    //         1: 'The Shining',
    //         2: 'Poltergeist',
    //         3: 'It',
    //         4: 'Beetlejuice',
    //         5: 'Friday the 13th',
    //         6: "Pan's Labyrinth",
    //         7: 'Nightmare on Elm Street',
    //         8: 'Halloween',
    //         9: 'The Nightmare Before Christmas',
    //         10: 'Rocky Horror Picture Show'
    //     }
    // },
    // {
    //     username: 'francis9',
    //     email: 'francis@example.com',
    //     password: 'password123',
    //     top_ten:
    //     {
    //         1: 'Shawshank Redemption',
    //         2: 'The Godfather',
    //         3: 'Happy Gilmore',
    //         4: 'The Dark Knight',
    //         5: '50 First Dates',
    //         6: 'The Godfather: Part II',
    //         7: 'Click',
    //         8: '12 Angry Men',
    //         9: 'Big Daddy',
    //         10: 'The Lord of the Rings: The Return of the King'
    //     }
    // }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHoooks: true});

module.exports = seedUsers;

