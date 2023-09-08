import * as gameAudio from './audio.js'

const mininaCards = [ 
  {image: "../images/fronts/minina1.svg"},
  {image: "../images/fronts/minina2.svg"},
  {image: "../images/fronts/minina3.svg"},
  {image: "../images/fronts/minina4.svg"},
  {image: "../images/fronts/minina5.svg"},
  {image: "../images/fronts/minina6.svg"},
  {image: "../images/fronts/minina7.svg"},
  {image: "../images/fronts/minina8.svg"},
  {image: "../images/fronts/minina9.svg"},
  // {image: "../images/fronts/minina10.svg"},
  {image: "../images/fronts/minina11.svg"},
  {image: "../images/fronts/minina12.svg"},
  {image: "../images/fronts/minina13.svg"},
  {image: "../images/fronts/minina14.svg"},
  {image: "../images/fronts/minina15.svg"},
  {image: "../images/fronts/minina16.svg"},
  {image: "../images/fronts/minina17.svg"},
  {image: "../images/fronts/minina18.svg"},
  {image: "../images/fronts/minina19.svg"},
  {image: "../images/fronts/minina20.svg"},
  {image: "../images/fronts/minina21.svg"},
  {image: "../images/fronts/minina22.svg"},
  {image: "../images/fronts/minina23.svg"},
  {image: "../images/fronts/minina24.svg"},
  {image: "../images/fronts/minina25.svg"},
  {image: "../images/fronts/minina26.svg"},
  {image: "../images/fronts/minina27.svg"},
  {image: "../images/fronts/minina28.svg"},
  {image: "../images/fronts/minina29.svg"},
  {image: "../images/fronts/minina30.svg"},
  {image: "../images/fronts/minina31.svg"},
  {image: "../images/fronts/minina32.svg"}
  ]
  

/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

let winner, moves, cardsToPlayGameWith,firstChoice
let matchesComplete, matchesMade, cardMatch, expectedMatches
let gameOver = false
let isTimeLeft, timeLeft, timer 
let openCards = []
let completedMatches = []
let cardCount
let currentLevel
let newCardTemp

/*------------------------ Cached Element References ------------------------*/

  const easyGame = document.getElementById('easy-game')
  const mediumGame = document.getElementById('medium-game')
  const hardGame = document.getElementById('hard-game')
  const resetBtnEl = document.getElementById('reset-game')
  const cardEls = document.querySelectorAll('#minina-card')
  const cardContainer = document.querySelector('.card-container')
  const messageEl = document.getElementById('new-message')
  const timeRemaining = document.getElementById('timer')
  const movesLeft = document.getElementById('moves')
  const matchesObtained = document.getElementById('match')
  const favicon = document.getElementById('favicon')
  const bodyElement = document.querySelector('body')

  /*----------------------------- Event Listeners -----------------------------*/

document.addEventListener("DOMContentLoaded", initEasy)

easyGame.addEventListener('click', () => {
  currentLevel = 'easy'
  initEasy()
})

mediumGame.addEventListener('click', () => {
  currentLevel = 'medium'
  initMedium()
})

hardGame.addEventListener('click', () => {
  currentLevel = 'hard'
  initHard()
})

resetBtnEl.addEventListener('click', () => {
  if (currentLevel === 'easy') {
    initEasy()
  } else if (currentLevel === 'medium') {
    initMedium()
  } else if (currentLevel === 'hard') {
    initHard()
  }
})


/*-------------------------------- Functions --------------------------------*/

  initEasy()
  initMedium()
  initHard()

function initEasy() {

  matchesMade = 0 
  cardMatch = false
  winner = undefined
  movesLeft.textContent = `${moves = 20}`
  firstChoice = true
  matchesComplete = false
  timeLeft = 80
  timeRemaining.textContent = `${timeLeft = 80} seconds`
  expectedMatches = 6
  cardCount = 6
  currentLevel = 'easy'
  render()
  isTimeLeft = true
  bodyElement.style.backgroundColor = '#48233C'

}

function initMedium() {
  matchesMade = 0 
  cardMatch = false
  winner = undefined
  movesLeft.textContent = `${moves = 60}`
  firstChoice = true
  matchesComplete = false
  timeLeft = 180
  timeRemaining.textContent = `${timeLeft = 180} seconds`
  expectedMatches = 12
  cardCount = 12
  currentLevel = 'medium'
  render()
  isTimeLeft = true
  bodyElement.style.backgroundColor = '#370031'
}

function initHard() {
  matchesMade = 0 
  cardMatch = false
  winner = undefined
  movesLeft.textContent = `${moves = 150}`
  firstChoice = true
  matchesComplete = false
  timeLeft = 300
  timeRemaining.textContent = `${timeLeft = 300} seconds`
  expectedMatches = 21
  cardCount = 21
  currentLevel = 'hard'
  render()
  isTimeLeft = true
  bodyElement.style.backgroundColor = '#0B0033'
}

