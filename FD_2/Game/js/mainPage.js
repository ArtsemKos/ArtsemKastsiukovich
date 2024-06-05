function renderMainPage(){
    return  `<div class="menu_item nick" >Защитник
    <input type="text" placeholder="Введите ник" id="userName">
</div>
<div class="menu_item button" onclick="renderGamePage()">Начать игру</div>
<div class="menu_item button" onclick="switchToSettingsPage()">Настройки</div>`;
}