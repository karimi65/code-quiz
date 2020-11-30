var questins = [
    {
        question1: 'Arrays in Javascript can be used to store ____.',
        answers: ['numbers and strings', 'booleans', 'other arrays', 'all of the above'],
        correct: 'all of the above' 
    },
    {
        question2: 'Which computer language structures all webpages on the internet?',
        answers: ['HTML', 'Javascript', 'Java', 'CSS'],
        correct: 'HTML',
    },
    {
        questin3: 'What tag do you need to use to enclose the Javascript code?',
        answers: ['body', 'script', 'style', 'code'],
        correct: 'script',
    },
    {
        question4: 'Which one of these HTML tags creates a button?',
        answers: ['<h1>', '<video>', '<button>', '<p>'],
        correct: '<button>',
    },
    {
        questin5: 'Where should the style tag be declared to organize an internal CSS?',
        answers: ['body', 'external file', 'head', 'both 2 and 3'],
        correct: 'head'
    },

];

var startButton = document.getElementById('start');
 
startButton.addEventListener("click", startQuiz);


 
function startQuiz() {
    var myTime = 60;
    setInterval(function() {
        myTime--
        startButton.textContent = "Time: " + myTime

        if (myTime <= 0) {
            startButton.textContent = " Time Is Over!";
            // clearInterval();
        }
    }, 1000)
}

function codeQuestion() {

}

