var scores = document.getElementById('scores');
var clearBtn = document.querySelector('#clear');
var backBtn = document.querySelector('#back');

// clear scores
clearBtn.addEventListener('click', clearScores);

function clearScores() {
    localStorage.clear();
    location.reload();
};
// get data from local storage
var allUserScores = localStorage.getItem("allUserScores");
allUserScores = Json.parse(allUserScores);

if (allUserScores !== null) {

    for (var i = 0; i < allUserScores.length; i++) {
        var liTag = document.createElement('li');
        liTag.textContent = allUserScores[i].initials + " " + allUserScores[i].finalScore;
        scores.appendChild(litag);
    }
}

backBtn.addEventListener('click', goBack);

function goBack() {
    window.location.reload("index.html");
}
