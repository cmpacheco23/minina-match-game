
let isHissing = new Audio ('./sounds/hiss.wav')
let isPurring = new Audio ('./sounds/purr.wav')
let winSound = new Audio ('./sounds/slot-win-short.wav')
let timeOut = new Audio ('./sounds/alarm.wav')
// out of moves

function playIsHissing () {
  isHissing.volume = 0.25
  isHissing.play()
}


function playIsPurring () {
  isPurring.volume = 0.30
  isPurring.play()
}

function playWinSound () {
  winSound.volume = 0.25
  winSound.play()
}

function playTimerSound () {
  timeOut.volume = 0.10
  timeOut.play()
}

export{
  playIsHissing,
  playWinSound,
  playIsPurring,
  playTimerSound
}