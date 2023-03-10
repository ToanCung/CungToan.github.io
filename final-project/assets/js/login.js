const registerBtn = document.querySelector('.btn p');
const loginBox = document.querySelector('.login-form');
const regBox = document.querySelector('.register-form');

function showRegBox() {
    loginBox.classList.add('removeBox');
    regBox.classList.add('activeBox');
}

registerBtn.onclick = showRegBox;