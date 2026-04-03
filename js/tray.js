const trayImg = new Image();
trayImg.src = 'img/tray.png';

const tray = {
    x: 475,
    y: 630,
    width: 190,
    height: 50,
    speed: 7,
    update: function () {
        if (keys.left) {
            this.x -= this.speed;
        }
        if (keys.right) {
            this.x += this.speed;
        }

        if (this.x < 0) this.x = 0;
        if (this.x + this.width > canvas.width) this.x = canvas.width - this.width;
    },
    draw: function () {
        ctx.drawImage(trayImg, this.x, this.y, this.width, this.height);
    }
};

const keys = {
    left: false,
    right: false
};

window.addEventListener('keydown', function (evt) {
    if (evt.key === 'a' || evt.key === 'A') keys.left = true;
    if (evt.key === 'd' || evt.key === 'D') keys.right = true;
});

window.addEventListener('keyup', function (evt) {
    if (evt.key === 'a' || evt.key === 'A') keys.left = false;
    if (evt.key === 'd' || evt.key === 'D') keys.right = false;
});