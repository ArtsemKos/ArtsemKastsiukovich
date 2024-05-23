

window.onhashchange = switchToStateFromURLHash;

let spaState = {};
function switchToStateFromURLHash() {
    const URLHash = window.location.hash;
    const stateStr = URLHash.substr(1);
    if (stateStr != "") {
        let parts = stateStr.split("_")
        spaState = { pagename: parts[0] };
    }
    else
        spaState = { pagename: 'Main' };





    let pageHTML = '';
    switch (spaState.pagename) {
        case 'Settings':
            pageHTML += renderSettingPage();
            break;
        case 'Main':
            pageHTML += renderMainPage();
            break;

    }
    document.getElementById('menu').innerHTML = pageHTML;


}


function switchToState(newState) {
    const stateStr = newState.pagename;
    location.hash = stateStr;
}


function switchToSettingsPage() {
    switchToState({ pagename: 'Settings' });
}

function switchToMainPage() {
    switchToState({ pagename: 'Main' });
}
switchToStateFromURLHash();

// --------sound-----------------------------------------------------------
 


function switchSound() {
    const sound = document.getElementById('checkSound');
    let checkSound = sound.textContent;
    if (checkSound === 'Выключить звук') {
        sound.innerHTML = 'Включить звук';
        checkSound = 'Включить звук';
    }
    else {
        sound.innerHTML = 'Выключить звук';
        checkSound = 'Выключить звук';
    }
}

