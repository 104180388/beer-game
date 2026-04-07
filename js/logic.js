//x ngang, y doc
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let score = 0;
let gameOver = false;

function gameLoop() {
    if (gameOver === true) {
        ctx.fillStyle = "red";
        ctx.font = "bold 60px Arial";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);

        ctx.fillStyle = "yellow";
        ctx.font = "20px Arial";
        ctx.fillText("Nhấn F5 để chơi lại", canvas.width / 2, canvas.height / 2 + 50);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "gold";
    ctx.textAlign = "left";
    ctx.fillText("Score: " + score, 20, 40);

    tray.draw();
    tray.update();

    handleBeers();
    handleTrashes();

    life.draw();

    requestAnimationFrame(gameLoop);
}

const startScreen = document.getElementById('startScreen');
const difficultyScreen = document.getElementById('difficultyScreen');

document.getElementById('startButton').addEventListener('click', function () {
    startScreen.style.display = 'none';
    difficultyScreen.style.display = 'flex';
});

document.getElementById('btnEasy').addEventListener('click', () => startGameWithDifficulty('easy'));
document.getElementById('btnNormal').addEventListener('click', () => startGameWithDifficulty('normal'));
document.getElementById('btnHard').addEventListener('click', () => startGameWithDifficulty('hard'));