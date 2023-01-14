function initState() {
    let startX = Math.floor(Math.random() * 400);
    let startY = Math.floor(Math.random() * 500);

    const state = {
        player: 'Merlin',
        gameOver: false,
        score: 0,
        scoreRate: 1,
        killScore: 100,
        wizard: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 10,
            gravity: 1.5,
        },
        fireball: {
            width: 20,
            height: 20,
            speed: 12,
            nextSpawnTimestamp: 0,
            fireRate: 300,
        },
        bugStats: {
            width: 45,
            height: 45,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
            speed: 5,
        },
        keys: {
            ArrowLeft: false,
            ArrowRight: false,
            ArrowUp: false,
            ArrowDown: false,
            Space: false,
        }
    }

    return state;
}