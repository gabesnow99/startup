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

function startBall() {

    let ball = document.getElementById("ball");
    ball.style.top = "20vw";
    ball.style.top = "40vw";

    let ballObj = {
        xPos: 20,
        yPos: 40,
        xDir: 1,
        yDir: 1,
        inPlay: true,
    };

    return ballObj;
}

function playBall(ballObj) {

    if (ballObj.yPos <= 0) {
        ballObj.yDir = 1;
    } else if (ballObj.yPos >= 40) {
        ballObj.yDir = -1;
    }

    if (ballObj.xPos > 90) {
        ballObj.inPlay = false;
    }

    let xNewPos = ballObj.xPos + ballObj.xDir;
    let yNewPos = ballObj.yPos + ballObj.yDir;

    xNewPos += "vw";
    yNewPos += "vw";

    ball.style.top = xNewPos;
    ball.style.top = yNewPos;

    return ballObj;
}

function play() {
    let ballObj = startBall();
    for (let i = 0; i < 1; i++) {
        ballObj = playBall(ballObj);
    }
    // while (ballObj.inPlay === true) {
    //     ballObj = playBall(ballObj);
    // }
}

init();
addListeners();
play();