// Choosing between English and Swahili
// logic for index.html
document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.getAttribute("data-lang");
    localStorage.setItem("buzzbrainLanguage", selectedLanguage);
    // Redirect to category screen
    window.location.href = "categories.html";
  });
});

// Translation object translating categories
const translations = {
  en: {
    title: "Choose a Category",
    categories: ["Sports", "Geography", "History", "Literature", "Film"],
    difficultyTitle: "Choose a Difficulty",
    difficulties: ["Easy", "Medium", "Hard"],
    reviewTitle: "Review Your Answers",
    resultTitle: "Your Score",
    playAgain: "Play Again",
    reviewButton: "Review Answers",
    reviewYourAnswer: "Your answer",
    reviewCorrectAnswer: "Correct answer",
  },
  sw: {
    title: "Chagua Kikundi",
    categories: ["Michezo", "Jiografia", "Historia", "Fasihi", "Filamu"],
    difficultyTitle: "Chagua Ugumu",
    difficulties: ["Rahisi", "Wastani", "Gumu"],
    reviewTitle: "Pitia Majibu Yako",
    resultTitle: "Alama Yako",
    playAgain: "Cheza Tena",
    reviewButton: "Pitia Majibu",
    reviewYourAnswer: "Jibu lako",
    reviewCorrectAnswer: "Jibu sahihi",
  },
};
// Handling categories
if (window.location.pathname.includes("categories.html")) {
  const lang = localStorage.getItem("buzzbrainLanguage") || "en";
  const langData = translations[lang];

  document.getElementById("category-title").textContent = langData.title;

  const buttonContainer = document.getElementById("category-buttons");

  langData.categories.forEach((category, index) => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.textContent = category;
    btn.setAttribute("data-category-index", index);
    btn.setAttribute("aria-label", `Category: ${category}`);
    btn.addEventListener("click", () => {
      localStorage.setItem("buzzbrainCategory", index);
      window.location.href = "difficulty.html";
    });
    buttonContainer.appendChild(btn);
  });
}

// Handle difficulty screen
if (window.location.pathname.includes("difficulty.html")) {
  const lang = localStorage.getItem("buzzbrainLanguage") || "en";
  const langData = translations[lang];

  document.getElementById("difficulty-title").textContent =
    langData.difficultyTitle;

  const buttonContainer = document.getElementById("difficulty-buttons");

  langData.difficulties.forEach((level, index) => {
    const btn = document.createElement("button");
    btn.className = "difficulty-btn";
    btn.textContent = level;
    btn.setAttribute("data-difficulty", level);
    btn.setAttribute("aria-label", `Difficulty: ${level}`);
    btn.addEventListener("click", () => {
      localStorage.setItem("buzzbrainDifficulty", index);
      window.location.href = "quiz.html";
    });
    buttonContainer.appendChild(btn);
  });
}

// Quiz logic
if (window.location.pathname.includes("quiz.html")) {
  const lang = localStorage.getItem("buzzbrainLanguage") || "en";
  const categoryIndex = parseInt(
    localStorage.getItem("buzzbrainCategory") || 0
  );
  const difficultyIndex = parseInt(
    localStorage.getItem("buzzbrainDifficulty") || 0
  );

  const difficultyLabels =
    lang === "sw" ? ["rahisi", "wastani", "gumu"] : ["easy", "medium", "hard"];
  const categoryKeys = {
    en: ["sports", "geography", "history", "literature", "film"],
    sw: ["michezo", "jiografia", "historia", "fasihi", "filamu"],
  };

  const difficulty = difficultyLabels[difficultyIndex];
  const categoryKey = categoryKeys[lang][categoryIndex];
  const questionSet = lang === "sw" ? questionsDataSw : questionsData;
  const quizQuestions = questionSet[categoryKey][difficulty];

  let currentQuestionIndex = 0;
  let score = 0;
  let userAnswers = [];

  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");
  const progressText = document.getElementById("progress-text");

  function resetState() {
    answerButtons.innerHTML = "";
  }

  function showQuestion() {
    resetState();
    const question = quizQuestions[currentQuestionIndex];
    questionText.textContent = question.question;
    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.classList.add("answer-btn");
      button.textContent = answer;
      button.setAttribute("aria-label", `Answer option: ${answer}`);
      button.addEventListener("click", () =>
        selectAnswer(answer, question.correct)
      );
      answerButtons.appendChild(button);
    });
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${
      quizQuestions.length
    }`;
  }

  // Feedback on questions
  function selectAnswer(selected, correct) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".answer-btn");

    userAnswers.push({
      question: currentQuestion.question,
      selected: selected,
      correct: correct,
      isCorrect: selected === correct,
    });

    buttons.forEach((btn) => {
      btn.disabled = true;
      if (btn.textContent === correct) {
        btn.classList.add("correct"); // highlight correct answer
      } else if (btn.textContent === selected) {
        btn.classList.add("wrong"); // highlight selected wrong answer
      }
    });

    if (selected === correct) score++;

    // Delay before next question
    setTimeout(() => {
      currentQuestionIndex++;

      if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
      } else {
        localStorage.setItem("buzzbrainScore", score);
        localStorage.setItem("buzzbrainAnswers", JSON.stringify(userAnswers));
        window.location.href = "results.html";
      }
    }, 1000); // 1 second delay
  }

  showQuestion();
}

// Results screen logic
if (window.location.pathname.includes("results.html")) {
  const lang = localStorage.getItem("buzzbrainLanguage") || "en";
  const score = localStorage.getItem("buzzbrainScore") || 0;
  const langData = translations[lang];

  document.getElementById("results-title").textContent = langData.resultTitle;
  document.getElementById("score-text").textContent = `${score} / 5`;
  document.getElementById("play-again-btn").textContent = langData.playAgain;
  document.getElementById("review-btn").textContent = langData.reviewButton;

  document.getElementById("play-again-btn").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });

  // Option to review your answers
  const reviewBtn = document.getElementById("review-btn");
  if (reviewBtn) {
    reviewBtn.addEventListener("click", () => {
      window.location.href = "review.html";
    });
  }
}
// Review screen logic
if (window.location.pathname.includes("review.html")) {
  const lang = localStorage.getItem("buzzbrainLanguage") || "en";
  const langData = translations[lang];
  const userAnswers =
    JSON.parse(localStorage.getItem("buzzbrainAnswers")) || [];

  document.getElementById("review-title").textContent = langData.reviewTitle;

  const container = document.getElementById("review-container");
  userAnswers.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("review-card");

    const q = document.createElement("p");
    q.classList.add("review-question");
    q.textContent = `Q${index + 1}: ${item.question}`;

    const yourAnswer = document.createElement("p");
    yourAnswer.textContent = `${langData.reviewYourAnswer}: ${item.selected}`;
    yourAnswer.classList.add(item.isCorrect ? "correct" : "wrong");

    const correctAnswer = document.createElement("p");
    correctAnswer.textContent = `${langData.reviewCorrectAnswer}: ${item.correct}`;

    q.setAttribute("aria-label", `Question ${index + 1}`);
    yourAnswer.setAttribute(
      "aria-label",
      `${langData.reviewYourAnswer}: ${item.selected}. ${
        item.isCorrect ? "Correct" : "Incorrect"
      }`
    );
    correctAnswer.setAttribute(
      "aria-label",
      `${langData.reviewCorrectAnswer}: ${item.correct}`
    );

    card.appendChild(q);
    card.appendChild(yourAnswer);
    card.appendChild(correctAnswer);
    container.appendChild(card);
  });

  document.getElementById("back-home-btn").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });
}
