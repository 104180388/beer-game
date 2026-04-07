function easy() {
    beerSpeed = 2
    trashSpeed = 1
}

function hard() {
    beerSpeed = 3
    trashSpeed = 2
}

function nightmare() {
    beerSpeed = 5
    trashSpeed = 4
    maxTrashes = 3
    tray.speed = 7
}

function scoreCal(){
    if(score === 100){
        beerSpeed += 0.5;
        trashSpeed += 0.5;
    }
    else if(score === 200){
        beerSpeed += 0.5;
        trashSpeed += 0.5;
        maxBeers +=1
        maxTrashes +=1
    }
}

function startGameWithDifficulty(level) {
    difficultyScreen.style.display = 'none';

    if (level === 'easy') {
        easy();
    } else if (level === 'normal') {
        hard();
    } else if (level === 'hard') {
        nightmare();
    }
    gameLoop();
}
