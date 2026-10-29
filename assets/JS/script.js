const startBtn = document.getElementById('start-btn');
const endBtn = document.getElementById('submit-btn');
const testQuestion = document.getElementsByClassName('question');
const answerA = document.getElementsByClassName('A');
const answerB = document.getElementsByClassName('B');
const answerC = document.getElementsByClassName('C');
const answerD = document.getElementsByClassName('D');
const answerE = document.getElementsByClassName('E');
const submit = document.getElementsByClassName('submission');
const result = document.getElementById('result');
const quiz = document.getElementById('quiz');
const quizContainer = document.getElementById('quiz-container');
const nimitzResult = document.getElementById('nimitz');
const forrestalResult = document.getElementById('forrestal');
const kievResult = document.getElementById('kiev');
const moskvaResult = document.getElementById('moskva');
const kirovResult = document.getElementById('kirov');
const slavaResult = document.getElementById('slava');
const karaResult = document.getElementById('kara');
const kashinResult = document.getElementById('kashin');
const sovremennyResult = document.getElementById('sovremenny');
const iowaResult = document.getElementById('iowa');
const ticonderogaResult = document.getElementById('ticonderoga');
const longBeachResult = document.getElementById('longBeach');
const spruanceResult = document.getElementById('spruance');
const adamsResult = document.getElementById('adams');
const knoxResult = document.getElementById('knox');
const harunaResult = document.getElementById('haruna');
const tachikazeResult = document.getElementById('tachikaze');
const ludaResult = document.getElementById('luda');
const laResult = document.getElementById('la');
const kiloResult = document.getElementById('kilo');
const alfaResult = document.getElementById('alfa');
const hanResult = document.getElementById('han');
const yushioResult = document.getElementById('yushio');
const osaResult = document.getElementById('osa');
const aliyaResult = document.getElementById('aliya');
const alvandResult = document.getElementById('alvand');
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
    checkAnswer();
}
const getQuestion = () => {  // Not sure if this needs to be alone or combined with response checks
    for (let i in questions) {
        checkAnswer();
        answeredQuestions.push(currentQuestion);
        currentQuestion += 1;
        if (answeredQuestions.length === questions.length) {
            endQuiz();
            quiz.classList.add('hidden');
            result.classList.remove('hidden');
        }
    }

} 
const startTimer = () => {
    if (!countdown) {
        countdown = setInterval(() => {
            time--;
            if (time <= 0) {
                showResult();
            }
        }, 20);
    }
}
// use array.sort() to sort the highest number once the quiz is done; have to change the key-value pairs in the array
// might have to add a function to reset the score array to 0 after each quiz, otherwise it will keep adding to the previous score
let ships = [ // might have to add the score functions and array to the submitAnswer function, otherwise it will only update the score for the first question
    {name: nimitz, score: 0},
    {name: forrestal, score: 0},
    {name: kiev, score: 0},
    {name: moskva, score: 0},
    {name: kirov, score: 0},
    {name: slava, score: 0},
    {name: kara, score: 0},
    {name: kashin, score: 0},
    {name: sovremenny, score: 0},
    {name: iowa, score: 0},
    {name: ticonderoga, score: 0},
    {name: longBeach, score: 0},
    {name: spruance, score: 0},
    {name: adams, score: 0},
    {name: knox, score: 0},
    {name: haruna, score: 0},
    {name: tachikaze, score: 0},
    {name: luda, score: 0},
    {name: la, score: 0},
    {name: kilo, score: 0},
    {name: alfa, score: 0},
    {name: han, score: 0},
    {name: yushio, score: 0},
    {name: osa, score: 0},
    {name: aliya, score: 0},
    {name: alvand, score: 0}
]; // index is tied to each ship, score counters increase by calling key
const checkAnswer = (ships) => { // goes through each question and awards points based on selected response
    // const shipScores = Object.values(ships).map(ship => Object.values(ship)[0]);
    const shipScores = ships;
    for (let i in questions) {
        if (choice === questions[0].answers[A]) {
            shipScores[0].score += 1;
            shipScores[1].score += 1;
        } else if (choice === questions[0].answers[B]) {
            shipScores[2].score += 1;
            shipScores[4].score += 1;
            shipScores[11].score += 1;
            shipScores[9].score += 1;
        } else if (choice === questions[0].answers[C]) {
            shipScores[3].score += 1;
            shipScores[6].score += 1;
            shipScores[7].score += 1;
            shipScores[5].score += 1;
            shipScores[8].score += 1;
            shipScores[10].score += 1;
            shipScores[15].score += 1;
            shipScores[16].score += 1;
            shipScores[12].score += 1;
        } else if (choice === questions[0].answers[D]) {
            shipScores[18].score += 1;
            shipScores[20].score += 1;
            shipScores[21].score += 1;
            shipScores[22].score += 1;
            shipScores[13].score += 1;
            shipScores[14].score += 1;
            shipScores[17].score += 1;
            shipScores[25].score += 1;
        } else {
            shipScores[23].score += 1;
            shipScores[24].score += 1;
            shipScores[19].score += 1;
        }
        if (choice === questions[1].answers[A]) {
            shipScores[23].score += 1;
            shipScores[24].score += 1;
            shipScores[25].score += 1;
        } else if (choice === questions[1].answers[B]) {
            shipScores[19].score += 1;
            shipScores[7].score += 1;
            shipScores[20].score += 1;
            shipScores[16].score += 1;
            shipScores[13].score += 1;
            shipScores[14].score += 1;
            shipScores[17].score += 1;
            shipScores[22].score += 1;
        } else if (choice === questions[1].answers[C]) {
            shipScores[18].score += 1;
            shipScores[6].score += 1;
            shipScores[8].score += 1;
            shipScores[10].score += 1;
            shipScores[15].score += 1;
            shipScores[12].score += 1;
            shipScores[21].score += 1;
        } else if (choice === questions[1].answers[D]) {
            shipScores[2].score += 1;
            shipScores[4].score += 1;
            shipScores[11].score += 1;
            shipScores[9].score += 1;
            shipScores[3].score += 1;
            shipScores[5].score += 1;
        } else {
            shipScores[0].score += 1;
            shipScores[1].score += 1;
        }
        if (choice === questions[2].answers[A]) {
            shipScores[9].score += 1;
            shipScores[1].score += 1;
        } else if (choice === questions[2].answers[B]) {
            shipScores[7].score += 1;
            shipScores[11].score += 1;
            shipScores[23].score += 1;
            shipScores[13].score += 1;
        } else if (choice === questions[2].answers[C]) {
            shipScores[3].score += 1;
            shipScores[20].score += 1;
            shipScores[6].score += 1;
            shipScores[15].score += 1;
            shipScores[14].score += 1;
            shipScores[17].score += 1;
            shipScores[21].score += 1;
            shipScores[25].score += 1;
        } else if (choice === questions[2].answers[D]) {
            shipScores[0].score += 1;
            shipScores[2].score += 1;
            shipScores[18].score += 1;
            shipScores[16].score += 1;
            shipScores[12].score += 1;
        } else {
            shipScores[19].score += 1;
            shipScores[4].score += 1;
            shipScores[5].score += 1;
            shipScores[8].score += 1;
            shipScores[10].score += 1;
            shipScores[22].score += 1;
            shipScores[24].score += 1;
        }
        if (choice === questions[3].answers[A]) {
            shipScores[0].score += 1;
            shipScores[4].score += 1;
        } else if (choice === questions[3].answers[B]) {
            shipScores[1].score += 1;
            shipScores[2].score += 1;
            shipScores[18].score += 1;
            shipScores[5].score += 1;
            shipScores[8].score += 1;
            shipScores[9].score += 1;
        } else if (choice === questions[3].answers[C]) {
            shipScores[19].score += 1;
            shipScores[20].score += 1;
            shipScores[11].score += 1;
            shipScores[10].score += 1;
            shipScores[23].score += 1;
            shipScores[22].score += 1;
        } else if (choice === questions[3].answers[D]) {
            shipScores[6].score += 1;
            shipScores[7].score += 1;
            shipScores[16].score += 1;
            shipScores[12].score += 1;
            shipScores[13].score += 1;
            shipScores[17].score += 1;
            shipScores[21].score += 1;
            shipScores[24].score += 1;
            shipScores[25].score += 1;
        } else {
            shipScores[3].score += 1;
            shipScores[14].score += 1;
            shipScores[15].score += 1;
        }
        if (choice === questions[4].answers[A]) {
            shipScores[4].score += 1;
            shipScores[10].score += 1;
        } else if (choice === questions[4].answers[B]) {
            shipScores[5].score += 1;
            shipScores[8].score += 1;
            shipScores[11].score += 1;
        } else if (choice === questions[4].answers[C]) {
            shipScores[0].score += 1;
            shipScores[2].score += 1;
            shipScores[6].score += 1;
            shipScores[7].score += 1;
            shipScores[16].score += 1;
            shipScores[13].score += 1;
        } else if (choice === questions[4].answers[D]) {
            shipScores[1].score += 1;
            shipScores[3].score += 1;
            shipScores[15].score += 1;
            shipScores[12].score += 1;
            shipScores[14].score += 1;
            shipScores[9].score += 1;
            shipScores[24].score += 1;
            shipScores[25].score += 1;
            shipScores[23].score += 1;
            shipScores[17].score += 1;
        } else {
            shipScores[18].score += 1;
            shipScores[19].score += 1;
            shipScores[20].score += 1;
            shipScores[21].score += 1;
            shipScores[22].score += 1;
        }
        if (choice === questions[5].answers[A]) {
            shipScores[6].score += 1;
            shipScores[20].score += 1;
            shipScores[11].score += 1;
            shipScores[18].score += 1;
        } else if (choice === questions[5].answers[B]) {
            shipScores[4].score += 1;
            shipScores[9].score += 1;
            shipScores[8].score += 1;
            shipScores[16].score += 1;
            shipScores[13].score += 1;
        } else if (choice === questions[5].answers[C]) {
            shipScores[0].score += 1;
            shipScores[2].score += 1;
            shipScores[19].score += 1;
            shipScores[5].score += 1;
            shipScores[7].score += 1;
            shipScores[10].score += 1;
            shipScores[17].score += 1;
            shipScores[21].score += 1;
            shipScores[22].score += 1;
        } else if (choice === questions[5].answers[D]) {
            shipScores[1].score += 1;
            shipScores[3].score += 1;
            shipScores[15].score += 1;
            shipScores[14].score += 1;
            shipScores[25].score += 1;
            shipScores[23].score += 1;
        } else {
            shipScores[12].score += 1;
            shipScores[24].score += 1;
        }
        if (choice === questions[6].answers[A]) {
            shipScores[18].score += 1;
            shipScores[19].score += 1;
            shipScores[20].score += 1;
            shipScores[23].score += 1;
            shipScores[25].score += 1;
            shipScores[7].score += 1;
            shipScores[11].score += 1;
            shipScores[16].score += 1;
            shipScores[13].score += 1;
            shipScores[9].score += 1;
            shipScores[17].score += 1;
            shipScores[22].score += 1;
            shipScores[21].score += 1;
        } else if (choice === questions[6].answers[B]) {
            shipScores[6].score += 1;
            shipScores[5].score += 1;
            shipScores[8].score += 1;
            shipScores[14].score += 1;
        } else if (choice === questions[6].answers[C]) {
            shipScores[10].score += 1;
            shipScores[12].score += 1;
            shipScores[15].score += 1;
            shipScores[3].score += 1;
            shipScores[24].score += 1;
            shipScores[4].score += 1;
        } else {
            shipScores[0].score += 1;
            shipScores[2].score += 1;
            shipScores[1].score += 1;
        }
        if (choice === questions[7].answers[A]) {
            shipScores[0].score += 1;
            shipScores[1].score += 1;
            shipScores[10].score += 1;
            shipScores[11].score += 1;
            shipScores[12].score += 1;
            shipScores[13].score += 1;
            shipScores[18].score += 1;
            shipScores[9].score += 1;
            shipScores[14].score += 1;
        } else if (choice === questions[7].answers[B]) {
            shipScores[15].score += 1;
            shipScores[16].score += 1;
            shipScores[17].score += 1;
            shipScores[21].score += 1;
            shipScores[22].score += 1;
        } else if (choice === questions[7].answers[C]) {
            shipScores[2].score += 1;
            shipScores[3].score += 1;
            shipScores[4].score += 1;
            shipScores[5].score += 1;
            shipScores[6].score += 1;
            shipScores[7].score += 1;
            shipScores[8].score += 1;
            shipScores[19].score += 1;
            shipScores[20].score += 1;
            shipScores[23].score += 1;
        } else {
            shipScores[24].score += 1;
            shipScores[25].score += 1;
        }
        if (choice === questions[8].answers[A]) {
            shipScores[20].score += 1;
            shipScores[17].score += 1;
            shipScores[23].score += 1;
            shipScores[25].score += 1;
        } else if (choice === questions[8].answers[B]) {
            shipScores[1].score += 1;
            shipScores[6].score += 1;
            shipScores[7].score += 1;
            shipScores[9].score += 1;
            shipScores[13].score += 1;
            shipScores[18].score += 1;
            shipScores[24].score += 1;
        } else if (choice === questions[8].answers[C]) {
            shipScores[0].score += 1;
            shipScores[2].score += 1;
            shipScores[4].score += 1;
            shipScores[5].score += 1;
            shipScores[8].score += 1;
            shipScores[10].score += 1;
            shipScores[11].score += 1;
            shipScores[12].score += 1;
            shipScores[16].score += 1;
            shipScores[15].score += 1;
        } else if (choice === questions[8].answers[D]) {
            shipScores[3].score += 1;
            shipScores[21].score += 1;
            shipScores[14].score += 1;
        } else {
            shipScores[19].score += 1;
            shipScores[22].score += 1;
        }
    }
    /* answeredQuestions.push(currentQuestion);
    currentQuestion += 1;
    if (answeredQuestions.length === questions.length) {
        endQuiz();
        quiz.classList.add('hidden');
        result.classList.remove('hidden');
    } */

}
const endQuiz = () => {
    console.log("After careful analysis, our top scientists sourced from only our best free-range asylums have found the warship that is meant for you. Are you ready?");
    startTimer();
    determineWinner();
}
let runnerUps = [];
let winner = [];
const determineWinner = ships => { // creates new array with top 3 ships, then randomly chooses one as the winner
    const sortedShips = ships;
    sortedShips.sort((a, b) => a.score - b.score);
    runnerUps = sortedShips.slice(0, 3);
    winner = runnerUps.slice(Math.floor(Math.random() * 3), ); // need an end value for the slice method
}
const showResult = () => {
    if (winner[0] === 'nimitz') {
        nimitz.classList.remove('hidden');
    }
}
startBtn.addEventListener('click', () => {
    startQuiz();
    getQuestion();
})
endBtn.addEventListener('click', (submitAnswer)) 
