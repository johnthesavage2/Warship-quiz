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

const ships = {
    nimitz: {
        id: 'nimitz',
        image: '/assets/images/Nimitz result.jpg',
        score: 0,
        name: 'USS Nimitz',
        description: 'Displacing over 100,000 tons and over 1,000 feet long, this Nimitz-class carrier is an ABSOLUTE UNIT! She might never walk down the catwalk at New York Fashion Week, but she has all the space you need to start your comically oversized family, with plenty of hangar space to spare. While not the type of ship to end a fight, her massive amount of "kids" makes her presence known to all around her, even your sworn enemies. Built in 1975, shes still going strong today, and her speed of 32 knots makes her fast for her impressive size.',
    },
    forrestal: {
        id: 'forrestal',
        image: '/assets/images/Forrestal result.jpg',
        score: 0,
        name: "USS Forrestal",
        description: "A Forrestal-class aircraft carrier who, being built in 1955, has all the age and experience you could ever want in a partner. Weighing over 60,000 tons and over 1,000 feet long, there is plenty of her to go around. At 33 knots, she's a speedy ship, and her huge 'hangars' are perfect for all your personal and familial needs. Her large aircraft complement means she will love to start a fight, even if she can't necessarily finish it."
    },
    kiev: {
        id: 'kiev',
        image: '/assets/images/Kiev result.jpg',
        score: 0,
        name: 'TAVKR Kiev',
        description: "The first Kiev-class aircraft carrier, although she'll tell you she's a 'large aviation cruiser' (sure, whatever). Equipped with helicopters and light aircraft, she's great at digging up the tea on others, and she has plenty of ways to defend herself if that gets her into trouble. Built in 1975, she's a young and energetic ship, even if her modest aircraft means she won't easily engage in a fight. She can hold up to 30 aircraft, making her ideal to start your own little traditional Russian family. At 45,000 tons and 900 feet long, she's perfect for someone who wants a little more to hold onto, and her speed of 32 knots means she can both get shit done while also enjoying the little things in life."
    },
    moskva: {
        id: 'moskva',
        image: '/assets/images/Moskva result.jpg',
        score: 0,
        name: 'PKR Moskva',
        description: "A Moskva-class helicopter carrier that might get overlooked among the 'big' and 'important' supercarriers, but she's got a lot of heart. At *only* 12,000 tons and about 600 feet long, there's not too much to her, but being built in 1967, she has plenty of life experience with which to guide your relationship. She might not look the part of a Hollywood actress, but her hanger space would be great to start a small family. Not really built for fighting, either to start or end a conflict, and with a respectable if slower speed of 28 knots, she's perfect if you're looing for a quiet life with a partner who will always be there for you, even if she is never the life of the party. Be careful though, she's liable to fall over without warning, so always be on your guard!"
    },
    kirov: {
        id: 'kirov',
        image: '/assets/images/Kirov result.jpg',
        score: 0,
        name: 'TARKR Kirov',
        description: "The mighty Kirov! Lead ship of the Kirov-class large missile cruisers, she is the largest surface combatant built since WW2. Weighing in at a whopping 24,000 tons, and over 800 feet long, she's a big ship who knows how to get things going. With 20 long-range anti-ship missiles, and a range of self-defense weapons, she can start and end anything she wants, looking both dangerous and classy at the same time. First built in 1980, she's a newcomer to the dating scene, but her hull-mounter hanger can fit plenty of 'kids' and her speed of 32 knots means she can quickly duck and cover if things get a little too spicy. But it's Kirov. She loves it when it's spicy."
    },
    slava: {
        id: 'slava',
        image: '/assets/images/Slava result.jpg',
        score: 0,
        name: 'RKR Slava',
        description: "The first Slava-class missile cruiser, and coming in at 9,300 tons, she's a little thicc compared to most of the other ships around, but is always in her big sibling Kirov's shadow. And no, she isn't self-conscious about it, thank you very much. Her 16 Sandbox anti-ship missiles really aren't easy on the eyes, but she's determined to prove that she can get a party started just as well as her big sibling. And with an array of defensive weapons and a 32 knot speed, she can also resolve sticky situations if the need arises. Built in 1982, it'd be hard to find someone younger than her, and her small hanger space means she'll never want a large family."
    },
    kara: {
        id: 'kara',
        image: '/assets/images/Kara result.jpg',
        score: 0,
        name: 'BPK Nikolayev',
        description: "Graceful yet formidable, this Kara-class cruiser is the jack of all trades in the warship dating scene. At 8,200 tons and 560 feet long, her size and length aren't particularly noteworthy, but her 34 knot top speed and single hanger means she can start a family and keep it going through all of life's twists and turns. Like the gorgeous cashier at your local supermarket, she might not look like she'll get into hot water, but her array of weapons, both offensive and defensive, might surprise you! First built in 1971, she's just the right age for anyone who doesn't want someone too inexperienced or too old to be fun."
    },
    kashin: {
        id: 'kashin',
        image: '/assets/images/Kashin result.jpg',
        score: 0,
        name: 'BPK Otvazhny',
        description: "This Kashin-class destroyer is ready for an adventure! First built in 1962, she's been around the block a few times, and isn't here to play games. At 470 feet but only 3,400 tons, she's perfect if you're looking for someone tall and skinny! At 34 knots, she knows where she wants to go in life, and there's no room for kids in a relationship with her. Otherwise, she'll mostly keep to herself, but soon you'll notice how beautiful she is and just how dependable she can be, even if she's quietly supporting her friends and family in the background. A cute little ship that you can always count on, what's not to love?"
    },
    sovremenny: {
        id: 'sovremenny',
        image: '/assets/images/Sovremenny result.jpg',
        score: 0,
        name: 'EM Besstrashny',
        description: "Besstrashny means fearless, and let me tell you, this maverick has no fear! One of the Sovremenny-class destroyers, this young thing is coming out swinging, and good luck if you get in her way! At *only* 6,600 tons and just over 500 feet long, she might seem unremarkable, but her deadly Sunburn anti-ship missiles would make even a Kirov or Ticonderoga quake in their stern! Add onto that an instinctive ability to defend herself thanks to a top-of-the-line missile system and a top speed of 32 knots, and you've found a partner who can punch well above her weight. Combined with her flattering twin 5-inch guns and a style like she models for Calvin Klein on the side, she will sweep you off your feet from the moment you are blessed enough to lay eyes on her. First built in 1980, she has plenty of fight still in her, too."
    },
    iowa: {
        id: 'iowa',
        image: '/assets/images/Iowa result.jpg',
        score: 0,
        name: 'USS Iowa',
        description: "When you hear 'battleship', you think of Iowa! The first Iowa-class battleship, Iowa is as old-school as can be! First built in 1943, she was considered old when most Cold War warships hadn't even been designed. At 890 feet long and displacing 48,000 tons, calling her a big ship would be an understatement, and her 16-inch guns make a statement both on the streets and in the sheets. Like a true American, she lives a fast life, with no room for a big family, and her upgrades in the 1980s made her quite formidable and ready to get a party started, although she might need help defending herself. While a relic of an older time that has been lost to history, her age and power are still as reliable as when she first ripped apart Japanese ships in World War 2."
    },
    ticonderoga: {
        id: 'ticonderoga',
        image: '/assets/images/Tico result.jpg',
        score: 0,
        name: 'USS Ticonderoga',
        description: "The lead ship of the Ticonderoga-class cruisers, and named after one of the first American Revolutionary War battles, this imposing ship marks the transition between the Cold War and modern era in naval combat. Her boxy superstructure might look like a modern art piece gone wrong, but her advanced combat systems means she can weather all of the storms life throws at you! She doesn't mind being in the spotlight, and her hangar is big enough to support a small family, too. At 9,800 tons and 570 feet long, she's perfectly normal physically, and her 32 knot top speed means she's happy finding a balance in life."
    },
    longbeach: {
        id: 'longbeach',
        image: '/assets/images/Long Beach result.jpg',
        score: 0,
        name: 'USS Long Beach',
        description: "All Hail the Mighty S E A C U B E! USS Long Beach, the only ship of her class, is a ship that demands attention! Her distinctive bridge superstructure, meant to house experimental radars, is such an eyesore that it comes all the way around to being gorgeous, helped by her 720 feet long, cruiser-style hull. and over 15,000 tons in displacement, she's a little on the bigger side, if you don't mind that. First built in 1961, she's on the older side, and has seen her fair share of the world. Heavily armed and updated throughout her service, she loves both having fun and getting in and out of trouble, and while not interested in having many kids or taking life too fast, she'd be perfect if traveling the world is your joy in life."
    },
    spruance: {
        id: 'spruance',
        image: '/assets/images/Spruance result.jpg',
        score: 0,
        name: 'USS Spruance',
        description: "The first of the Spruance-class destroyers, USS Spruance might look like someone piled a bunch of UPS boxes on top of a ship's hull, but this modest ship has it where it counts. Lightly armed and not possessing many defensive systems, you won't see her getting smashed in a bar or networking with 'important' people, but her strength is in doing the unglamorous and overlooked work that others might ignore. At about 8,000 tons and about 560 feet long, her physical characteristics are average, and at 32 knots, she finds a balance in living life. First built in 1975, she's relatively young, and her large hanger and quiet confidence means she's perfect for starting a family."
    },
    adams: {
        id: 'adams',
        image: '/assets/images/Adams result.jpg',
        score: 0,
        name: 'USS Charles F. Adams',
        description: "This US Adams-class destroyer is not to be underestimated. While not as intimidating as some other warships, she knows how to defend herself, and it's a mistake to tangle with her unnecessarily. At only 3,200 tons and 430 feet long, she's on the smaller side, but her speed of 33 knots means she's ready to get shit done! She's a little on the shy side, but still ready to deal with any BS that comes her way. With a very balanced design, she's sure to catch your eye, and she's a bit of a lone ranger without any space for helicopters. First built in 1960, she's old enough to see through all the inauthenticity around her, and is the type to get something right the first time and continue on."
    },
    knox: {
        id: 'knox',
        image: '/assets/images/Knox result.jpg',
        score: 0,
        name: 'USS Knox',
        description: "The first ship of the numerous American Knox-class frigates (there were 46 built), and a quiet individual. She wasn't really built for an exciting life, so don't expect to find her in the club or cornering the stock market. Having only basic defenses, she was built to hunt submarines in the Atlantic, so she's more of a prowler than a brawler. At 4,000 tons and 400 feet long, she's understandably small, and not likely to wow you at first sight. That said, moving at a stately 27 knots and with a decently sized aircraft hangar, she's an ideal partner for anyone who cares more about enjoying life and building a small family than impressing others or making waves (no pun intended)."
    },
    haruna: {
        id: 'haruna',
        image: '/assets/images/Haruna result.jpg',
        score: 0,
        name: 'JS Haruna',
        description: "One of the two Japanese Haruna-class, she'll tell you she's a 'helicopter destroyer', but she's probably just saying that to exploit some kind of legal loophole. Dedicated to carrying up to three helicopters, she's very much willing to start a big family if that's what you're looking for, although her imposing superstructure means she might not win many beauty contests. She's probably the kind of ship who's going to hide from the spotlight as much as possible, and she's more likely to de-escalate a situation rather than escalate it. At 5,000 tons and 500 feet long, she's perfectly normal, and clocking in at 31 knots, is ready to take life as it comes while still finding time to value friends and family. Be sure to find the best sushi spots around, though!"
    },
    tachikaze: {
        id: 'tachikaze',
        image: '/assets/images/Tachikaze result.jpg',
        score: 0,
        name: 'JS Tachikaze',
        description: "First of the Japanese Tachikaze-class guided missile destroyers, the Tachikaze may not seem like much, but she's a force to be reckoned with in the right situations. Built in 1976, she's relatively new to the scene, and is full of energy! With advanced computers and sensor systems, it's easy for her to spot trouble, and she has a good chance of making it out unscathed. She generally prefers American styles, but might be ashamed to admit it out of fear of embarrassing her Japanese heritage. At 32 knots, she's ready to live life to the fullest, but has time for the quieter things, evidenced by her name, which translates to 'standing wind.' She's 3,800 tons and 470 feet long, which means she's tall and skinny, and she's intelligently laid out, giving a confident appearance. She knows what she's doing, and you won't forget that."
    },
    luda: {
        id: 'luda',
        image: '/assets/images/Luda result.jpg',
        score: 0,
        name: 'PLAN Nanjing',
        description: "One of the many Luda-class destroyers of the People's Liberation Army Navy (And yes that is the name of the Chinese Navy), it might be easy to mix her up with one of her many siblings and half-siblings. Big mistake! She's well armed with the best of, well, 1950's missile technology, but that can still ruin your day if you're not careful! Her manual air-defense artillery is old by most standards, but with a speed of 38 knots, she can at least get out of trouble and move on to the next big thing quickly! She's not the type at all to stop and smell the roses, so you best be ready! She's only 430 feet long and displaces about 3,600 tons, so she's perfect to be the little spoon, if you can get her to relax for five minutes. Very unique, she has her charm once you get a good look at her. Don't expect a large family though, since her lack of a hanger and fast pace means she has much bigger goals to aim for."
    },
    la: {
        id: 'la',
        image: '/assets/images/LA result.jpg',
        score: 0,
        name: 'USS Los Angeles',
        description: "The apex predator of the Cold War-era undersea environment, USS Los Angeles, first of her class of dozens (62 to be exact!) is not someone to be trifled with. Deadly quiet, and packing some of the most advanced submarine weapons in the world, she's perfect for making trouble. Prove you're adept at jump-scaring others in random circumstances, and you'll win a place in her heart. She might start out stealthy and unseen, but when she wants to, she can make quite the appearance. Displacing 6,000 tons and measuring 360 feet long, she might be a little big for her size, but her smooth, bullet-like hull makes you notice her, and her sail and dive planes make her look formidable. First built in 1976, and with a speed of over 33 knots, she's a young American monster, ready to make her mark on the strange world under the ocean's surface."
    },
    kilo: {
        id: 'kilo',
        image: '/assets/images/Kilo result.jpg',
        score: 0,
        name: 'B-401',
        description: "One of the many Kilo-class submarines, B-401 is a fine example of Soviet and Russian engineering. First built in 1980, she's just now entering the wider world, and is ready to draw your attention. In the right circumstances, she can be the life of the party, even if she might need help getting out of sticky situations. At 2,300 tons and 240 feet long, she'll be literally looking up to you at all times, and her unique teardrop hull might be more curious than flattering. With the older diesel-electric engines, she might be the sneakiest person around, although with a speed of only 20 knots, don't expect her to dream too big when it comes to setting life goals together. Being a submarine, there isn't much room at all, much less for a family, but when it comes to stealth, you have the right ship."
    },
    alfa: {
        id: 'alfa',
        image: '/assets/images/Alfa result.jpg',
        score: 0,
        name: 'K-64',
        description: "One of the seven Soviet Alfa-class submarines, this ship really is not like the other ships! Her experimental titanium hull, efficiently and aesthetically streamlined, gives her a top speed of around 42 knots, making her a thoroughbred of the sea, meaning you can get to everything you would want to do. She has a powerful liquid-metal reactor that enables her to leave everyone else in the dust. At 2,300 tons and 260 feet long, she's a little on the smaller side, but that makes her even more determined to reach her goals. She definitely has the presence to get people's attention when she wants it, but is a little more sneaky when it comes to dealing with situations. Built in 1971, she has the perfect balance of experience and energy, too, so whatever you're doing, you'll quit before she does. She's has no time for BS and is out to make her mark on the world's oceans."
    },
    han: {
        id: 'han',
        image: '/assets/images/Han result.jpg',
        score: 0,
        name: 'PLAN 404',
        description: "One of the Han-class submarines of the PLAN (People's Liberation Army Navy) aka Chinese Navy, PLAN 404 is modest, but is not to be underestimated! Plenty hefty at 5,600 tons, and small and sweet at only 350 feet long, these were the first nuclear-powered submarines produced in Asia. Given their first-generation status, they don't attract much attention to themselves, and prefer indirect solutions to problems rather than a direct confrontation. Despite being nuclear-powered, they only manage a speed of 25 knots, which means they prefer to stop and enjoy the little things in life compared to making waves and being seen. I mean, of course they wouldn't want to be seen, since they're submarines. Built in 1974, they still have plenty of life in them, but don't expect a huge family or anything with them. And be careful, they have a tendency to weirdly follow strangers around, so be on your guard!"
    },
    yushio: {
        id: 'yushio',
        image: '/assets/images/Yushio result.jpg',
        score: 0,
        name: 'JS Yushio',
        description: "JS Yushio, the first of the Yushio-class submarines of the Japanese Navy, is a fine blend of old and new! Built with the modern teardrop hull, but powered by the tried and true diesel-electric powerplant that powered the first submarines, she can reach a top speed of 20 knots. Yeah you'll need to be well prepared to get her to do anything substantial! Weighing in at 2,200 tons and with a length of 250 feet, you won't have a problem throwing her over your shoulder should she ever get out of line! Perfectly equipped to engage in social situations, she might be a bit avoidant to solving sticky situations. Built in 1980, she has a long road ahead of her and has a lot to learn!"
    },
    osa: {
        id: 'osa',
        image: '/assets/images/Osa result.jpg',
        score: 0,
        name: 'R-118',
        description: "One of the MANY Soviet Osa-class missile boats (and by many, I mean, like, over 400), R-118 isn't 'like the other ships'. The fact that she's slightly larger than your average football in length (130 feet long) and displacement (210 tons) means that she has a lot to prove! But trust me, don't try provoking her. She might be small, but at 38 knots, she's fast, and if you rub her the wrong way, she and dozens of her look-alike siblings will brew up a storm with their cloud of anti-ship missiles. She won't do much to justify herself though, probably just glare at you, menacingly. First built in 1960, she's probably old enough to learn that that's the best way to get her point across. She might look like a carbon copy of all the quirky ships around, but she still has some charm to her that you'll grow to love."
    },
    aliya: {
        id: 'aliya',
        image: '/assets/images/Aliya result.jpg',
        score: 0,
        name: 'INS Aliya',
        description: "A bit of an odd duck, INS Aliya of the Israeli Navy is a resilient if underappreciated ship. With a conventional armament for a missile boat in front of a large helicopter hangar, she is business in the front with a party in the back! Her spacious hangar means she's happy to start a family, even if her small size of 500 tons and short length of about 200 feet means she could be easily mistaken for one of the kids once they're old enough. Her speed of 33 knots means she's ready to keep up with all the hassle of raising a family, and her youth, being built in 1980, means she has the energy to tackle the joys and frustrations of taking care of kids. She might not look like a supermodel, and she won't be the life of the party, but her dedication and inner strength shine brighter than surface-level 'beauty' could. And her Mediterranean heritage might throw a surprise or two your way if you're lucky enough to win her over."
    },
    alvand: {
        id: 'alvand',
        image: '/assets/images/Alvand result.jpg',
        score: 0,
        name: 'IRIS Alvand',
        description: "One of the four Alvand-class frigates of the Iranian Navy, IRIS Alvand isn't one to be making a scene. At 1,100 tons and 310 feet long, she's itty bitty, and her personality also isn't one that will grab your attention at first sight. She'll happily talk for hours about her niche interests, although she'll deny it if you bring it up in a large group. With a speed of up to 39 knots, but more commonly cruising around at 17, she's also a bit of a  contradiction, either wanting everything done now or happily spending hours at home, quietly watching the world move around her. Built in 1971, she's a perfect balance of experience and youth, and her home waters of the Persian Gulf has shown her plenty of excitement. Buckle up, though, since Fate might have more serious plans for her."
    }
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
    // const x = Math.floor(Math.random() * 3)
    // winner = runnerUps.slice(x, x + 1)
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
