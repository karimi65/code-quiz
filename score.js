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
allUserScores = JSON.parse(allUserScores);

if (allUserScores !== null) {

    for (var i = 0; i < allUserScores.length; i++) {
        var liTag = document.createElement('li');
        liTag.textContent = allUserScores[i].initials + " " + allUserScores[i].score;
        scores.appendChild(liTag);
    }
}

// when click on back button it goes to start page!
backBtn.addEventListener('click', goBack);

function goBack() {
    window.location.replace("index.html");  
}
