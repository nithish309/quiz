const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    choices: ["Java", "C", "Python", "JavaScript"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    choices: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "What is the capital of Japan?",
    choices: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
    correctAnswer: "Tokyo",
  },
  {
    question: "What does HTML stand for?",
    choices: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperLoop Machine Language",
      "HyperText and links Markup Language",
    ],
    correctAnswer: "HyperText Markup Language",
  },
  {
    question: "What is the smallest unit of data in a computer?",
    choices: ["Bit", "Byte", "Kilobyte", "Megabyte"],
    correctAnswer: "Bit",
  },
  {
    question: "Who is known as the father of computers?",
    choices: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    correctAnswer: "Charles Babbage",
  },
  {
    question: "What year was JavaScript created?",
    choices: ["1995", "1990", "2000", "2005"],
    correctAnswer: "1995",
  },
  {
    question: "Which company developed the PlayStation console?",
    choices: ["Sony", "Microsoft", "Nintendo", "Sega"],
    correctAnswer: "Sony",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctAnswer: "Mars",
  },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");

  questionElement.textContent = questions[currentQuestionIndex].question;

  choicesElement.innerHTML = ""; // Clear already displayed question

  questions[currentQuestionIndex].choices.forEach(function (choice) {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", function () {
      selectAnswer(choice, button);
    });
    choicesElement.appendChild(button);
  });
}

function selectAnswer(selectedChoice, button) {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;

  if (selectedChoice === correctAnswer) {
    button.style.backgroundColor = "green";
    score++;
  } else {
    button.style.backgroundColor = "red";
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      displayScore();
    }
  }, 300); // Delay to allow user to see the color change
}

function displayScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Your score is ${score} out of ${questions.length}`;
}

displayQuestion();
