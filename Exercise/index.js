const startBtns = document.querySelectorAll('.start');
const caret = document.querySelectorAll('.caret');
const navBtn = document.querySelectorAll('.hmb');
const navBar = document.querySelector('#navbar');
const copyright = document.querySelector('small');

function eventL(variable, event, func) {
  for (let btn = 0; btn < variable.length; btn++) {
    variable[btn].addEventListener(event, func);
  }
}

function logIn() {
  startBtns[0].textContent = 'J';
  startBtns[0].style.borderRadius = '50%';
  startBtns[1].textContent = 'Start Shopping';
}

function cDown(e) {
  e.preventDefault();
  let caretBtn;

  if (e.target.tagName === 'IMG') {
    caretBtn = e.target.parentNode;
  } else {
    caretBtn = e.target;
  }

  caretBtn.classList.toggle('active');

  caretBtn.parentNode.parentNode.classList.toggle('active');
}

function changeNav() {
  navBar.classList.toggle('active');
}

function eventClick(variable, func) {
  eventL(variable, 'click', func);
}

eventClick(startBtns, logIn);
eventClick(caret, cDown);
eventClick(navBtn, changeNav);
eventL(window, 'resize', (e) => {
  if (e.target.innerWidth === 700) {
    navBar.classList.remove('active');
  }
});

copyright.innerHTML = `&copy; ${new Date().getFullYear()} All Rights Reserved`;