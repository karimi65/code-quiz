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
var questionIndex = 0;

var startButton = document.getElementById('start');
startButton.addEventListener("click", startQuiz);

var questionDiv = document.getElementById('questions')
var answerList = document.getElementById('answerList')

 
function startQuiz() {
    var myTime = 5;
    setInterval(function() {
        myTime--
        startButton.textContent = "Time: " + myTime

        if (myTime <= 0) {
            startButton.textContent = " Time Is Over!";
            // clearInterval();
        }
    }, 1000)
    codeQuestion();
}

function codeQuestion() {
    questionDiv.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
         questionDiv.textContent = questions[questionIndex].question;
         answerList.textContent = questions[questionIndex].answers;

    }
}

