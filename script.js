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