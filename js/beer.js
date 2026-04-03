const beerImg = new Image();
beerImg.src = 'img/beer.png';

let beers = [];
let spawnTimer = 0;
let beerSpeed = 2

function spawnBeer() {
    let width = 50;
    let height = 60;
    let randomX = Math.random() * (canvas.width - width);

    beers.push({
        x: randomX, y: -height, w: width, h: height, speed: beerSpeed
    });
}

function handleBeers() {
    if (beers.length === 0) {
        spawnTimer++; 
        
        if (spawnTimer >= 30) {
            spawnBeer();
            spawnTimer = 0;
        }
    }

    for (let i = beers.length - 1; i >= 0; i--) {
        let b = beers[i];
        b.y += b.speed;
        ctx.drawImage(beerImg, b.x, b.y, b.w, b.h);

        if (
            b.x < tray.x + tray.width &&
            b.x + b.w > tray.x &&
            b.y < tray.y + tray.height &&
            b.y + b.h > tray.y
        ) {
            score += 10; 
            beers.splice(i, 1); 
            continue; 
        }
        if (b.y > canvas.height) {
            beers.splice(i, 1);
        }
    }
}