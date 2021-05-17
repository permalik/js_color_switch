window.onload = switchParameters();

let page = document.querySelector('body');

page.addEventListener('resize', resizedParameters);

// variables
var correctCounter = 0;
var questionArr = [
  '2 + 2 = ?',
  '10 - 5 = ?',
  '-25 + 15 = ?',
  '20 * 4 = ?',
  '10 * -2 = ?',
  '33 / 3 = ?',
  '-144 / 12 = ?',
  '2(4 + 4) = ?',
  '5 * 10(5 - 3) = ?',
  '1 + 1(3(8 - 7)) = ?',
];
var answerArr = [4, 5, -10, 80, -20, 11, -12, 16, 100, 6];

/*
 * answer input
 */
// button interaction
let answerButton = document.getElementById('answer_button');

answerButton.addEventListener('click', valQuestion);

// animate if correct answer
function valQuestion() {
  let questionPrompt = document.querySelector('.math_question').innerHTML;
  let answerInput = document.querySelector('.answer_input').value;

  if ((questionPrompt == questionArr[correctCounter]) & (answerInput == answerArr[correctCounter])) {
    hideActivator();
    displaySwitch();
    moveSwitch();
    incrementCorrect();
  }
}

/*
 * switch input
 */
// color functionality
let redToggle = document.querySelector('.button_switch');

redToggle.addEventListener('click', buttonActivate);

function buttonActivate() {
  paintBkg();

  blackButton();

  setTimeout(function () {
    resetPaint();
  }, 1000);

  setTimeout(function () {
    hideSwitch();
  }, 1300);

  setTimeout(function () {
    showActivator();
    resetButton();
  }, 1600);

  swapQuestion();
}

// define switch display metrics
function switchParameters() {
  window_Width = window.innerWidth;
  window_Height = window.innerHeight;

  colorSwitch = document.querySelector('.color_switch');
  switch_width = colorSwitch.clientWidth;
  switch_height = colorSwitch.clientHeight;

  availSpace_H = window_Width - (switch_width + 100);
  availSpace_V = window_Height - (switch_height + 100);
}

function resizedParameters() {
  window_Width = window.innerWidth;
  window_Height = window.innerHeight;

  colorSwitch = document.querySelector('.color_switch');
  switch_width = colorSwitch.clientWidth;
  switch_height = colorSwitch.clientHeight;

  availSpace_H = window_Width - (switch_width + 100);
  availSpace_V = window_Height - (switch_height + 100);
}

// input console toggle
function hideActivator() {
  document.getElementById('switch_activator').style.display = 'none';
}

function showActivator() {
  document.getElementById('switch_activator').style.display = 'initial';
}

// show switch display
function displaySwitch() {
  let redButtonOn = document.querySelector('.color_switch');
  redButtonOn.style.display = 'block';
  redButtonOn.style.position = 'fixed';
}

// random switch positioning
function moveSwitch() {
  let randNum_H = Math.round(Math.random() * availSpace_H);
  let randNum_V = Math.round(Math.random() * availSpace_V);

  colorSwitch.style.left = randNum_H + 'px';
  colorSwitch.style.top = randNum_V + 'px';
}

// hide switch display
function hideSwitch() {
  let redButtonOff = document.querySelector('.color_switch');
  redButtonOff.style.display = 'none';
  redButtonOff.style.position = 'initial';
}

// toggle background color
function paintBkg() {
  if (correctCounter == 1) {
    let changingBkg = document.querySelector('body');
    changingBkg.style.backgroundColor = 'red';
    changingBkg.style.transition = '1s';
  } else if (correctCounter == 2) {
    let changingBkg = document.querySelector('body');
    changingBkg.style.backgroundColor = 'orangeRed';
    changingBkg.style.transition = '1s';
  } else if (correctCounter == 3) {
    let changingBkg = document.querySelector('body');
    changingBkg.style.backgroundColor = 'yellow';
    changingBkg.style.transition = '1s';
  } else if (correctCounter == 4) {
    let changingBkg = document.querySelector('body');
    changingBkg.style.backgroundColor = 'green';
    changingBkg.style.transition = '1s';
  } else if (correctCounter == 5) {
    let changingBkg = document.querySelector('body');
    changingBkg.style.backgroundColor = 'blue';
    changingBkg.style.transition = '1s';
  } else if (correctCounter == 6) {
    let changingBkg = document.querySelector('body');
    changingBkg.style.backgroundColor = 'purple';
    changingBkg.style.transition = '1s';
  } else if (correctCounter == 7) {
    let changingBkg = document.querySelector('body');
    changingBkg.style.backgroundColor = 'deepPink';
    changingBkg.style.transition = '1s';
  } else if (correctCounter == 8) {
    let changingBkg = document.querySelector('body');
    changingBkg.style.backgroundColor = 'cyan';
    changingBkg.style.transition = '1s';
  } else if (correctCounter == 9) {
    let redBkg = document.querySelector('body');
    redBkg.style.backgroundColor = 'sienna';
    redBkg.style.transition = '1s';
  } else if (correctCounter == 10) {
    let redBkg = document.querySelector('body');
    redBkg.style.backgroundColor = 'teal';
    redBkg.style.transition = '1s';
  }
}

