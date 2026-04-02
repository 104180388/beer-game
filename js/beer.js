const bottleImg = new Image();
bottleImg.src = 'img/beer.png';

let bottles = [];
let maxBottles = 5;
let spawnTimer = 0;

function spawnBottle() {
    let width = 40;
    let height = 50;
    let randomX = Math.random() * (canvas.width - width);
    let randomSpeed = 3; 

    bottles.push({
        x: randomX, y: -height, w: width, h: height, speed: randomSpeed
    });
}

function handleBottles() {
    // 1. Nếu trên màn hình KHÔNG CÒN chai bia nào
    if (bottles.length === 0) {
        spawnTimer++; 
        
        // Đợi khoảng 40 khung hình (gần 1 giây) rồi mới thả chai tiếp theo
        // Điều này giúp người chơi có thời gian nghỉ một chút
        if (spawnTimer >= 40) {
            spawnBottle();
            spawnTimer = 0; // Reset lại biến đếm cho lần sau
        }
    }

    // 2. Cập nhật vị trí và vẽ
    for (let i = bottles.length - 1; i >= 0; i--) {
        let b = bottles[i];
        b.y += b.speed;
        ctx.drawImage(bottleImg, b.x, b.y, b.w, b.h);

        // 3. Nếu rơi khỏi màn hình thì xóa đi
        if (
            b.x < tray.x + tray.width &&
            b.x + b.w > tray.x &&
            b.y < tray.y + tray.height &&
            b.y + b.h > tray.y
        ) {
            // 1. Cộng 10 điểm
            score += 10; 
            
            // 2. Xóa chai bia khỏi mảng (vì đã hứng được)
            bottles.splice(i, 1); 
            
            // 3. Dùng 'continue' để bỏ qua các lệnh bên dưới, 
            // tránh lỗi vì chai bia này không còn tồn tại nữa
            continue; 
        }
        if (b.y > canvas.height) {
            bottles.splice(i, 1); // Xóa khỏi mảng để mảng trống (length = 0)
            
            // Bạn có thể trừ mạng ở đây nếu muốn
            // life.lossHeart();
        }
    }
}