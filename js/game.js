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