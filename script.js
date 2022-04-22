//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var attempts = 0;

// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

function startGame() {
  document.getElementById("gameButtonArea").classList.remove("hidden");
  document.getElementById("end").classList.add("hidden");
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  //reset everything
  clueHoldTime = 1000;
  cluePauseTime = 333;

  const input = prompt("How long of a pattern would you like?");
  pattern = [];
  for (let i = 0; i < input; i++) {
    pattern[i] = getRandomInt(4);
  }
  console.log(pattern);
  progress = 0;
  attempts = 0;
  gamePlaying = true;
  playClueSequence();
}

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}

function stopGame() {
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  gamePlaying = false;
}

function loseGame() {
  stopGame();
  document.getElementById("gameButtonArea").classList.add("hidden");
  document.getElementById("end").classList.remove("hidden");
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  document.getElementById("gameButtonArea").classList.add("hidden");
  document.getElementById("end").classList.remove("hidden");
  alert("Congrats you have won.");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 349,
  4: 392,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.02, 0.025);
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

function lightButton(btn) {
  document.getElementById("gameb" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("gameb" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  } else {
    if (pattern[guessCounter] == btn) {
      if (guessCounter == progress) {
        if (progress == pattern.length - 1) {
          winGame();
        } else {
          progress++;
          clueHoldTime = clueHoldTime * 0.6;
          cluePauseTime = cluePauseTime * 0.6;
          playClueSequence();
        }
      } else {
        guessCounter++;
      }
    } else {
      if (attempts < 2) {
        attempts += 1;
        let attempt = 3 - attempts
        alert("Incorrect attempts left: " + attempt );
        playClueSequence();
      } else {
        loseGame();
      }
    }
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
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
