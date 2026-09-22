const startBtn = document.getElementById('start-btn');
const endBtn = document.getElementById('submit-btn');
const testQuestion = document.getElementsByClassName('question');
const answerA = document.getElementsByClassName('A');
const answerB = document.getElementsByClassName('B');
const answerC = document.getElementsByClassName('C');
const answerD = document.getElementsByClassName('D');
const answerE = document.getElementsByClassName('E');
const submit = document.getElementsByClassName('submission');
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
            D: 'THICK THIGHS SAVE LIVES!', // Kiev, Kirov, Long Beach, Iowa, Moskva, Slava
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
            E: 'The quiet one in the corner, plotting their escape' // Maybe add subs here, not sure. Also Haruna, Moskva, Knox
        }
    },
    {
        question: 'A stranger slaps your ass in public. How would you want your partner to react?', // Maybe add a sixth option here, come back to this
        answers: {
            A: 'Fisticuffs, pepper spray, hand grenade, the works', // Kirov, Tico
            B: 'Slaps their ass back, then squares up', // Slava, Sovremenny, Long Beach
            C: 'Throws them a dirty look, "What the hell, dude?"', // 
            D: '"Are you ok? Lets get out of here."',
            E: 'Follows them, finds their car, slashes their tires'
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
let answeredQuestions = [];
const submitAnswer = () => {
    let choice = document.querySelector('input[name="answer"]:checked');
}
const getQuestion = () => {
    const newQuestion = questions;
    testQuestion.textContent = newQuestion.question;
    answerA.textContent = newQuestion.answers.A;
    answerB.textContent = newQuestion.answer.B;
    answerC.textContent = newQuestion.answer.C;
    answerD.textContent = newQuestion.answer.D;
    answerE.textContent = newQuestion.answer.E;
    answeredQuestions.push(newQuestion);
}
startBtn.addEventListener('click', () => {
    startQuiz();
    getQuestion();
})
endBtn.addEventListener('click', (submitAnswer)) 

let iowa = 0;
let kirov = 0;
let nimitz = 0;
let forrestal = 0;
let kiev = 0;
let moskva = 0;
let slava = 0;
let sovremenny = 0;
let kara = 0;
let ticonderoga = 0;
let longBeach = 0;
let la = 0;
let kilo = 0;
let alfa = 0;
let kashin = 0;
let spruance = 0;
let osa = 0;
let haruna = 0;
let tachikaze = 0;
let yushio = 0;
let knox = 0;
let adams = 0;
let luda = 0;
let han = 0;
let aliya = 0;
let alvand = 0;