function initState() {
    let startX = Math.floor(Math.random() * 400);
    let startY = Math.floor(Math.random() * 500);

    const state = {
        player: 'Merlin',
        wizard: {
            width: 87,
            height: 100,
            posX: startX,
            posY: startY,
            speed: 4
        },
        bugStats: {
            width:50,
            height: 50,
            nextSpawnTimestamp: 0,
            maxSpawnInterval: 1500,
        },
        keys: {
            KeyA: false,
            KeyD: false,
            KeyW: false,
            KeyS: false
        }
    }

    return state;
}