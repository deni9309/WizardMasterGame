function start(state, game) {

    game.createWizard(state.wizard);

    // bind 'state' and 'game' to the function's context
    // therefore we can pass them through when function executes
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game) {
    const { wizard } = state;
    const { wizardElement } = game;

    // move wizard D:right W:up A:left S:down
    if (state.keys.KeyD) {
        wizard.posX += wizard.speed;
    }
    if (state.keys.KeyW) {
        wizard.posY -= wizard.speed;
    }
    if (state.keys.KeyA) {
        wizard.posX -= wizard.speed;
    }
    if (state.keys.KeyS) {
        wizard.posY += wizard.speed;
    }

    // render
    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}