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
let previousIndex = null;

// function activateGoblin() {
//     let randomHoleIndex = Math.floor(Math.random() * 16) + 1;
//     let activeHole = getHole(randomHoleIndex);
//     activeHole.classList.add('active-hole');

    
// }

// for (let i = 1; i <= 16; i++) {
//     let hole = getHole(i);
//     hole.addEventListener("click", function() {
//         if (hole.classList.contains("active-hole")) {
//             points.textContent++;
//             hole.classList.remove("active-hole");
//             if(Number(best.textContent) < Number(points.textContent)) {
//                 best.textContent = points.textContent;
//             }
//         }
//     });
// }

function changeHole() {
    const activeHole = document.querySelector(".active-hole");
    activeHole.classList.remove("active-hole");

    let index;
    do {
        index = Math.floor(1 + Math.random() * 16);
    } while (index === previousIndex)

    previousIndex = index;

    index = Math.floor(1 + Math.random() * 16);
    const newActive = document.getElementById(`hole${index}`);
    newActive.classList.add("active-hole")
    setTimeout(() => {
        if (activeHole.classList.contains('active-hole')) {
            activeHole.classList.remove('active-hole');
            lost.textContent++;
            if (lost.textContent === '5') {
                loseGame();
            }
        }
    }, 1000);
}

setInterval(changeHole, 1000)


startButton.addEventListener("click", () => {
    timer.textContent = '60';
    popup.remove();
    game.classList.remove("hidden");
})

for (let i = 1; i < 17; i++) {
    let hole = getHole(i);
    hole.addEventListener("click", function() {
        if (hole.classList.contains("active-hole")) {
            points.textContent++;
            if(Number(best.textContent) < Number(points.textContent)) {
                best.textContent = points.textContent;
                bestWin.textContent = best.textContent;
            }}
        // } else {
        //     lost.textContent++;
        //     if (lost.textContent === '5') {
        //         loseGame();
        //     }
        // } 
        // setTimeout(() => {
        //     if (hole.classList.contains("active-hole")) {
        //         activeHole.classList.remove("active-hole");
        //         lost.textContent++;
        //         if (lost.textContent === '5') {
        //             loseGame();
        //         }
        //     }
        // }, 1000);
    })
}


setInterval(countDown, 1000);

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
        popupLose.classList.add("hidden");
    })
});