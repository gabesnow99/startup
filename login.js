function login() {
    const username = document.querySelector("#login-name");
    localStorage.setItem('username', username.value);
    // window.location.href = "play.html";
}
