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
var createUl = document.createElement('ul');
    questionDiv.appendChild(createUl);
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
    createUl.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        userQuestion = questions[questionIndex].question;
        userChoices = questions[questionIndex].answers;
        questionDiv.textContent = userQuestion;
       
    }
    // call a function for each element in an array
    userChoices.forEach(myFunction);

    function myFunction(Items) {
        var answerOptions = document.createElement('li');
        answerOptions.textContent = Items;
        createUl.appendChild(answerOptions);
        answerOptions.addEventListener('click', (check));
    }
}
  // add function to check the answer
function check(event) {
    if (event.target.matches('li')) {
        var newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'newDiv');
        
        if (event.target.textContent == questions[questionIndex].correct ) {
            score++;
            newDiv.textContent = "correct!"
        } else {
            timeLeft = timeLeft - 10;
            newDiv.textContent = "Wrong! The answer is: " + questions[questionIndex].correct;
        }
    } 
    questionIndex++;
}



