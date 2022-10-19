let p1Score = 0;
let p2Score = 0;
let currentScore = 0;

const score = {
    "a":1,
    "b":3,
    "c":3,
    "d":2,
    "e":1,
    "f":4,
    "g":2,
    "h":4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10
}

function updateScoreDisplay(){
    $('#p1Score').text(p1Score);
    $('#p2Score').text(p2Score);
}

function calculateScore(){
    let ret = 0;
    const word = $('#wordInput').val().toLowerCase();
    for(let i = 0 ; i < word.length; i++){
        ret += score[word[i]];
    }
    const x2 = $('#2xInput').val().toLowerCase();
    for(let i = 0 ; i < x2.length; i++){
        ret += score[x2[i]];
    }
    const x3 = $('#3xInput').val().toLowerCase();
    for(let i = 0 ; i < x3.length; i++){
        ret += 2*score[x3[i]];
    }
    const mult = $('#multInput').val();
    ret *= mult;
    return ret;
}

function showScoreResult(){
    currentScore = calculateScore();
    $('#results').removeClass('hidden');
    $('#wordOp').text($('#wordInput').val());
    $('#scoreOp').text(currentScore);
}

function hideResults(){
    $('#results').addClass('hidden');
}

function addToP1(){
    p1Score += currentScore;
    updateScoreDisplay();
    hideResults();
}

function addToP2(){
    p2Score += currentScore;
    updateScoreDisplay();
    hideResults();
}

document.getElementById('calcScore').onclick = showScoreResult;
document.getElementById('p1ScoreIncrease').onclick = addToP1;
document.getElementById('p2ScoreIncrease').onclick = addToP2;