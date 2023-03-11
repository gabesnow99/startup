function init() {
    let leftBar = document.getElementById("left-bar");
    let rightBar = document.getElementById("right-bar");
    leftBar.style.top = "15vw";
    rightBar.style.top = "15vw";
}

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
    // document.getElementById("play-logo").innerHTML = "MOVING LEFT UP";
    let bar = document.getElementById("left-bar");
    if (bar.style.top === "") {
        bar.style.top = "15vw";
    }
    
    let newPos = bar.style.top.slice(0, -2) - 1.0;
    if (newPos < 0) {
        newPos = 0;
    }
    newPos += "vw";

    bar.style.top = newPos;
    // document.getElementById("play-logo").innerHTML = newPos;
}

function moveLeftyDown() {
    // document.getElementById("play-logo").innerHTML = "MOVING LEFT DOWN";
    let bar = document.getElementById("left-bar");
    if (bar.style.top === "") {
        bar.style.top = "15vw";
    }

    let newPos = Number(bar.style.top.slice(0, -2));
    newPos += 1;
    if (newPos > 30) {
        newPos = 30;
    }
    newPos += "vw";

    bar.style.top = newPos;
    // document.getElementById("play-logo").innerHTML = newPos;
}

function stopLefty() {
    // document.getElementById("play-logo").innerHTML = "STOP LEFTY";
}

function moveRightyUp() {
    let bar = document.getElementById("right-bar");
    if (bar.style.top === "") {
        bar.style.top = "15vw";
    }
    
    let newPos = bar.style.top.slice(0, -2) - 1.0;
    if (newPos < 0) {
        newPos = 0;
    }
    newPos += "vw";

    bar.style.top = newPos;
}

function moveRightyDown() {
    let bar = document.getElementById("right-bar");
    if (bar.style.top === "") {
        bar.style.top = "15vw";
    }

    let newPos = Number(bar.style.top.slice(0, -2));
    newPos += 1;
    if (newPos > 30) {
        newPos = 30;
    }
    newPos += "vw";

    bar.style.top = newPos;
}

function stopRighty() {
    // document.getElementById("play-logo").innerHTML = "STOP RIGHTY";
}

init();
addListeners();
