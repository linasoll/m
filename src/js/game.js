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
let previousIndex = -1;

setInterval(changeHole, 1000);
setInterval(countDown, 1000);

function startGame() {
    timer.textContent = '60';
}

for (let i = 1; i < 17; i++) {
    let hole = getHole(i);
    hole.addEventListener("click", () => {
        if (hole.classList.contains("active-hole")) {
            points.textContent++;
            if(Number(best.textContent) < Number(points.textContent)) {
                best.textContent = points.textContent;
                bestWin.textContent = best.textContent;
            }
            hole.classList.remove("active-hole")
        } else {
            lost.textContent++;
            if (lost.textContent === '5') {
                loseGame();
            }
        }
    })
}

function changeHole() {
    const activeHole = document.querySelector(".active-hole");

    if (activeHole) {
        activeHole.classList.remove("active-hole");
        if (previousIndex !== -1) {
            lost.textContent++;
            if (lost.textContent === '5') {
                loseGame(); 
            }
        }
    }

    let index = Math.floor(1 + Math.random() * 16);
    do {
        index = Math.floor(1 + Math.random() * 16);
    } while (index === previousIndex)

    previousIndex = index;

    const newActive = document.getElementById(`hole${index}`);
    newActive.classList.add("active-hole")
}

startButton.addEventListener("click", () => {
    popup.remove();
    game.classList.remove("hidden");
    startGame()
})

function countDown() {
    timeValue.textContent--;
    if (timer.textContent === '0') {
        winGame();
    }
}

function winGame() {
    pointsWin.textContent = points.textContent;
    game.classList.add("hidden");
    popupWin.classList.remove("hidden")
}

function loseGame() {
    if (!popup.classList.contains("hidden") || !popupWin.classList.contains("hidden")) {
        return
    }
    game.classList.add("hidden");
    popupLose.classList.remove("hidden")
}

newGameButtons.forEach(element => {
    element.addEventListener("click", () => {
        points.textContent = '0';
        lost.textContent = '0';
        game.classList.remove("hidden");
        popupWin.classList.add("hidden");
        popupLose.classList.add("hidden");
        startGame();
    })
});