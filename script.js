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
        done();
        myTime.textContent = " Time Is Over!";
            // clearInterval();
        }
    }, 1000)
    displayQuestion();
}

var userQuestion;
var userChoices;

function displayQuestion() {
    questionDiv.innerHTML = "";
    createUl.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        userQuestion = questions[questionIndex].question;
        userChoices = questions[questionIndex].answers;
        questionDiv.textContent = userQuestion;
        // createUl.textContent = userChoices;
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

    if (questionIndex >= questions.length) {
        done();
        newDiv.textContent = "Done! " + "Your score is " + score +"/" + questions.length;
    } else {
        displayQuestion();
    }
    questionDiv.appendChild(newDiv);
}

// function when done!
function done() {
    questionDiv.innerHTML = "";
    myTime.innerHTML = "";

    var h1Tag = document.createElement('h1');
    h1Tag.setAttribute('id', 'head1');
    h1Tag.textContent = 'All Done!'
    questionDiv.appendChild(h1Tag);


    var pTag = document.createElement('p');
    pTag.setAttribute('id', 'paragraph');
    questionDiv.appendChild(pTag);

    if (timeLeft >= 0) {
        finalScore = score + timeLeft;
        var pTag2 = document.createElement('p');
        clearInterval();
        pTag.textContent = "Your Final Score is: " + finalScore;
        questionDiv.appendChild(pTag2);

    }

    lableTag = document.createElement('lable');
    lableTag.setAttribute('id', 'lableEl');
    lableTag.innerText = "Inter your initials: ";
    questionDiv.appendChild(lableTag);


    var inputTag = document.createElement('input');
    inputTag.setAttribute('type', 'text');
    inputTag.innerText = "";
    questionDiv.appendChild(inputTag);

    var submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.innerText = 'Submit';
    questionDiv.appendChild(submitBtn);



}



