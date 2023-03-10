const btn = document.getElementById('btn');
const wrapperOverlay = document.querySelector('.bg-overlay');
const modalBox = document.getElementById('modal-box');

function activeModalBox(){
    modalBox.classList.add('activeModalBox');
    wrapperOverlay.classList.add('activeOverlay')
}

btn.onclick = activeModalBox;