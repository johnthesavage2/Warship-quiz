const startBtn = document.getElementById('start-btn');
const endBtn = document.getElementById('submit-btn');
const testQuestion = document.getElementsByClassName('question');
const answerA = document.getElementById('A');
const answerB = document.getElementById('B');
const answerC = document.getElementById('C');
const answerD = document.getElementById('D');
const answerE = document.getElementById('E');
const submit = document.getElementsByClassName('submission');
let questions = [
    {
        question: 'Would you want to have your partner taller or shorter than you?',
        answers: {
            A: 'Reach for the sky!',
            B: "They're on top shelf duty",
            C: 'About the same height',
            D: 'Short king/ queen/ non-binary royalty FTW!',
            E: "I'm Snow White and they're the (one?) dwarf"
        }
    },
    {
        question: 'What size would you want your partner to be?',
        answers: {
            A: 'A twig',
            B: 'A large branch?',
            C: 'What about average?',
            D: 'THICK THIGHS SAVE LIVES!',
            E: 'Please... I want you to crush me'
        }
    },
    {
        question: 'How old would you want your partner to be, relative to yourself?',
        answers: {
            A: '#GraveRobber',
            B: '*ack* Um, Mommy? Sorry, Mommy?',
            C: 'Literally born on the same day as me',
            D: '"Find me in the mountains, cause Im a cougar"',
            E: "Why shouldn't I rob the cradle?"
        }
    },
    {
        question: 'How outgoing would you like your partner to be?',
        answers: {
            A: "The party don't start 'till they walk in",
            B: 'Official hype man',
            C: 'Being the center of attention... every now and again',
            D: "Good at conversations and friendly, but doesn't draw a scene",
            E: 'The quiet one in the corner, plotting their escape'
        }
    },
    {
        question: 'A stranger slaps your ass in public. How would you want your partner to react?',
        answers: {
            A: 'Fisticuffs, pepper spray, hand grenade, the works',
            B: 'Slaps their ass back, then squares up',
            C: 'Throws them a dirty look, "What the hell, dude?"',
            D: '"Are you ok? Lets get out of here."',
            E: 'Follows them, finds their car, slashes their tires'
        }
    },
    {
        question: "How important is your partner's appearance for you?",
        answers: {
            A: "If they're not a supermodel, I'm not interested",
            B: 'I want my friends to be a *little* jealous',
            C: "It's what's on the inside that matters",
            D: "One man's trash is another man's treasure",
            E: ';)'
        }
    },
    {
        question: 'How many kids would you want with your partner?',
        answers: {
            A: 'Zero, thank you very much',
            B: 'Just one',
            C: "2-4 isn't too many",
            D: '"God wants us to repopulate the Earth" number of kids'
        }
    },
    {
        question: "You're going out to eat with your partner, and you get to choose. Which of these places are you going?",
        answers: {
            A: 'A steakhouse',
            B: 'A sushi bar',
            C: 'Authentic Ukranian restaurant',
            D: 'Mediterranean cuisine'
        }
    },
    {
        question: 'Would you want your partner to be a more fast-paced or slow-paced person?',
        answers: {
            A: '#RiseAndGrind',
            B: 'A real go-getter',
            C: 'Life is all about balance',
            D: 'Takes a scenic detour now and again',
            E: '"Goals? What are those?"'
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
let belknap = 0;
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