//global constants
const cluePauseTime = 333; //time to wait between clues
const nextClueWaitTime = 1000; //time to wait before starting playback of the clue sequence
const TIMER_DEFAULT_SECONDS = 10;
//elements
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const timerText = document.getElementById("timer");
const strikeCountText = document.getElementById("strikeCounter");
//global variables
var pattern = [5, 2, 2, 4, 5, 3, 2, 5, 1, 2];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //range (0-1)
var guessCounter = 0;
var turnGuess = 0;
var isTurnOver = false;
var strikes = 0;

var clueHoldTime = 1000; //milliseconds, how long to hold each clue's light/sound

//timer variables
var seconds = TIMER_DEFAULT_SECONDS;
var timerInterval;

function createRandomPattern(length) {
  let randomPattern = [];

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * 5) + 1; //sum by one so Math.floor does not give us 0 but a minimum range
    randomPattern.push(randomNumber);
  }

  return randomPattern;
}

function startGame() {
  //init variables
  progress = 0;
  guessCounter = 0;
  gamePlaying = true;
  isTurnOver = false;
  turnGuess = 0;
  strikes = 0;
  //when the game starts, hide start button and show the stop button
  startBtn.classList.add("hidden");
  stopBtn.classList.remove("hidden");
  //show strikeCount
  strikeCountText.classList.remove("hidden");
  //create random pattern at the start of every game
  pattern = createRandomPattern(6);
  console.log(pattern);

  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  stopTimer();
  startBtn.classList.remove("hidden");
  stopBtn.classList.add("hidden");
  //hide strikeCount
  strikeCountText.classList.add("hidden");
}

function loseGame() {
  stopGame();

  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  stopTimer();
  alert("Game Over. You won!");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  //start timer every time the clue sequence ends
  setTimeout(startTimer, delay);
}

function startTimer() {
  if (!gamePlaying) return;

  timerText.classList.remove("hidden");
  timerText.innerText = `Seconds left: ${seconds}`;
  //save interval in variable so we can clear it when the user passes the turn
  timerInterval = setInterval(() => {
    if (seconds > 0) {
      seconds--;
      if (seconds < 5) {
        timerText.style.color = "red";
      } else {
        timerText.style.color = "wheat";
      }
      timerText.innerText = `Seconds left: ${seconds}`;
    } else {
      stopTimer();
      //run lose block with strikes feature
      if (strikes < 2) {
        updateStrikes();
        alert("You ran out of time! you now have " + strikes + " strikes");
        playClueSequence();
      } else {
        loseGame();
      }
    }
  }, 1000);
}

function stopTimer() {
  //hide text so the user can focus in the pattern
  timerText.classList.add("hidden");
  seconds = TIMER_DEFAULT_SECONDS;
  timerText.style.color = "wheat";
  clearInterval(timerInterval);
}

function updateStrikes() {
  strikes++;
  strikeCountText.innerText = `Strikes: ${strikes}`;
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  //game logic below

  //check if guess is correct
  if (btn === pattern[guessCounter]) {
    //if guess is correct, increment guessCounter
    guessCounter++;
    //if the turn is over, reset guessCounter and increment progress
    if (guessCounter > progress) {
      stopTimer();
      guessCounter = 0;
      progress++;
      //if this was the last turn, execute winGame()
      if (progress >= pattern.length) {
        winGame();
      } else {
        //if this was not the last turn, play the next sequence
        //decrease hold time to make game harder after each turn
        clueHoldTime -= 100;
        playClueSequence();
      }
    }
  } else {
    stopTimer();
    if (strikes < 2) {
      updateStrikes();
      alert("Wrong button! You currently have " + strikes + " strikes");
      playClueSequence();
    } else {
      loseGame();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 200.6,
  2: 250.6,
  3: 300,
  4: 350.2,
  5: 400.0,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
