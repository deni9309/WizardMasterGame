function start(state, game) {

    game.createWizard(state.wizard);

    // bind 'state' and 'game' to the function's context
    // therefore we can pass them through when function executes
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game) {
    const { wizard } = state;
    const { wizardElement } = game;

    // move wizard
    if (state.keys.KeyD) {
        wizard.posX += 2;
    }

    // render
    wizardElement.style.left = wizard.posX + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}