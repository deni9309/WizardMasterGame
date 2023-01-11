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
            speed: 4
        },
        keys: {

        }
    }

    return state;
}