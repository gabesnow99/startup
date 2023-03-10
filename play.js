function getPlayerMode() {
    return localStorage.getItem('mode') ?? 'single';
}

function getPlayerName() {
    return localStorage.getItem('username') ?? 'Doc Brown';
}

function addListeners() {

    const mode = getPlayerMode();

    // ADD LISTENERS FOR UP AND DOWN ARROWS
    document.addEventListener('keydown', function(key) {
        // document.getElementById("play-logo").innerHTML = key.code;
        if (key.code === "ArrowUp") {
            moveLeftyUp();
        } else if (key.code === "ArrowDown") {
            moveLeftyDown();
        }
    });
    // WHEN KEYS ARE LET GO
    document.addEventListener('keyup', function(key) {
        if (key.code === "ArrowUp") {
            stopLefty();
        } else if (key.code === "ArrowDown") {
            stopLefty();
        }
    })

    // ONLY FOR TWO-PLAYER
    if (mode === "double") {
        document.addEventListener('keydown', function(key) {
            if (key.code === "KeyW") {
                moveRightyUp();
            } else if (key.code === "KeyS") {
                moveRightyDown();
            }
        });
        // WHEN KEYS ARE LET GO
        document.addEventListener('keyup', function(key) {
            if (key.code === "KeyW") {
                stopRighty();
            } else if (key.code === "KeyS") {
                stopRighty();
            }
        })
    }
    
}

function moveLeftyUp() {
    document.getElementById("play-logo").innerHTML = "MOVING LEFT UP";
}

function moveRightyUp() {
    document.getElementById("play-logo").innerHTML = "MOVING RIGHT UP";
}

function moveLeftyDown() {
    document.getElementById("play-logo").innerHTML = "MOVING LEFT DOWN";
}

function moveRightyDown() {
    document.getElementById("play-logo").innerHTML = "MOVING RIGHT DOWN";
}

function stopLefty() {
    document.getElementById("play-logo").innerHTML = "STOP LEFTY";
}

function stopRighty() {
    document.getElementById("play-logo").innerHTML = "STOP RIGHTY";
}

addListeners();
