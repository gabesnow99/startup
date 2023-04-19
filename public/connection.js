function setOpponent(opponent) {
    localStorage.setItem('opponent', opponent);
}

function connect() {
    const opponent = document.querySelector('#opponent-name').value;
    setOpponent(opponent);
    window.location.href = 'play.html';
}
