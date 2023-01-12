function initState() {
    let startX = Math.floor(Math.random() * 400);
    let startY = Math.floor(Math.random() * 500);

    const state = {
        player: 'Merlin',
        wizard: {
            width: 82,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 10
        },
        fireball: {
            width: 20,
            height: 20,
        },
        bugStats: {
            width: 50,
            height: 50,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
            speed: 8,
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