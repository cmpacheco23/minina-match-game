
import * as gameAudio from './audio.js'

// import { generateCards } from "../js/data.js"
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
  {image: "../images/fronts/minina10.svg"},
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


// set difficulty to a number and assign it to a constant for each level

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

  /*----------------------------- Event Listeners -----------------------------*/


easyGame.addEventListener('click', initEasy)

mediumGame.addEventListener('click', initMedium)
hardGame.addEventListener('click', initHard)
resetBtnEl.addEventListener('click', initEasy)

/*-------------------------------- Functions --------------------------------*/

  initEasy()
  initMedium()
  initHard()

function initEasy() {

  matchesMade = 0 
  cardMatch = false
  winner = undefined
  movesLeft.textContent = `${moves = 1}`
  //use 4 moves when testing
  firstChoice = true
  matchesComplete = false
  timeLeft = 10
  expectedMatches = 6
  cardCount = 6
  render()
  isTimeLeft = true
  
}

function initMedium() {

  matchesMade = 0 
  cardMatch = false
  winner = undefined
  movesLeft.textContent = `${moves = 40}`
  firstChoice = true
  matchesComplete = false
  timeLeft = 20
  expectedMatches = 36
  cardCount = 18
  render()
  isTimeLeft = true
}

function initHard() {

  matchesMade = 0 
  cardMatch = false
  winner = undefined
  movesLeft.textContent = `${moves = 150}`
  firstChoice = true
  matchesComplete = false
  timeLeft = 20
  expectedMatches = 30
  cardCount = 30
  render()
  isTimeLeft = true
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
    messageEl.textContent = 'Select Your First Card'
  },3000) 
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

  console.log(cardUrl)
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
          messageEl.textContent = 'You ran out of time, better luck next time!'
          gameAudio.playTimerSound()}
    }, 1000)}
    
  firstChoice = false
  console.log(isTimeLeft)
  isWinnerTrue()
  checkforMatch()
  console.log(cardMatch)
}


function checkforMatch() {
  if (openCards.length === 1) {
    nextCardMessage()
} else if (openCards.length === 2) {
  openCards[0].url === openCards[1].url ? cardMatch = true : cardMatch = false
  console.log(cardMatch)


  if (cardMatch) {
    console.log(cardMatch)
    matchesMade += 1
    matchesObtained.textContent = matchesMade
    matchTrueMessage()
    completedMatches = openCards.slice(0,2) 
    openCards.splice(0,2) 
    checkMatchesMade()
    console.log(matchesComplete)
    console.log(cardMatch)
  } else {
    moves -= 1
    matchFalseMessage()

    movesLeft.textContent = moves
    setTimeout(function() {
      openCards[1].dom.style.transform = 'rotateY(-180deg)'
      openCards[1].dom.style.backgroundImage =`url(${"../images/backs/minina.svg"})`
      openCards.splice(1,1)
    },3000) 
    

  }
  isThereMovesLeft()
  console.log(`matches made ${matchesMade} and moves left ${moves}` )
  }
  
} 

function matchTrueMessage(){
  console.log(cardMatch)
  if (openCards.length === 2 && cardMatch === true ) {
    messageEl.textContent =  "Congrat's You've Got a Match!"
    gameAudio.playIsPurring()
}
}

function matchFalseMessage(){
  if (openCards.length === 2 && cardMatch === false ) {
    messageEl.textContent = 'Not a match, try again!'
    gameAudio.playIsHissing()
}
}

function nextCardMessage(){
if (openCards.length === 1) {
    messageEl.textContent = 'Select Your Next Card'
}
}

function noCardsSelecMessage(){

//isnt working, overrides the congrats function message
  if (cardMatch === true && openCards.length === 0 && firstChoice === false) {
    messageEl.textContent = 'Select Your Next Card'
    console.log(openCards)
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
messageEl.textContent = moves === 0 ? `You're out of moves, better luck next time!` : messageEl.textContent;
}      

function isWinnerTrue(){

  if (matchesComplete === true) {
    if (moves !== 0 && isTimeLeft !== false) {
    winner = true
    messageEl.textContent = 'Congrats You Won!'
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
    console.log(moves)

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
