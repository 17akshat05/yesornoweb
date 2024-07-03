const questions = [
    { question: "Is the sky blue?", correct: false },
    { question: "Is fire cold?", correct: true },
    // Add more questions here
];

let currentQuestionIndex = 0;

const questionContainer = document.getElementById('question-container');
const nextBtn = document.getElementById('next-btn');

function showQuestion(questionIndex) {
    const question = questions[questionIndex];
    questionContainer.innerHTML = `
        <p>${question.question}</p>
        <button onclick="checkAnswer(${questionIndex}, true)">Yes</button>
        <button onclick="checkAnswer(${questionIndex}, false)">No</button>
    `;
}

function checkAnswer(questionIndex, selected) {
    const question = questions[questionIndex];
    if (selected === question.correct) {
        alert("Correct!");
        nextBtn.style.display = 'block';
    } else {
        alert("Incorrect! Remember, you must select the incorrect answer to proceed.");
    }
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
        nextBtn.style.display = 'none';
    } else {
        alert("YOU ARE NOT FROM THIS WORLD");
    }
});

showQuestion(currentQuestionIndex);
