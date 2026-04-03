const trashImg = new Image();
trashImg.src = 'img/trash.png'; 

let trashes = [];
let maxTrashes = 2;
let counter = 0;
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
    if (frames % 200 === 0 && trashes.length < maxTrashes) { 
        spawnTrash();
    }

    for (let i = trashes.length - 1; i >= 0; i--) {
        let t = trashes[i];
        t.y += t.speed;
        ctx.drawImage(trashImg, t.x, t.y, t.w, t.h);

        if (
            t.x < tray.x + tray.width &&
            t.x + t.w > tray.x &&
            t.y < tray.y + tray.height +1 &&
            t.y + t.h > tray.y
        ) {
            life.lossHeart(); 
            trashes.splice(i, 1);
            counter+=1;
            continue; 
        }

        if (t.y > canvas.height) {
            trashes.splice(i, 1);
        }

        if(counter===3){
            gameOver = true;
        }
    }
}