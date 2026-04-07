const heartImg = new Image();
const grayHeartImg = new Image();
heartImg.src = 'img/redheart.png';
grayHeartImg.src = 'img/grayheart.png';

let life = {
    maxAmount: 3,
    amount: 3,
    width: 30,
    height: 30,
    padding: 10,

    draw: function () {
        let startX = canvas.width - (this.width + this.padding) * this.maxAmount - 20;
        let y = 20;

        for (let i = 0; i < this.maxAmount; i++) {
            let currentX = startX + i * (this.width + this.padding);
            
            if (i < this.amount) {
                ctx.drawImage(heartImg, currentX, y, this.width, this.height);
            } else {
                ctx.drawImage(grayHeartImg, currentX, y, this.width, this.height);
            }
        }
    },

    lossHeart: function() {
        this.amount--; 
    }
};