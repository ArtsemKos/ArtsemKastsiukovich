
function game(){



const canw = document.getElementById('gameDiv');

const canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext('2d');


const ground = new Image();
ground.src = 'img/ground.jpg';

ground.onload = function () {
    groundLoaded = true;
}


const area = new Image();
area.src = 'img/plus.png';

area.onload = function () {
    areaLoaded = true;
}


const monster = new Image();
monster.src = 'img/Monster.png';

monster.onload = function () {
    monsterLoaded = true;
}

const tower = new Image();
tower.src = 'img/tower2.png';

tower.onload = function () {
    towerLoaded = true;
}

// -----------------------------------------------------------
const divScore = document.createElement('div');
canw.append(divScore);
divScore.id = 'divScore';

const divScoreText = document.createElement('div');
divScore.append(divScoreText);
divScoreText.id = 'divScoreText';
divScoreText.innerHTML = 'score'

const score = document.createElement('input');
score.id = 'inpScore'
score.setAttribute('type', 'text');
// score.setAttribute('disabled');
score.value = '100';
divScore.append(score)
// ----------------------------------------------------------
function drawGround() {
    ctx.drawImage(ground, 360, 72);
}
let bGround = setInterval(drawGround, 50);



function drawArea() {

    ctx.drawImage(area, 660, 342);
    ctx.drawImage(area, 960, 342);
    ctx.drawImage(area, 1260, 342);
    ctx.drawImage(tower, 810, 570);
    ctx.drawImage(area, 1110, 612);
}
let areaTower = setInterval(drawArea, 50);

let xMonster = '';


const gameOver  = document.createElement('div');
gameOver.id = 'gameOver';
gameOver.style.display = 'none';
gameOver.innerHTML = 'game over';
canw.append(gameOver);

function moveM() {


    let xMonster = 370;
    function drawMonster() {
        // ctx.save();
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // ctx.globalAlpha=1; 
        if (monsterLoaded) ctx.drawImage(monster, xMonster, 442);
        if (xMonster < 1450) {
            xMonster += 2;
        }
        const inpScore = document.getElementById('inpScore');
        let inpScoreVal = parseInt(inpScore.value);
        
        if (xMonster === 1450) {
            if(inpScoreVal>0){
                inpScoreVal -= 100
            }
           
        }
        score.value = inpScoreVal;
        if ( score.value === '0' ){
          if(gameOver.style.display = 'none'){
            gameOver.style.display = 'block'
          }
            
        }
       
        

    }
    let monsterMove = setInterval(drawMonster, 50);
}

setTimeout(moveM, 0);
setTimeout(moveM, 10000);
setTimeout(moveM, 12000);
setTimeout(moveM, 22000);
setTimeout(moveM, 24000);
setTimeout(moveM, 26000);



// -------------------------------------------------

}



