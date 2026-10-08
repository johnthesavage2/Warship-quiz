const startBtn = document.getElementById('start-btn');
const endBtn = document.getElementById('submit-btn');
const testQuestion = document.getElementsByClassName('question');
const answerA = document.getElementsByClassName('A');
const answerB = document.getElementsByClassName('B');
const answerC = document.getElementsByClassName('C');
const answerD = document.getElementsByClassName('D');
const answerE = document.getElementsByClassName('E');
const submit = document.getElementsByClassName('submission');
let currentQuestion = 0;
let choice = '';
let questions = [
    {
        question: 'Would you want to have your partner taller or shorter than you?',
        answers: {
            A: 'Reach for the sky!', // Nimitz, Forrestal
            B: "They're on top shelf duty", // Kiev, Kirov, Long Beach, Iowa
            C: 'About the same height', // Moskva, Kara, Kashin, Slava, Sovremenny, Tico, Haruna, Tachikaze, Spruance
            D: 'Short king/ queen/ non-binary royalty FTW!', // LA, Alfa, Alvand, Han, Yushio, Adams, Knox, Luda
            E: "I'm Snow White and they're the (one?) dwarf" // Osa, Aliya, Kilo
        }
    },
    {
        question: 'What size would you want your partner to be?',
        answers: {
            A: 'A twig', // Osa, Aliya, Alvand
            B: 'A large branch?', // Kilo, Kashin, Alfa, Tachikaze, Adams, Knox, Luda, Yushio
            C: 'What about average?', // LA, Kara, Sovremenny, Tico, Haruna, Spruance, Han
            D: 'THICK THIGHS (OR CHESTS) SAVE LIVES!', // Kiev, Kirov, Long Beach, Iowa, Moskva, Slava
            E: 'Please... I want you to crush me' // Nimitz, Forrestal
        }
    },
    {
        question: 'How old would you want your partner to be, relative to yourself?',
        answers: {
            A: '#GraveRobber', // Iowa, Forrestal
            B: '*ack* Um, Mommy? Sorry, Mommy?', // Kashin, Long Beach, Osa, Adams
            C: 'Literally born on the same day as me', // Moskva, Alfa, Kara, Haruna, Knox, Luda, Han, Alvand
            D: '"Find me in the mountains, cause Im a cougar"', // Nimitz, Kiev, LA, Tachikaze, Spruance, 
            E: "Why shouldn't I rob the cradle?" // Kilo, Kirov, Slava, Sovremenny, Tico, Yushio, Aliya
        }
    },
    {
        question: 'How outgoing would you like your partner to be?', // Come back to this one
        answers: {
            A: "The party don't start 'till they walk in", // Nimitz, Kirov
            B: 'Designated Hype Man', // Forrestal, Kiev, LA, Slava, Sovremenny, Iowa
            C: 'Being the center of attention... every now and again', // Kilo, Alfa, Long Beach, Tico, Osa, Yushio
            D: "Good at conversations and friendly, but doesn't draw a scene", // Kara, Kashin, Tachikaze, Spruance, Adams, Luda, Han, Aliya, Alvand
            E: 'The quiet one in the corner, plotting their escape' // Haruna, Moskva, Knox
        }
    },
    {
        question: 'A stranger slaps your ass in public. How would you want your partner to react?', // Maybe add a sixth option here, come back to this
        answers: {
            A: 'Fisticuffs, pepper spray, hand grenade, the works', // Kirov, Tico
            B: 'Slaps their ass back, then squares up', // Slava, Sovremenny, Long Beach
            C: 'Throws them a dirty look, "What the hell, dude?"', // Nimitz, Kiev, Kara, Kashin, Tachikaze, Adams,
            D: '"Are you ok? Lets get out of here."', // Forrestal, Moskva, Haruna, Spruance, Knox, Iowa, Aliya, Alvand, Osa, Luda
            E: 'Follows them, finds their car, slashes their tires' // LA, Kilo, Alfa, Yushio, Han, 
        }
    },
    {
        question: "How important is your partner's appearance for you?", 
        answers: {
            A: "If they're not a supermodel, I'm not interested", // Kara, Alfa, Long Beach, LA
            B: 'I want my friends to be a *little* jealous', // Kirov, Iowa, Sovremenny, Tachikaze, Adams
            C: "It's what's on the inside that matters", // Nimitz, Kiev, Kilo, Slava, Kashin, Tico, Luda, Han, Yushio
            D: "Everyone's beautiful in their own way", // Forrestal, Moskva, Haruna, Osa, Knox, Alvand
            E: ';)' // Spruance, Aliya
        }
    },
    {
        question: 'How many kids would you want with your partner?',
        answers: {
            A: 'Zero, thank you very much', // LA, Kilo, Alfa, Kashin, Long Beach, Tachikaze, Osa, Adams, Iowa, Han, Yushio, Luda, Alvand
            B: 'Just one', // Kara, Slava, Sovremenny, Knox
            C: "2-4 isn't too many", // Moskva, Kirov, Tico, Haruna, Spruance, Aliya
            D: '"God wants us to repopulate the Earth" number of kids' // Nimitz, Forrestal, Kiev
        }
    },
    {
        question: "You're going out to eat with your partner, and you get to choose. Which of these places are you going?",
        answers: {
            A: 'A steakhouse', // Nimitz, Forrestal, Tico, Long Beach, Spruance, Adams, LA, Iowa, Knox
            B: 'A sushi bar', // Haruna, Tachikaze, Luda, Han, Yushio
            C: 'Authentic Ukranian restaurant', // Kiev, Moskva, Kirov, Slava, Kilo, Alfa, Kara, Kashin, Sovremenny, Osa
            D: 'Mediterranean cuisine' // Alvand, Aliya
        }
    },
    {
        question: 'Would you want your partner to be a more fast-paced or slow-paced person?',
        answers: {
            A: '#RiseAndGrind', // Alfa, Luda, Osa, Alvand 
            B: 'A real go-getter', // Forrestal, LA, Kara, Kashin, Adams, Iowa, Aliya
            C: 'Life is all about balance', // Nimitz, Kiev, Kirov, Slava, Sovremenny, Tico, Long Beach, Haruna, Tachikaze, Spruance
            D: 'Takes a scenic detour now and again', // Moskva, Knox, Han
            E: '"Goals? What are those?"' // Yushio, Kilo
        }
    }
]
const startQuiz = () => {
    quizContainer.classList.add('hidden');
    quiz.classList.remove('hidden');
}
let answeredQuestions = [];
const submitAnswer = () => {
    let choice = document.querySelector('input[name="answer"]:checked');
    getQuestion();
}
const getQuestion = () => {
    currentQuestion += 1;
    if (answeredQuestions.length === questions.length) {
        console.log("That's it!");
        // console.log(score);
        // let highestScore = 0;
        // let highestScoringShip = '';
        quiz.classList.add('hidden');
        result.classList.remove('hidden');
    }
}
// might have to add a function to reset the score array to 0 after each quiz, otherwise it will keep adding to the previous score
let ships = [ // might have to add the score functions and array to the submitAnswer function, otherwise it will only update the score for the first question
    {nimitz: 0},
    {forrestal: 0},
    {kiev: 0},
    {moskva: 0},
    {kirov: 0},
    {slava: 0},
    {kara: 0},
    {kashin: 0},
    {sovremenny: 0},
    {iowa: 0},
    {ticonderoga: 0},
    {longBeach: 0},
    {spruance: 0},
    {adams: 0},
    {knox: 0},
    {haruna: 0},
    {tachikaze: 0},
    {luda: 0},
    {la: 0},
    {kilo: 0},
    {alfa: 0},
    {han: 0},
    {yushio: 0},
    {osa: 0},
    {aliya: 0},
    {alvand: 0}
]; // index is tied to each ship, score counters increase by calling key
const checkAnswer = (ships) => {
    // const shipScores = Object.values(ships).map(ship => Object.values(ship)[0]);
    const shipScores = ships;
    for (let question in questions) {
        if (choice === questions[0].answers[A]) {
            ships[0].nimitz += 1;
            ships[1].forrestal += 1;
        } else if (choice === questions[0].answers[B]) {
            ships[2].kiev += 1;
            ships[4].kirov += 1;
            ships[11].longBeach += 1;
            ships[9].iowa += 1;
        } else if (choice === questions[0].answers[C]) {
            ships[3].moskva += 1;
            ships[6].kara += 1;
            ships[7].kashin += 1;
            ships[5].slava += 1;
            ships[8].sovremenny += 1;
            ships[10].ticonderoga += 1;
            ships[15].haruna += 1;
            ships[16].tachikaze += 1;
            ships[12].spruance += 1;
        } else if (choice === questions[0].answers[D]) {
            ships[18].la += 1;
            ships[20].alfa += 1;
            ships[21].han += 1;
            ships[22].yushio += 1;
            ships[13].adams += 1;
            ships[14].knox += 1;
            ships[17].luda += 1;
            ships[25].alvand += 1;
        } else {
            ships[23].osa += 1;
            ships[24].aliya += 1;
            ships[19].kilo += 1;
        }
        if (choice === questions[1].answers[A]) {
            ships[23].osa += 1;
            ships[24].aliya += 1;
            ships[25].alvand += 1;
        } else if (choice === questions[1].answers[B]) {
            ships[19].kilo += 1;
            ships[7].kashin += 1;
            ships[20].alfa += 1;
            ships[16].tachikaze += 1;
            ships[13].adams += 1;
            ships[14].knox += 1;
            ships[17].luda += 1;
            ships[22].yushio += 1;
        } else if (choice === questions[1].answers[C]) {
            ships[18].la += 1;
            ships[6].kara += 1;
            ships[8].sovremenny += 1;
            ships[10].ticonderoga += 1;
            ships[15].haruna += 1;
            ships[12].spruance += 1;
            ships[21].han += 1;
        } else if (choice === questions[1].answers[D]) {
            ships[2].kiev += 1;
            ships[4].kirov += 1;
            ships[11].longBeach += 1;
            ships[9].iowa += 1;
            ships[3].moskva += 1;
            ships[5].slava += 1;
        } else {
            ships[0].nimitz += 1;
            ships[1].forrestal += 1;
        }
        if (choice === questions[2].answers[A]) {
            ships[9].iowa += 1;
            ships[1].forrestal += 1;
        } else if (choice === questions[2].answers[B]) {
            ships[7].kashin += 1;
            ships[11].longBeach += 1;
            ships[23].osa += 1;
            ships[13].adams += 1;
        } else if (choice === questions[2].answers[C]) {
            ships[3].moskva += 1;
            ships[20].alfa += 1;
            ships[6].kara += 1;
            ships[15].haruna += 1;
            ships[14].knox += 1;
            ships[17].luda += 1;
            ships[21].han += 1;
            ships[25].alvand += 1;
        } else if (choice === questions[2].answers[D]) {
            ships[0].nimitz += 1;
            ships[2].kiev += 1;
            ships[18].la += 1;
            ships[16].tachikaze += 1;
            ships[12].spruance += 1;
        } else {
            ships[19].kilo += 1;
            ships[4].kirov += 1;
            ships[5].slava += 1;
            ships[8].sovremenny += 1;
            ships[10].ticonderoga += 1;
            ships[22].yushio += 1;
            ships[24].aliya += 1;
        }
        if (choice === questions[3].answers[A]) {
            ships[0].nimitz += 1;
            ships[4].kirov += 1;
        } else if (choice === questions[3].answers[B]) {
            ships[1].forrestal += 1;
            ships[2].kiev += 1;
            ships[18].la += 1;
            ships[5].slava += 1;
            ships[8].sovremenny += 1;
            ships[9].iowa += 1;
        } else if (choice === questions[3].answers[C]) {
            ships[19].kilo += 1;
            ships[20].alfa += 1;
            ships[11].longBeach += 1;
            ships[10].ticonderoga += 1;
            ships[23].osa += 1;
            ships[22].yushio += 1;
        } else if (choice === questions[3].answers[D]) {
            ships[6].kara += 1;
            ships[7].kashin += 1;
            ships[16].tachikaze += 1;
            ships[12].spruance += 1;
            ships[13].adams += 1;
            ships[17].luda += 1;
            ships[21].han += 1;
            ships[24].aliya += 1;
            ships[25].alvand += 1;
        } else {
            ships[3].moskva += 1;
            ships[14].knox += 1;
            ships[15].haruna += 1;
        }
        if (choice === questions[4].answers[A]) {
            ships[4].kirov += 1;
            ships[10].ticonderoga += 1;
        } else if (choice === questions[4].answers[B]) {
            ships[5].slava += 1;
            ships[8].sovremenny += 1;
            ships[11].longBeach += 1;
        } else if (choice === questions[4].answers[C]) {
            ships[0].nimitz += 1;
            ships[2].kiev += 1;
            ships[6].kara += 1;
            ships[7].kashin += 1;
            ships[16].tachikaze += 1;
            ships[13].adams += 1;
        } else if (choice === questions[4].answers[D]) {
            ships[1].forrestal += 1;
            ships[3].moskva += 1;
            ships[15].haruna += 1;
            ships[12].spruance += 1;
            ships[14].knox += 1;
            ships[9].iowa += 1;
            ships[24].aliya += 1;
            ships[25].alvand += 1;
            ships[23].osa += 1;
            ships[17].luda += 1;
        } else {
            ships[18].la += 1;
            ships[19].kilo += 1;
            ships[20].alfa += 1;
            ships[21].han += 1;
            ships[22].yushio += 1;
        }
        if (choice === questions[5].answers[A]) {
            ships[6].kara += 1;
            ships[20].alfa += 1;
            ships[11].longBeach += 1;
            ships[18].la += 1;
        } else if (choice === questions[5].answers[B]) {
            ships[4].kirov += 1;
            ships[9].iowa += 1;
            ships[8].sovremenny += 1;
            ships[16].tachikaze += 1;
            ships[13].adams += 1;
        } else if (choice === questions[5].answers[C]) {
            ships[0].nimitz += 1;
            ships[2].kiev += 1;
            ships[19].kilo += 1;
            ships[5].slava += 1;
            ships[7].kashin += 1;
            ships[10].ticonderoga += 1;
            ships[17].luda += 1;
            ships[21].han += 1;
            ships[22].yushio += 1;
        } else if (choice === questions[5].answers[D]) {
            ships[1].forrestal += 1;
            ships[3].moskva += 1;
            ships[15].haruna += 1;
            ships[14].knox += 1;
            ships[25].alvand += 1;
            ships[23].osa += 1;
        } else {
            ships[12].spruance += 1;
            ships[24].aliya += 1;
        }
        if (choice === questions[6].answers[A]) {
            ships[18].la += 1;
            ships[19].kilo += 1;
            ships[20].alfa += 1;
            ships[23].osa += 1;
            ships[25].alvand += 1;
            ships[7].kashin += 1;
            ships[11].longBeach += 1;
            ships[16].tachikaze += 1;
            ships[13].adams += 1;
            ships[9].iowa += 1;
            ships[17].luda += 1;
            ships[22].yushio += 1;
            ships[21].han += 1;
        } else if (choice === questions[6].answers[B]) {
            ships[6].kara += 1;
            ships[5].slava += 1;
            ships[8].sovremenny += 1;
            ships[14].knox += 1;
        } else if (choice === questions[6].answers[C]) {
            ships[10].ticonderoga += 1;
            ships[12].spruance += 1;
            ships[15].haruna += 1;
            ships[3].moskva += 1;
            ships[24].aliya += 1;
            ships[4].kirov += 1;
        } else {
            ships[0].nimitz += 1;
            ships[2].kiev += 1;
            ships[1].forrestal += 1;
        }
        if (choice === questions[7].answers[A]) {
            ships[0].nimitz += 1;
            ships[1].forrestal += 1;
            ships[10].ticonderoga += 1;
            ships[11].longBeach += 1;
            ships[12].spruance += 1;
            ships[13].adams += 1;
            ships[18].la += 1;
            ships[9].iowa += 1;
            ships[14].knox += 1;
        } else if (choice === questions[7].answers[B]) {
            ships[15].haruna += 1;
            ships[16].tachikaze += 1;
            ships[17].luda += 1;
            ships[21].han += 1;
            ships[22].yushio += 1;
        } else if (choice === questions[7].answers[C]) {
            ships[2].kiev += 1;
            ships[3].moskva += 1;
            ships[4].kirov += 1;
            ships[5].slava += 1;
            ships[6].kara += 1;
            ships[7].kashin += 1;
            ships[8].sovremenny += 1;
            ships[19].kilo += 1;
            ships[20].alfa += 1;
            ships[23].osa += 1;
        } else {
            ships[24].aliya += 1;
            ships[25].alvand += 1;
        }
        if (choice === questions[8].answers[A]) {
            ships[20].alfa += 1;
            ships[17].luda += 1;
            ships[23].osa += 1;
            ships[25].alvand += 1;
        } else if (choice === questions[8].answers[B]) {
            ships[1].forrestal += 1;
            ships[6].kara += 1;
            ships[7].kashin += 1;
            ships[9].iowa += 1;
            ships[13].adams += 1;
            ships[18].la += 1;
            ships[24].aliya += 1;
        } else if (choice === questions[8].answers[C]) {
            ships[0].nimitz += 1;
            ships[2].kiev += 1;
            ships[4].kirov += 1;
            ships[5].slava += 1;
            ships[8].sovremenny += 1;
            ships[10].ticonderoga += 1;
            ships[11].longBeach += 1;
            ships[12].spruance += 1;
            ships[16].tachikaze += 1;
            ships[15].haruna += 1;
        } else if (choice === questions[8].answers[D]) {
            ships[3].moskva += 1;
            ships[21].han += 1;
            ships[14].knox += 1;
        } else {
            ships[19].kilo += 1;
            ships[22].yushio += 1;
        }
    }
} 

startBtn.addEventListener('click', () => {
    startQuiz();
    getQuestion();
})
endBtn.addEventListener('click', (submitAnswer)) 
