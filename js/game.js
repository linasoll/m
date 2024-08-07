export function changeHole() {
    const activeHole = document.querySelector(".active-hole");
    activeHole.classList.remove("active-hole");
    const index = Math.floor(1 + Math.random() * 16);
    const newActive = document.getElementById(`hole${index}`);
    newActive.classList.add("active-hole")
}

setInterval(changeHole, 1000)

const startButton = document.querySelector(".start-button");
const game = document.querySelector(".game");
const points = document.getElementById("points");
const lost = document.getElementById("lost");
const best = document.getElementById("best");
const bestWin = document.getElementById("best-win");
const pointsWin = document.getElementById("points-win");
const getHole = index => document.getElementById(`hole${index}`);
const popup = document.querySelector(".start-sign");
const popupWin = document.querySelector(".win-sign");
const popupLose = document.querySelector(".lose-sign");
const timeValue = document.getElementById("timer");
const newGameButtons = document.querySelectorAll(".new-game");


startButton.addEventListener("click", () => {
    popup.remove();
    game.classList.remove("hidden")
})

for (let i = 1; i < 17; i++) {
    let hole = getHole(i);
    hole.addEventListener("click", function() {
        if (hole.classList.contains("active-hole")) {
            points.textContent++;
            if(Number(best.textContent) < Number(points.textContent)) {
                best.textContent = points.textContent;
            }
        } else {
            lost.textContent++;
            if (lost.textContent === '5') {
                loseGame();
            }
        } 
    })
}



function countDown() {
    timeValue.textContent--;
    if (timer.textContent === '0') {
        winGame();
        clearInterval(intId);
    }
}

let intId = setInterval(countDown, 1000)


function winGame() {
    pointsWin.textContent = points.textContent;
    game.classList.add("hidden");
    popupWin.classList.remove("hidden")
}

function loseGame() {
    game.classList.add("hidden");
    popupLose.classList.remove("hidden")
}

newGameButtons.forEach(element => {
    element.addEventListener("click", () => {
        timer.textContent = '60';
        points.textContent = '0';
        lost.textContent = '0';
        game.classList.remove("hidden");
        popupWin.classList.add("hidden");
        popupLose.classList.add("hidden")
    })
});

bestWin.textContent = best.textContent
