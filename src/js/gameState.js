function initState() {
    const state = {
        player: 'Merlin',
        wizard: {
            width: 82,
            height: 100,
            startX: Math.floor(Math.random() * 400),
            startY: Math.floor(Math.random() * 500),
        }
    }

    return state;
}