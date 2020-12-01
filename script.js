// add questions and answers
var questions = [
    {
        question: 'Arrays in Javascript can be used to store ____.',
        answers: ['numbers and strings', 'booleans', 'other arrays', 'all of the above'],
        correct: 'all of the above' 
    },
    {
        question: 'Which computer language structures all webpages on the internet?',
        answers: ['HTML', 'Javascript', 'Java', 'CSS'],
        correct: 'HTML',
    },
    {
        questin: 'What tag do you need to use to enclose the Javascript code?',
        answers: ['body', 'script', 'style', 'code'],
        correct: 'script',
    },
    {
        question: 'Which one of these HTML tags creates a button?',
        answers: ['<h1>', '<video>', '<button>', '<p>'],
        correct: '<button>',
    },
    {
        questin: 'Where should the style tag be declared to organize an internal CSS?',
        answers: ['body', 'external file', 'head', 'both 2 and 3'],
        correct: 'head'
    },

];

// add variables
var score = 0;
var questionIndex = 0;

var questionDiv = document.getElementById('questions');
var answerList = document.getElementById('answerList');
var myTime = document.getElementById('myTime');
var timer = document.getElementById('start-btn');
var timeLeft = 5;

// add listener to start-btn element
timer.addEventListener("click", startQuiz);

// after click on start button function below will be started!
function startQuiz() {
    setInterval(function() {
        timeLeft--;
        myTime.textContent = "Time: " + timeLeft

    if (timeLeft <= 0) {
        myTime.textContent = " Time Is Over!";
            // clearInterval();
        }
    }, 1000)
    codeQuestion();
}

var userQuestion;
var userChoices;

function codeQuestion() {
    questionDiv.innerHTML = "";
    // answerList.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        userQuestion = questions[questionIndex].question;
        
        questionDiv.textContent = userQuestion;
       
    }
}

