const { Post } = require('../models');

const postdata = [
    {
        title: 'The Godfather',
        score: 95,
        body: "The film is perfect and only a dope wouldn't watch it. I'll point out that you do NOT need to like gangster films to enjoy this film. Yes, it's violent and nasty in spots--but it's also brilliantly written and produced from start to finish and deserves the accolades it's received.",
        user_id: 10
    },

    {
        title: 'Everything Must Go',
        score: 82,
        body: "While the script to 'Everything Must Go' isn't perfect, Will's performance is darn close. He doesn't, at any point, try to morph into the Will we have come to know in his comedic roles. The story is sad, depressing and real. And Will plays the role perfectly. I feel his sadness, depression, progression through the stages he's moving through as a result of enduring a lot in such a short time",
        user_id: 1
    },

    {
        title: 'Reminiscence',
        score: 28,
        body: "Think of every cliché you can imagine in a film, and you'll still be very far. 'Reminiscence' is a cringe-fest. You probably heard of all the 'Chinatown' and 'Inception' comparisons, but this neo-noir attempt is absolutely boring and uninspiring. It reminded me of 'Gattaca', and made me appreciate it even more because this is just bad at so many levels. You'll stop caring about the plot halfway or before.",
        user_id: 9
    },

    {
        title: 'The Rocky Horror Picture Show',
        score: 72,
        body: "Totally on the money as a representation of dark humour but time has aged this film and there is no denying that it is not scary. Tim Curry is made of the stuff of legends and he is the only bright spark in an otherwise slightly dull experience. Wholly relevant but underwhelming and slightly too niche for my tastes. I am sure this works better as literature or musical.",
        user_id: 2
    },

    {
        title: 'Dolphin Tale 2',
        score: 43,
        body: "You can't help but fall in love with the dolphins and there intelligent minds and this movie really does show that they have got a bad attitude just like adults do. They also can feel loneliness and get upset when there best friend has been taken from them! Anyway, I had to keep in mind that this was a true story and the real footage at the end does show that the director stayed true to what really happened. The problem was that it just wasn't that entertaining. It was more of a look behind the scenes of a theme park. It more or less, carries on from the first movie so if you was a fan of the first outing, then you should enjoy this movie.",
        user_id: 8
    },

    {
        title: 'The Last Stand',
        score: 63,
        body: "The premise is silly that a guy driving from Las Vegas couldn't be stopped even though the cops have a helicopter and multiple road blocks. Just a simple tire spike strip could easily have stopped him. If Cortez had all that resources, there has got to be a better way. The saving grace for this movie is Schwarzenegger and the small town shoot out. It's a lot of fun. It has just enough humor with the great shoot 'em up action. That section is enough to recommend the movie. The bridge part is again a little silly. Arnold wouldn't have a chance at hand to hand combat. Some sniper in Mexico would have taken Arnie out. Anyways after the shootout in town, the climax seems anti-climatic.",
        user_id: 3
    },

    {
        title: 'The Legend of Hercules',
        score: 3,
        body: "This by far has to be the one of the worst movies ever made. I read bad reviews of this movie but decided to watch for two reasons – Renny Harlin and Liam McIntyre. The problem with this movie cannot be explained. Like the matrix, you have to see it to believe it. Kevin Lutz as Hercules can't act to save his life. Scott Adkins is absolutely out of place as the King Amphitryon. The story revolves around how Hercules come to be, his outcast & gladiatorial life and return to eventually claim the throne. That's it. There is absolutely nothing to care for in this dud of a movie. If you hate your life or want to know how to make a bad movie with $40 million, this will tickle your fancy.",
        user_id: 7
    },

    {
        title: 'Batman Forever',
        score: 22,
        body: "This is the only Batman film of the five I've seen that I felt was totally stupid and the villains were so loud, obnoxious and over-the-top that I never owned it. I've owned all the others and still have three of them. I had no trouble with Val Kilmer as Batman. He played the role about as well as all the other guys. However, Chris O'Donnell was annoying. Meanwhile, Tommy Lee Jones and Jim Carrey both overacted so badly in the role of the villains that it make the movie just look ludicrous. They gave me a headache listening to all their rants and raves, and ruined the film for me. I still enjoyed the special effects and some of the wild action scenes but overall the minuses in here were more than the pluses.",
        user_id: 4
    },

    {
        title: 'Little Big League',
        score: 68,
        body: "This is a solid kids movie. It is a dream come true for any young baseball lover. Billy is wise beyond his years and smarter than the adults. There are lessons to be learned, hard decisions to make, and the overarching joy of baseball. It also helps to have real MLB teams and the real parks.",
        user_id: 6
    },

    {
        title: 'Conquest of the Planet of the Apes',
        score: 45,
        body: "Not bad, not necessary, but I guess if the saga has to continue, they could have done worse. It's basically just another excuse to exploit the franchise, fill the box office tills, yet not utilize the strong simian story of family and understanding from the other films. This gives the impression that the humans writing this genuinely hate humanity and didn't see any point of their own race continuing to survive, let alone dominate. It's a pretty ugly pill to swallow, and leaves the audience depressed and feeling hopeless.",
        user_id: 5
    },
    

]