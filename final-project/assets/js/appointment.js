const availDay = document.getElementById('avail-oppointnent');
const notiBox = document.getElementById('noti-event');

function activeBox(){
    notiBox.classList.add('activeBox')
}
availDay.onclick = activeBox;