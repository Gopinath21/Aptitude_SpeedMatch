// script.js

// Dynamic Problem Generation
function generateProblem() {
    // Logic for generating a random problem
    return `What is ${Math.floor(Math.random() * 100)} + ${Math.floor(Math.random() * 100)}?`;
}

// Timing function
let startTime;
let duration;

function startTimer() {
    startTime = new Date();
}

function stopTimer() {
    duration = new Date() - startTime;
    console.log(`Time taken: ${duration / 1000} seconds`);
}

// Tracking user answers
const userAnswers = [];

function trackAnswer(problem, userAnswer) {
    userAnswers.push({ problem, userAnswer });
}

// Analytics
function displayAnalytics() {
    console.log(`Total problems generated: ${userAnswers.length}`);
    userAnswers.forEach((record, index) => {
        console.log(`Problem ${index + 1}: ${record.problem}, User Answer: ${record.userAnswer}`);
    });
}