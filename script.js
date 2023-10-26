const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Multi Language", "Hyper Transfer Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "What is the main markup tag for a paragraph?",
        options: ["<p>", "<par>", "<paragraph>"],
        correctAnswer: "<p>"
    },
    {
        question: "What is the latest version of HTML?",
        options: ["HTML5", "HTML4", "XHTML"],
        correctAnswer: "HTML5"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsContainer.innerHTML = "";
    currentQuizData.options.forEach(option => {
        const optionElement = document.createElement("li");
        optionElement.innerText = option;
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.innerText = "Quiz Completed!";
    optionsContainer.innerHTML = "";
    scoreElement.innerText = `Score: ${score} out of ${quizData.length}`;
    nextButton.style.display = "none";
}

loadQuestion();
