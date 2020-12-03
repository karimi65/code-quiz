var scores = document.getElementById('scores');
var clearBtn = document.querySelector('#clear');
var backBtn = document.querySelector('#back');

// clear scores
clearBtn.addEventListener('click', clearScores);

function clearScores() {
    localStorage.clear();
    location.reload();
};
