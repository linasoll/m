export function changeHole() {
    const activeHole = document.querySelector(".active-hole");
    activeHole.classList.remove("active-hole");
    const index = Math.floor(1 + Math.random() * 16);
    const newActive = document.getElementById(`hole${index}`);
    newActive.classList.add("active-hole")
}

setInterval(changeHole, 1000)

const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", () => {
    const popup = document.querySelector(".start-sign");
    popup.remove();
    const game = document.querySelector(".game");
    game.classList.remove("game-hidden")
})

const points = document.getElementById('points');
const lost = document.getElementById('lost');

const getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 17; i++) {
    let hole = getHole(i);
    hole.addEventListener("click", function() {
        if (hole.classList.contains("active-hole")) {
            points.textContent++;
            if (score.textContent === '10') {
                alert('Победа');
                score.textContent = '0';
                lose.textContent = '0';
            }
        } else {
            lost.textContent++;
            if (lose.textContent === '5') {
                alert('Поражение');
                score.textContent = '0';
                lose.textContent = '0';
            }
        } 
    })
}