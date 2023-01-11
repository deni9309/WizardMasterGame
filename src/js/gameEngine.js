function start(state, game) {

    game.createWizard(state.wizard);

    // bind 'state' and 'game' to the function's context
    // therefore we can pass them through when function executes
    window.requestAnimationFrame((timeStamp) => gameLoop(state, game, timeStamp));
}

function gameLoop(state, game, timeStamp) {
    const { wizard } = state;
    const { wizardElement } = game;

    modifyWizardPosition(state, game, timeStamp);

    // spawn bugs 
    if (timeStamp > state.bugStats.nextSpawnTimestamp) {
        game.createBug(state.bugStats);
        
        // configure when to show new bug with timestamp
        state.bugStats.nextSpawnTimestamp = timeStamp + Math.random() * state.bugStats.maxSpawnInterval;
    }

    // render
    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function modifyWizardPosition(state, game) {
    const { wizard } = state;

    // move wizard D:right W:up A:left S:down
    if (state.keys.KeyD) {
        // to be fully visible when moving right (stays within the screen dimensions )
        wizard.posX = Math.min(wizard.posX + wizard.speed, game.gameScreen.offsetWidth - wizard.width);
    }
    if (state.keys.KeyW) {
        wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
    }
    if (state.keys.KeyA) {
        wizard.posX = Math.max(wizard.posX - wizard.speed, 0);
    }
    if (state.keys.KeyS) {
        // to be fully visible when moving down (stays within the screen dimensions )
        wizard.posY = Math.min(wizard.posY + wizard.speed, game.gameScreen.offsetHeight - wizard.height);
    }
}