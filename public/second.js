function getPlayerName() {
    return localStorage.getItem('username') ?? 'Mystery Player';
}

function setSinglePlayer() {
    localStorage.setItem('mode', 'single');
}

function setTwoPlayer() {
    localStorage.setItem('mode', 'double');
}

function setOnline() {
    localStorage.setItem('mode', 'online');
}
