const answerOptions = document.querySelector(".answer-options");
const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");

//state variables
const QUIZ_TIME_LIMIT = 10;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory = "Java";
let numberofQuestions = 5;
let currentQuestion = null;
const questionsIndexHystory = [];
let correctAnswersCount = 0;

const showQuizResults = () => {
quizContainer.style.display = "none";
resultContainer.style.display = "block";    
const resultText = `You answered <b>${correctAnswersCount}</b> out of <b>${numberofQuestions}</b> questions correctly. That is Great!`;
document.querySelector(".result-message").innerHTML = resultText;

}
//clear and reset the timer
const resetTimer = () => {
clearInterval(timer);
currentTime = QUIZ_TIME_LIMIT;
timerDisplay.textContent = `${currentTime}s`;
}

//Start the timer
const startTimer = () => {
timer= setInterval(() => {
currentTime--;
timerDisplay.textContent = `${currentTime}s`;
if(currentTime <= 0){
clearInterval(timer)
HighlightCorrectAnswer();
nextQuestionBtn.style.visibility = "visible";
quizContainer.querySelector(".quiz-timer").style.background = "#c31402";

answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

}
},1000);
}

//Fetch randomly a questions
const getRandomQuestion = () => {
const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

if (questionsIndexHystory.length >= Math.min(categoryQuestions.length, numberofQuestions)) {
return showQuizResults();
}
//filter out the questions that have already been asked and choose a random one
const availableQuestions = categoryQuestions.filter(_ => index => !questionsIndexHystory.includes(index));
const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];

questionsIndexHystory.push(categoryQuestions.indexOf(randomQuestion));
return randomQuestion;
}

//Highlight the correct answer and show the icon
const HighlightCorrectAnswer = () => {
const correctOption= answerOptions.querySelectorAll(".answer-option")[currentQuestion.answer];
correctOption.classList.add("correct");
const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;	
correctOption.insertAdjacentHTML("beforeend", iconHTML);

}

//Handle the answer
const handleAnswer = (option, answerIndex) => {
clearInterval(timer);
const isCorrect = currentQuestion.answer === answerIndex;
option.classList.add(isCorrect ? "correct" : "incorrect");
!isCorrect ? HighlightCorrectAnswer() : correctAnswersCount++;


//Add the icon of correctness
const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'}</span>`;	
option.insertAdjacentHTML("beforeend", iconHTML);

//disable all Options when one is selected
answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
nextQuestionBtn.style.visibility = "visible";
}


// render the question
const renderQuestion =() => {
currentQuestion = getRandomQuestion();
if(!currentQuestion) return;
console.log(currentQuestion);
resetTimer();
startTimer();   


//UPDtate the question text
answerOptions.innerHTML = "";
nextQuestionBtn.style.visibility = "hidden";
quizContainer.querySelector(".quiz-timer").style.background = "#7c45ba";
document.querySelector(".question-text").textContent = currentQuestion.question;
questionStatus.innerHTML = `<b>${questionsIndexHystory.length}</b> of <b>${numberofQuestions}</b> Questions`;

//create the options
currentQuestion.options.forEach((option, index) => {
const li = document.createElement("li");
li.classList.add("answer-option");
li.textContent = option;
answerOptions.appendChild(li);
li.addEventListener("click", () => handleAnswer(li,index));
});
}


//Start the quiz
const startQuiz = () => {
configContainer.style.display = "none";
quizContainer.style.display = "block";

//get the selected category and number of questions
quizCategory = configContainer.querySelector(".category-option.active").textContent;
numberofQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);


renderQuestion();
}

//hignlight the selected category or number of questions
document.querySelectorAll(".category-option, .question-option").forEach(option => {
option.addEventListener("click", () => {
option.parentNode.querySelector(".active").classList.remove("active");
option.classList.add("active");
})


});


//Reset the quiz
const resetQuiz = () => {
resetTimer();
correctAnswersCount = 0;
questionsIndexHystory.length = 0;
configContainer.style.display = "block";
resultContainer.style.display = "none";
}


nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".start_quiz_btn").addEventListener("click", startQuiz);