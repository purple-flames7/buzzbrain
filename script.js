// Some sample questions for Phase 1
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

// DOM Elements
const questionText = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const buttons = answerButtons.querySelectorAll(".btn");

// Index of the question to display (Phase 1: just showing the first one)
let currentQuestionIndex = 0;

function showQuestion(index) {
  const currentQuestion = questions[index];
  questionText.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer, i) => {
    if (buttons[i]) {
      buttons[i].textContent = answer;
    }
  });
}

// Show the first question
showQuestion(currentQuestionIndex);
