const trashImg = new Image();
trashImg.src = 'img/trash.png';

let trashes = [];
let maxTrashes = 2;
let trashSpeed = 1

function spawnTrash() {
    let width = 50;
    let height = 40;
    let randomX = Math.random() * (canvas.width - width);
    let randomSpeed = Math.random() * 2 + trashSpeed; 

    trashes.push({
        x: randomX, y: -height, w: width, h: height, speed: randomSpeed
    });
}

function handleTrashes() {
    if (trashes.length < maxTrashes) { 
        spawnTrash();
    }

    for (let i = trashes.length - 1; i >= 0; i--) {
        let t = trashes[i];
        t.y += t.speed;
        ctx.drawImage(trashImg, t.x, t.y, t.w, t.h);

        if (
            t.x  < tray.x + tray.width-30 &&
            t.x + t.w > tray.x +30 &&
            t.y < tray.y + tray.height -30 &&
            t.y + t.h > tray.y+30
        ) {
            life.lossHeart(); 
            trashes.splice(i, 1);
            continue;
        }

        if (t.y > canvas.height) {
            trashes.splice(i, 1);
        }

        if (life.amount <= 0) {
        gameOver = true;
    }
    }
}