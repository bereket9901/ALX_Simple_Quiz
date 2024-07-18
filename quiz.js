function checkAnswer() {
    const correctAnswer = "4";
    const answerChecked = document.querySelector(`input[name="quiz"]:checked`)
    const userAnswer=answerChecked.value ;
    const feedback= document.querySelector("#feedback")
    if (userAnswer === correctAnswer) {
        feedback.textContent="Correct! Well done."
    }
    else {
        feedback.textContent="That's incorrect. Try again!"
    }
}

const submit=document.getElementById("submit-answer");

submit.addEventListener("click",checkAnswer);

