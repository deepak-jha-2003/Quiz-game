const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
        answer: "Mitochondria"
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
        answer: "300,000 km/s"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Pepper"],
        answer: "Avocado"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        answer: "Diamond"
    }
];

let score = 0;
let currentQuestionIndex = 0;

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('next-button').style.display = 'none';
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML = `
            <div class="question">${questionData.question}</div>
            <ul class="options">
                ${questionData.options.map(option => `<li onclick="checkAnswer('${option}', '${questionData.answer}')">${option}</li>`).join('')}
            </ul>
        `;
    } else {
        displayScore();
    }
}

function checkAnswer(selected, correct) {
    const quizContainer = document.getElementById('quiz-container');
    if (selected === correct) {
        score++;
        quizContainer.innerHTML += `<div class="correct">Correct!</div>`;
    } else {
        quizContainer.innerHTML += `<div class="incorrect">Incorrect! The correct answer is ${correct}.</div>`;
    }
    setTimeout(nextQuestion, 1000); 
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

function displayScore() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <div class="question">Quiz Over!</div>
        <div>Your score: ${score} out of ${questions.length}</div>
        <button onclick="startQuiz()">Restart Quiz</button>
    `;
}

startQuiz();