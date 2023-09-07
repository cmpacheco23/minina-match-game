let winSound = new Audio ('./sounds/slot-win.wav')
let isHissing = new Audio ('./sounds/hiss.wav')
let isPurring = new Audio ('./sounds/purr.wav')
let winSoundv2 = new Audio ('./sounds/win-song.wav')
let timeOut = new Audio ('./sounds/alarm.wav')
// sound for time ran out
// out of moves

function playIsHissing () {
  isHissing.volume = 0.25
  isHissing.play()
}

function playWinSound () {
  winSound.volume = 0.25
  winSound.play()
}

function playIsPurring () {
  isPurring.volume = 0.25
  isPurring.play()
}

function playWinSoundTwo () {
  winSoundv2.volume = 0.25
  winSoundv2.play()
}

function playTimerSound () {
  timeOut.volume = 0.25
  timeOut.play()
}

export{
  playIsHissing,
  playWinSound,
  playIsPurring,
  playWinSoundTwo,
  playTimerSound
}