function start(state, game) {

    game.createWizard(state.wizard);

    // bind 'state' and 'game' to the function's context
    // therefore we can pass them through when function executes
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game, timeStamp) {
    const { wizard } = state;
    const { wizardElement } = game;

    modifyWizardPosition(state, game);

    if (state.keys.Space) {
        game.wizardElement.style.backgroundImage = 'url("/src/images/wizard-fire.png")';

        // add delay when wizard fires
        if (timeStamp > state.fireball.nextSpawnTimestamp) {
            game.createFireball(wizard, state.fireball);

            state.fireball.nextSpawnTimestamp = timeStamp + state.fireball.fireRate;
        }
    } else {
        game.wizardElement.style.backgroundImage = 'url("/src/images/wizard.png")';
    }

    // spawn bugs 
    if (timeStamp > state.bugStats.nextSpawnTimestamp) {
        game.createBug(state.bugStats);

        // configure when to show new bug with timestamp
        state.bugStats.nextSpawnTimestamp = timeStamp + Math.random() * state.bugStats.maxSpawnInterval;
    }

    // render(move) bugs
    let bugElements = document.querySelectorAll('.bug');
    bugElements.forEach(bugEl => {
        let posX = parseInt(bugEl.style.left);

        if (posX > 0) {
            bugEl.style.left = posX - state.bugStats.speed + 'px';
        } else {
            bugEl.remove();
        }
    });

    // render(move) fireballs
    document.querySelectorAll('.fireball').forEach(fireball => {
        let posX = parseInt(fireball.style.left);

        // detect fireball collision
        bugElements.forEach(bug => {
            if (detectCollision(bug, fireball)) {
                bug.remove();
                fireball.remove();
            }
        });

        if (posX > game.gameScreen.offsetWidth) {
            fireball.remove();
        } else {
            fireball.style.left = posX + state.fireball.speed + 'px';
        }
    });

    // render wizard
    wizardElement.style.left = wizard.posX + 'px';
    wizardElement.style.top = wizard.posY + 'px';

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function modifyWizardPosition(state, game) {
    const { wizard } = state;

    // move wizard with keyboard arrows
    if (state.keys.ArrowRight) {
        // to be fully visible when moving right (stays within the screen dimensions )
        wizard.posX = Math.min(wizard.posX + wizard.speed, game.gameScreen.offsetWidth - wizard.width);
    }
    if (state.keys.ArrowUp) {
        wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
    }
    if (state.keys.ArrowLeft) {
        wizard.posX = Math.max(wizard.posX - wizard.speed, 0);
    }
    if (state.keys.ArrowDown) {
        // to be fully visible when moving down (stays within the screen dimensions )
        wizard.posY = Math.min(wizard.posY + wizard.speed, game.gameScreen.offsetHeight - wizard.height);
    }
}

function detectCollision(objectA, objectB) {
    // check whether two objects overlap eachother (see MDN-> getBoundingClientRect();)
    let first = objectA.getBoundingClientRect();
    let second = objectB.getBoundingClientRect();

    let hasCollision = !(first.top > second.bottom ||
        first.bottom < second.top ||
        first.right < second.left ||
        first.left > second.right);

    return hasCollision;
}