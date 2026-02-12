const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None of these"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        correct: 2
    },
    {
        question: "Which is not a JavaScript framework?",
        options: ["React", "Angular", "Django", "Vue"],
        correct: 2
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "#", "<!-- -->"],
        correct: 0
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "IBM"],
        correct: 1
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        options: ["<script>", "<js>", "<javascript>", "<code>"],
        correct: 0
    },
    {
        question: "Which method is used to print in console?",
        options: ["console.print()", "print()", "console.log()", "log.console()"],
        correct: 2
    },
    {
        question: "Which operator is used to assign a value?",
        options: ["==", "===", "=", ":"],
        correct: 2
    },
    {
        question: "Which HTML tag is used for largest heading?",
        options: ["<h6>", "<heading>", "<h1>", "<head>"],
        correct: 2
    },
    {
        question: "Which property is used to change text color in CSS?",
        options: ["font-color", "text-color", "color", "background-color"],
        correct: 2
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "define"],
        correct: 0
    },
    {
        question: "Which event occurs when user clicks on HTML element?",
        options: ["onchange", "onclick", "onmouseover", "onload"],
        correct: 1
    },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

loadQuestion();

function loadQuestion() {
    feedbackEl.textContent = "";
    nextBtn.style.display = "none";

    let q = quizData[currentQuestion];
    questionEl.textContent = q.question;

    optionBtns.forEach((btn, index) => {
        btn.textContent = q.options[index];
        btn.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(selectedIndex) {
    let correctIndex = quizData[currentQuestion].correct;

    if (selectedIndex === correctIndex) {
        feedbackEl.textContent = "Correct Answer!";
        feedbackEl.style.color = "green";
        score++;
    } else {
        feedbackEl.textContent = "Wrong Answer!";
        feedbackEl.style.color = "red";
    }

    scoreEl.textContent = "Score: " + score;
    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Completed!";
        document.getElementById("options").innerHTML = "";
        feedbackEl.textContent = `Final Score: ${score}/${quizData.length}`;
        nextBtn.style.display = "none";
    }
};