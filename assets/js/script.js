
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer(); 
            } else {
                let gameType = this.getAttribute("data-type");
                runGame("gameType");
            }
        });
    }

    runGame("addition");
});

/**
 * the main game 'loop', called when the script is first loaded
 * and after the users answer has been prcessed
 */

function runGame(gameType) {
let num1= Math.floor(Math.random() *25)+ 1 ;
let num2= Math.floor(Math.random() *25)+ 1 ;

if (gameType === "addition") {displayAdditionQuestion (num1 , num2);

} else {
    alert('unknown game type: ${gameType}');
    throw 'unknown game type: ${gameType}. Aborting!';
}

}

/**
 * check the answer agaist the first element in
 * the returnd culculateCorrectAnswer array
 */

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculateAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer===calculateAnswer[0];

    if (isCorrect) {
        alert('Hey you got it right :p');
        incrementScore();
    } else{
        alert('Awww....you answered ${userAnswer}. the correct answer was ${calculateAnswer[0]}!');
        incrementWrongAnswer();
    }
       runGame(calculateAnswer[1]);


}


/**
 * get the operands (the numbers) and the operator (+ , - , etc)
 * dirctly from the DOM , and returns the correct answer .
 */

function calculateCorrectAnswer() {
let operand1 = parseInt (Document.getElementById('operand1').innerText);
let operand2 = parseInt (Document.getElementById('operand2').innerText);
let operator = document.getElementById('operator').innerText;

if (operator==="+") {
    return[operand1 , operand2 ,"addition"];
} else { alert('unimplemented operator ${operator}');
throw 'unimplemented operator ${operator}. Aborting!'
}

}


/**
 * get the correct score from the DOM and inremnst by 1
 */

function incrementScore() {

  let oldScore= parseInt(document.getElementById('score').innerText);
  document.getElementById('score').innerText = ++oldScore;

}


/**
 * get the correct tally of incorrect answer from the DOM and inremnst by 1
 */

function incrementWrongAnswer() {
    let oldScore= parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion(operand1 , operand2) {
    document.getElementById('operand1').textContent= operand1;
    document.getElementById('operand2').textContent= operand2;
    document.getElementById('operator').textContent= "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}