var startButton = document.getElementById('quiz');
 
startButton.addEventListener("click", startQuiz);
 
function startQuiz() {
    var timer = 60;
    setInterval(function() {
        timer--
        startButton.textContent = "Time: " + timer
    }, 1000)
}