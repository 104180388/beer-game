const trashImg = new Image();
trashImg.src = 'img/trash.png'; 

let trashes = [];
let maxTrashes = 2; // TỐI ĐA CHỈ CÓ 2 CỤC RÁC TRÊN MÀN HÌNH

function spawnTrash() {
    let width = 40;
    let height = 50;
    let randomX = Math.random() * (canvas.width - width);
    let randomSpeed = Math.random() * 2 + 3; 

    trashes.push({
        x: randomX, y: -height, w: width, h: height, speed: randomSpeed
    });
}

function handleTrashes() {
    // CHỈ TẠO RÁC NẾU: Đủ thời gian (200 frame) VÀ số lượng rác hiện tại ít hơn giới hạn
    if (frames % 200 === 0 && trashes.length < maxTrashes) { 
        spawnTrash();
    }

    for (let i = trashes.length - 1; i >= 0; i--) {
        let t = trashes[i];
        
        t.y += t.speed;
        ctx.drawImage(trashImg, t.x, t.y, t.w, t.h);

        // Va chạm: Hứng nhầm rác
        if (
            t.x < tray.x + tray.width &&
            t.x + t.w > tray.x &&
            t.y < tray.y + tray.height &&
            t.y + t.h > tray.y
        ) {
            life.lossHeart(); 
            trashes.splice(i, 1); 
            continue; 
        }

        // Rác rơi xuống đất
        if (t.y > canvas.height) {
            trashes.splice(i, 1);
        }
    }
}