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

let currentQuestionIndex = 0;
let userAnswers = [];

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

function startQuiz() {
  currentQuestionIndex = 0;
  userAnswers = [];
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(answer) {
  userAnswers[currentQuestionIndex] = answer;

  // Disable all buttons once answer is selected
  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;

    // Add selected class to the one that matches the answer
    if (button.innerText === answer) {
      button.classList.add("selected");
    }
  });

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
  nextButton.style.display = "none";
  console.log("User Answers:", userAnswers); // For debugging
}

startQuiz();
