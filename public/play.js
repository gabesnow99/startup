const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
let socketDone = false;

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
    return localStorage.getItem('userName') ?? 'Doc Brown';
}

function getOpponent() {
    return localStorage.getItem('opponent') ?? 'Gabe';
}

function addListeners() {

    const mode = getPlayerMode();

    // ONLY FOR TWO-PLAYER
    if (mode === "double") {
        document.addEventListener('keydown', function(key) {
            if (key.code === "KeyW") {
                moveLeftyUp();
            } else if (key.code === "KeyS") {
                moveLeftyDown();
            } else if (key.code === "ArrowUp") {
                moveRightyUp();
            } else if (key.code === "ArrowDown") {
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
    } else {//if (mode === "single") {
        // ADD LISTENERS FOR UP AND DOWN ARROWS
        document.addEventListener('keydown', function(key) {
            // document.getElementById("play-logo").innerHTML = key.code;
            if (key.code === "ArrowUp") {
                moveLeftyUp();
            } else if (key.code === "ArrowDown") {
                moveLeftyDown();
            } else if (key.code === "KeyW") {
                moveLeftyUp();
            } else if (key.code === "KeyS") {
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
    ball.style.left = "42vw";

    let ballObj = {
        xPos: 42,
        yPos: 20,
        xDir: -1,
        yDir: 1,
        inPlay: true,
    };

    return ballObj;
}

function playBall(ballObj) {

    if (ballObj.yPos <= 0) {
        ballObj.yDir = 1;
    } else if (ballObj.yPos >= 38) {
        ballObj.yDir = -1;
    }

    if (ballObj.xPos > 90) {
        ballObj.inPlay = false;
        ballObj.winner = left;
    } else if (ballObj.xPos <= 0) {
        ballObj.inPlay = false;
        ballObj.winner = right;
    }

    let xNewPos = ballObj.xPos + ballObj.xDir;
    let yNewPos = ballObj.yPos + ballObj.yDir;

    if (xNewPos === 83) {
        let bar = document.getElementById("right-bar");
        let top = bar.style.top.slice(0, -2);
        let bottom = Number(top) + 10;
        // document.getElementById("play-logo").innerHTML = top + " " + bottom + " " + yNewPos;
        if (yNewPos <= bottom && yNewPos >= top) {
            // document.getElementById("play-logo").innerHTML = "Change!";
            ballObj.xDir = -1;
        }
    }

    if (xNewPos === 1) {
        let bar = document.getElementById("left-bar");
        let top = bar.style.top.slice(0, -2);
        let bottom = Number(top) + 10;
        // document.getElementById("play-logo").innerHTML = top + " " + bottom + " " + yNewPos;
        if (yNewPos <= bottom && yNewPos >= top) {
            // document.getElementById("play-logo").innerHTML = "Change!";
            ballObj.xDir = 1;
        }
    }
    
    // let newPos = bar.style.top.slice(0, -2) - 1.0;
    // if (newPos < 0) {
    //     newPos = 0;
    // }
    // newPos += "vw";

    ballObj.xPos = xNewPos;
    ballObj.yPos = yNewPos;

    xNewPos += "vw";
    yNewPos += "vw";

    ball.style.left = xNewPos;
    ball.style.top = yNewPos;

    // document.getElementById("play-logo").innerHTML = "HERE";

    return ballObj;
}

function updateComputer(ballObj) {
    let bar = document.getElementById("left-bar");
    let top = bar.style.top.slice(0, -2);
    let bottom = Number(top) - 10;
    // document.getElementById("play-logo").innerHTML = top;
    if (top > 10) {
        moveRightyUp();
    }
    // if (ballObj.yPos > top) {
        // moveRightyDown();
    // } else if (ballObj.yPos < bottom) {
    //     moveRightyUp();
    // }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function connectToOpponent() {
    const opponent = getOpponent();
    let announcement = "Connecting to " + opponent;
    document.getElementById("connection-announcement").innerHTML = announcement;

    await socketConnect();
    
    announcement = "Connected to " + opponent;
    document.getElementById("connection-announcement").innerHTML = announcement;
}

function display(text) {
    document.getElementById("play-logo").innerHTML = text;
}


// Display messages we receive from our friends
socket.onmessage = async (event) => {
    const text = await event.data.text();
    const chat = JSON.parse(text);
    appendMsg('friend', chat.name, chat.msg);
};

function sendMessage(msg) {
    const name = getPlayerName();
    socket.send(`{"name":"${name}", "msg":"${msg}"}`);
}

// Create one long list of messages
function appendMsg(cls, from, msg) {
    const chatText = document.querySelector('#chat-text');
    chatText.innerHTML = `<div><span class="${cls}">${from}</span>: ${msg}</div>` + chatText.innerHTML;
}

// Send message on enter keystroke
const input = document.querySelector('#new-msg');
    input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendMessage("Hello there!");
    }
});




  

async function socketConnect() {
    // while (!socketDone) {
    //     sendMessage('ready');
    // }
}

async function play() {

    let go = false;
    if (getPlayerMode() != 'online') {
        go = true;
    }
    if (!go) {
        await connectToOpponent();
    }

    let ballObj = startBall();
    // document.getElementById("play-logo").innerHTML = ballObj.xPos;
    let i = 0;
    while (ballObj.inPlay === true) {
        // ballObj = playBall(ballObj); // Uncomment this when ready.
        await sleep(100);
        ballObj = playBall(ballObj);
        // document.getElementById("play-logo").innerHTML = ballObj.xPos;
        // i++;
        if (getPlayerMode() === "single") {
            updateComputer(ballObj);
        }
    }
}

init();
addListeners();
play();
