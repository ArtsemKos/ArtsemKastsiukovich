function renderGamePage(){
  const nameGame = document.getElementById('nameGame');
  nameGame.style.display = 'none';
  const menu = document.getElementById('menu');
  menu.style.display = 'none';

  const canw = document.getElementById('gameDiv');
  canw.style.display = 'block';

  game();
} 
