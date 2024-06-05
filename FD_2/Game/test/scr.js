const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const area = new Image();
area.src = '../img/plus.png';

function drawArea (){
    ctx.drawImage(area, 300, 270);
    ctx.drawImage(area, 600, 270);
    ctx.drawImage(area, 900, 270);
    ctx.drawImage(area, 450, 540);
    ctx.drawImage(area, 750, 540);

   
}
let areaTower = setInterval(drawArea,100);