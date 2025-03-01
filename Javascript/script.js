const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
let quizCategory  = "Java"
let currentQuestion = null;
//Fetch randomly a questions
const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];


    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
   return randomQuestion;
}

const handleAnswer = (option, answerIndex) => {
 const isCorrect = currentQuestion.answer === answerIndex;
 option.classList.add(isCorrect ? "correct" : "incorrect");

//disable all Options when one is selected
 answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

 }


// render the question
const renderQuestion =() => {
 currentQuestion = getRandomQuestion();
if(!currentQuestion) return;
console.log(currentQuestion);

//UPDtate the question text
answerOptions.innerHTML = "";
document.querySelector(".question-text").textContent = currentQuestion.question;

//create the options
currentQuestion.options.forEach((option, index) => {
const li = document.createElement("li");
li.classList.add("answer-option");
li.textContent = option;
answerOptions.appendChild(li);
li.addEventListener("click", () => handleAnswer(li,index));
});
}
renderQuestion();
nextQuestionBtn.addEventListener("click", renderQuestion);