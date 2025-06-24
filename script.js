// Questions
const questions = [
  {
    question: "Which country won the FIFA World Cup in 2022?",
    answers: ["Germany", "Brazil", "France", "Argentina"],
    correct: "Argentina",
  },
  {
    question: "In tennis what is the term for a score of zero?",
    answers: ["Love", "Blank", "Nil", "Zero"],
    correct: "Love",
  },
  {
    question: "Who holds the men's 100m world record?",
    answers: ["Tyson Gay", "Asafa Powell", "Carl Lewis", "Usain Bolt"],
    correct: "Usain Bolt",
  },
];

// Stating variables
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;

// DOM Elements
const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

// Start or restart the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  userAnswers = [];
  score = 0;
  nextButton.innerText = "Next";
  scoreElement.innerText = "";
  showQuestion();
}

// Show Current Question and Answers
function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  // Creating buttons for the answers
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

// Clear previous answers and feedback
function resetState() {
  nextButton.style.display = "none";
  feedbackElement.innerText = "";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Answer selection and feedback
function selectAnswer(selectedAnswer) {
  const correctAnswer = questions[currentQuestionIndex].correct;
  userAnswers[currentQuestionIndex] = selectedAnswer;

  // Disable all buttons once answer is selected
  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;

    if (button.innerText === correctAnswer) {
      button.classList.add("correct");
    }

    if (
      button.innerText === selectedAnswer &&
      selectedAnswer !== correctAnswer
    ) {
      button.classList.add("incorrect");
    }
  });

  // Show feedback and update score
  if (selectedAnswer === correctAnswer) {
    feedbackElement.innerText = "Correct!";
    feedbackElement.style.color = "green";
    score++;
  } else {
    feedbackElement.innerText = `Incorrect. The correct answer was "${correctAnswer}".`;
    feedbackElement.style.color = "red";
  }

  nextButton.style.display = "block";
}

// Keeping track of the question  and completing the quiz
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

function endQuiz() {
  resetState();
  questionElement.innerText = "Quiz Complete!";
  feedbackElement.innerText = "";
  nextButton.style.display = "none";

  // Display final score
  scoreElement.innerText = `Your final score: ${score} out of ${questions.length}`;
  console.log("User Answers:", userAnswers); // For debugging
}

// Inititalize the quiz
startQuiz();
