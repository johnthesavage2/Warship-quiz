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