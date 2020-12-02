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
        question: 'What tag do you need to use to enclose the Javascript code?',
        answers: ['body', 'script', 'style', 'code'],
        correct: 'script',
    },
    {
        question: 'Which one of these HTML tags creates a button?',
        answers: ['<h1>', '<video>', '<button>', '<p>'],
        correct: '<button>',
    },
    {
        question: 'Where should the style tag be declared to organize an internal CSS?',
        answers: ['body', 'external file', 'head', 'both 2 and 3'],
        correct: 'head'
    },

];

// add variables
var score = 0;
var questionIndex = 0;

var myTime = document.getElementById('myTime');
var timer = document.getElementById('start-btn');
var questionDiv = document.getElementById('questions');
var wrapper = document.querySelector('.container')
var holdTime = 0;
var timeForQuiz = questions.length * 15
var ulTag = document.createElement('ul');

// add listener to start-btn element
timer.addEventListener("click", startQuiz);

// after click on start button function below will be started!
function startQuiz() {
    if (holdTime === 0) {
        holdTime = setInterval(myInterval, 1000);
    
        function myInterval() {
            timeForQuiz--;
            myTime.textContent = "Time: " + timeForQuiz
        
            if (timeForQuiz <= 0) {
                clearInterval(myVar);
                done();
                myTime.textContent = " Time Is Over!";
            }
        }
    }
    displayQuestion();
            
}


function displayQuestion() {

    questionDiv.innerHTML = "";
    ulTag.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {

        var userQuestion = questions[questionIndex].question;
        var userChoices = questions[questionIndex].answers;
        questionDiv.textContent = userQuestion;
    }
        // call a function for each element in an array
        userChoices.forEach(myFunction);
    
        function myFunction(Items) {
            var answerOptions = document.createElement('button');
            answerOptions.textContent = Items;
            questionDiv.appendChild(ulTag);
            ulTag.appendChild(answerOptions);
            answerOptions.addEventListener('click', (check));
        }

}

  // add function to check the answer
function check(event) {
    if (event.target.matches('button')) {
        var newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'newDiv');
        
        if (event.target.textContent == questions[questionIndex].correct ) {
            score++;
            newDiv.textContent = "correct!"
        } else {
            timeForQuiz = timeForQuiz - 10;
            newDiv.textContent = "Wrong!"
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

    if (timeForQuiz >= 0) {
        var finalScore = score + timeForQuiz;
        var pTag2 = document.createElement('p');
        clearInterval(holdTime);
        pTag.textContent = "Your Final Score is: " + finalScore;
        questionDiv.appendChild(pTag2);

    }

    var lableTag = document.createElement('lable');
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


    submitBtn.addEventListener('click', function() {
        var initials = inputTag.value;

        if (initials === null) {
            alert ('Please enter your initials');
        } else {
            var userScores = {
                initials: initials,
                score: finalScore
            }
            console.log(userScores);
            // receiving data from localStorage
            var allUserScores = localStorage.getItem('allUserScores');
            if (allUserScores === null) {
                allUserScores = [];
            } else {
                allUserScores = JSON.parse(allUserScores)   
            }   
            // sending data to localStorage 
            allUserScores.push(userScores);
            var newScore = JSON.stringify(allUserScores);
            localStorage.setItem('allUserScores', newScore);
        }
    });


}

