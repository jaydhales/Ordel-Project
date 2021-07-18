var startBtns = document.querySelectorAll('.start');
var caret = document.querySelectorAll('.caret');

function eventClick (variable, func) {
    for (let btn = 0; btn < variable.length; btn++) {
        variable[btn].addEventListener('click', func );
    }
}

function logIn () {
    startBtns[0].textContent = 'J';
    startBtns[0].style.borderRadius = '50%';
    startBtns[0].style.padding = '8px 18.85px';
    startBtns[1].textContent = 'Start Shopping';
}

function cDown () {
    console.log(this);
}

eventClick( startBtns , logIn);
eventClick( caret, cDown);