function start(state, game) {
    // bind 'state' and 'game' to the function's context
    // therefore we can pass them through when function executes
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game) {
    console.log(state.player);

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}