// reset background color
function resetPaint() {
  let bodyBkg = document.querySelector('body');
  bodyBkg.style.backgroundColor = 'initial';
  bodyBkg.style.transition = '2s';
}

// toggle button switch styling
function blackButton() {
  let colorButton = document.querySelector('.button_switch');
  let buttonSmileOn = document.querySelector('.button_smile');

  colorButton.style.padding = '2.8rem';
  colorButton.style.backgroundColor = 'black';
  colorButton.style.boxShadow = 'none';

  buttonSmileOn.style.display = 'inline';
}

// reset button switch styling
function resetButton() {
  let buttonSmileOff = document.querySelector('.button_smile');
  let colorButton = document.querySelector('.button_switch');

  colorButton.style.padding = '4rem';
  colorButton.style.boxShadow = '0px 1px 2px 0px rgb(194, 194, 194), 0px 2px 6px 2px rgb(194, 194, 194)';
  buttonSmileOff.style.display = 'none';

  if (correctCounter == 1) {
    colorButton.style.backgroundColor = 'orangeRed';
  } else if (correctCounter == 2) {
    colorButton.style.backgroundColor = 'yellow';
  } else if (correctCounter == 3) {
    colorButton.style.backgroundColor = 'green';
  } else if (correctCounter == 4) {
    colorButton.style.backgroundColor = 'blue';
  } else if (correctCounter == 5) {
    colorButton.style.backgroundColor = 'purple';
  } else if (correctCounter == 6) {
    colorButton.style.backgroundColor = 'deepPink';
  } else if (correctCounter == 7) {
    colorButton.style.backgroundColor = 'cyan';
  } else if (correctCounter == 8) {
    colorButton.style.backgroundColor = 'sienna';
  } else if (correctCounter == 9) {
    colorButton.style.backgroundColor = 'teal';
  }
}

//  move to next question
function incrementCorrect() {
  correctCounter++;
}

// set next question
function swapQuestion() {
  if (correctCounter == 1) {
    let questionTwo = document.querySelector('.math_question');

    questionTwo.innerHTML = questionArr[correctCounter];
  } else if (correctCounter == 2) {
    let questionTwo = document.querySelector('.math_question');

    questionTwo.innerHTML = questionArr[correctCounter];
  } else if (correctCounter == 3) {
    let questionTwo = document.querySelector('.math_question');

    questionTwo.innerHTML = questionArr[correctCounter];
  } else if (correctCounter == 4) {
    let questionTwo = document.querySelector('.math_question');

    questionTwo.innerHTML = questionArr[correctCounter];
  } else if (correctCounter == 5) {
    let questionTwo = document.querySelector('.math_question');

    questionTwo.innerHTML = questionArr[correctCounter];
  } else if (correctCounter == 6) {
    let questionTwo = document.querySelector('.math_question');

    questionTwo.innerHTML = questionArr[correctCounter];
  } else if (correctCounter == 7) {
    let questionTwo = document.querySelector('.math_question');

    questionTwo.innerHTML = questionArr[correctCounter];
  } else if (correctCounter == 8) {
    let questionTwo = document.querySelector('.math_question');

    questionTwo.innerHTML = questionArr[correctCounter];
  } else if (correctCounter == 9) {
    let questionTwo = document.querySelector('.math_question');

    questionTwo.innerHTML = questionArr[correctCounter];
  } else {
    let questionTwo = document.querySelector('.math_question');

    questionTwo.innerHTML = 'You Won!!';
  }
}
