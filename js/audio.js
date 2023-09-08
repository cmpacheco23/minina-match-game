
let isHissing = new Audio ('./sounds/hiss.wav')
let isPurring = new Audio ('./sounds/purr.wav')
let winSoundv2 = new Audio ('./sounds/win-song.wav')
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

function playWinSoundTwo () {
  winSoundv2.volume = 0.25
  winSoundv2.play()
}

function playTimerSound () {
  timeOut.volume = 0.10
  timeOut.play()
}

export{
  playIsHissing,
  playWinSound,
  playIsPurring,
  playWinSoundTwo,
  playTimerSound
}