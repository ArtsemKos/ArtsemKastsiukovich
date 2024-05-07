const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const ground = new Image();
ground.src = 'img/ground.jpg';

const area = new Image();
area.src = 'img/plus.png';

const monster = new Image();
monster.src = 'img/Monster.png';

function drawGround (){
    ctx.drawImage(ground, 0,0);
}
let bGround = setInterval(drawGround, 100);



function drawArea (){
    ctx.drawImage(area, 300, 270);
    ctx.drawImage(area, 600, 270);
    ctx.drawImage(area, 900, 270);
    ctx.drawImage(area, 450, 540);
    ctx.drawImage(area, 750, 540);
}
let areaTower = setInterval(drawArea,100);




// let xMonster = 10;
// function drawMonster() {
//     ctx.drawImage(monster, xMonster,370);
//     xMonster++;
// }
// let monsterMove = setInterval(drawMonster,100);