function generateDeck() {
  let cardsOut = []
  mininaCards.slice(0,cardCount).forEach((card) => {
    cardsOut.push(card)
    cardsOut.push(card)
  })
  cardsToPlayGameWith = cardsOut
  fisherYatesShuffle(cardsToPlayGameWith)

}

function render() {
  generateDeck()
  cardsDisplayDesign()
  setTimeout(function() {
    messageEl.textContent = `Pick Your First Card, Let's Get Catty.`
  },1500) 
  }
  
function cardsDisplayDesign(){
  cardContainer.innerHTML = ''
  cardsToPlayGameWith.forEach((card, idx) => {
      const newCard = document.createElement('div')
      newCard.className = `card back-minina large shadow outline`
      newCard.id = `minina-card-${idx}`
      newCard.addEventListener('click', flipCard) 
      cardContainer.appendChild(newCard)
    })
}

function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
}

function flipCard(evt) {
  endPlay()
  isTimeLeft = true
  const cardFront = document.getElementById(`${(evt.target.id)}`)
  cardFront.classList.remove(`back-minina`)
  cardFront.style.transform = 'rotateY(180deg)'
  const id = parseInt(evt.target.id.split('-')[2])
  const idMod = id % cardsToPlayGameWith.length
  const cardUrl = cardsToPlayGameWith[idMod].image
  cardFront.style.backgroundImage = `url(${cardUrl})`

  const fullCardInfo = {
    dom:cardFront, url:cardUrl
  }

  openCards.push(fullCardInfo)   
  if (firstChoice === true){
    timer = setInterval(function() {
      timeRemaining.textContent = timeLeft + ' seconds'
      timeLeft -= 1
      if ((timeLeft < 0 || isTimeLeft === false) && (winner === true)) {
        timeRemaining.textContent = '🐾'
      } else if ((timeLeft > 0 || isTimeLeft === true) && (moves === 0)) {
        timeRemaining.textContent = '0'
      } else if (timeLeft < 0 || isTimeLeft === false) {
          timeRemaining.textContent = "Time's Up"
          messageEl.textContent = `Time's Up! Next Time, Purr-haps!`
          gameAudio.playTimerSound()}
    }, 1000)}
    
  firstChoice = false
  isWinnerTrue()
  checkforMatch()
}


function checkforMatch() {
  if (openCards.length === 1) {
    nextCardMessage()
} else if (openCards.length === 2) {
  openCards[0].url === openCards[1].url ? cardMatch = true : cardMatch = false

  if (cardMatch) {
    matchesMade += 1
    matchesObtained.textContent = matchesMade
    matchTrueMessage()
    completedMatches = openCards.slice(0,2) 
    openCards.splice(0,2) 
    checkMatchesMade()
  } else {
    moves -= 1
    matchFalseMessage()

    movesLeft.textContent = moves
    setTimeout(function() {
      openCards[1].dom.style.transform = 'rotateY(-180deg)'
      openCards[1].dom.style.backgroundImage =`url(${"../images/backs/minina.svg"})`
      openCards.splice(1,1)
    },1000) 
  }
  }
  isThereMovesLeft()
  }


function matchTrueMessage(){
  if (openCards.length === 2 && cardMatch === true ) {
    messageEl.textContent =  `Meow-grats, Pawfect Match!`
    gameAudio.playIsPurring()
}
}

function matchFalseMessage(){
  if (openCards.length === 2 && cardMatch === false ) {
    messageEl.textContent = `No purr-fect match, hooman! Retry, meow!`
    gameAudio.playIsHissing()
}
}

function nextCardMessage(){
if (openCards.length === 1) {
    messageEl.textContent = `Pounce on Your Next Card, Hooman, Now!`
}
}


function checkMatchesMade(){
  if (matchesMade === expectedMatches) {
    matchesComplete = true
    isWinnerTrue()
  } else {
    return
  }
}

function isThereTimeLeft(){
  if(timeLeft < 0)
  isTimeLeft = false
}

function isThereMovesLeft(){
messageEl.textContent = moves === 0 ? `Meow-nomore-moves! Try again!"` : messageEl.textContent;
}      

function isWinnerTrue(){

  if (matchesComplete === true) {
    if (moves !== 0 && isTimeLeft !== false) {
    winner = true
    messageEl.textContent = `Pawsitively Purrfect! You're a Winner!`
    isTimeLeft = false
    gameAudio.playWinSound()
    confetti.start(1200)
    gameOverMessage()
    }
  } else {
      isLooserTrue()
  }
  }

  function isLooserTrue(){

    if (moves === 0 || isTimeLeft === false) {
      winner = false
      gameOverMessage()
      }
    }
  

function gameOverMessage(){

  `${winner === false || winner === true ? 
    (timeRemaining.textContent = '🐾', movesLeft.textContent = '🐾', matchesObtained.textContent = '🐾') : (timeRemaining.textContent + movesLeft.textContent + matchesObtained.textContent)}`

}

function endPlay() {
  if (gameOver) {
    return
  }
  isGameOver()
}

function isGameOver() {

  if (winner === true || moves === 0 || isTimeLeft === false) {
    gameOver = true
  }
}

