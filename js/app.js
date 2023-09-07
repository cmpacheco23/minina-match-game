
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
  {image: "../images/fronts/minina8.svg"}
  ]
  

/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/


let cards = []
let winner, moves, cardsToPlayGameWith,firstChoice

let matchesComplete, matchesMade, cardMatch, expectedMatches

let isTimeLeft, timeLeft 

let openCards = []
let cardToRemove = []
let completedMatches = []

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

// mediumGame.addEventListener('click', initMedium)
// hardGame.addEventListener('click', initHard)
// timerCountdown.addEventListener('',)

resetBtnEl.addEventListener('click', initEasy)

/*-------------------------------- Functions --------------------------------*/

// Within each init level:
// Create init function for each level of the game
  // set board variable to an array containing the x (number will vary by level) to nulls to represent unflipped squares - ben sugests to do this as a number
  // invoke / call shuffleCards function
  // set winner to false
  // set timer to moves to number of total moves allowed by level
  // set cardMatch to false
  // call render function at the end of each init function

  // start game function that holds an init function that shows all the buttons
  initEasy()
  // initMedium()
  // initHard()

function initEasy() {
    
    
  // timerCountdown =
  matchesMade = 0 
  cardMatch = false
  winner = undefined
  movesLeft.textContent = `${moves = 4}`
  firstChoice = true
  matchesComplete = false
  timeLeft = 20
  expectedMatches = 8
  render()
  isTimeLeft = true
  
}


let timer = setInterval(function() {
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
}, 1000)

function generateDeck() {
  let cardsOut = []
    
  mininaCards.forEach((card) => {
    cardsOut.push(card)
    cardsOut.push(card)
  })
  cardsToPlayGameWith = cardsOut
  // is there where i invoke the shuffle function?
  //console.log(cardsToPlayGameWith)
}

function render() {
  generateDeck()
  cardsDisplayDesign()
  setTimeout(function() {
    messageEl.textContent = 'Select Your First Card'
  },3000) 
  // updateBoard()
  }
  
function cardsDisplayDesign(){
 // console.log('cardsdisplay')
  cardContainer.innerHTML = ''
  cardsToPlayGameWith.forEach((card, idx) => {
      const newCard = document.createElement('div')
      newCard.className = `card back-minina large shadow outline`
      newCard.id = `minina-card-${idx}`
      newCard.addEventListener('click', flipCard)
      cardContainer.appendChild(newCard)
    })
}

function shuffleMininaArray(){
  return cardsToPlayGameWith[Math.floor(Math.random() * cardsToPlayGameWith.length)]
}

function shufflePlayingCards(){
for (let i = mininaCards.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}
}

// function shuffleCards(){
//   return mininaCards[Math.floor(Math.random() * mininaCards.length)]
// }

function flipCard(evt) {
  
  isTimeLeft = true
  //add a condition that starts timer or call timer here!
 //   console.log(evt.target.id)
  // console.log(firstChoice)
    const cardFront = document.getElementById(`${(evt.target.id)}`)
    
    //console.log(cardFront)
    //console.log(cardFront)
    cardFront.classList.remove(`back-minina`)
    cardFront.style.transform = 'rotateY(180deg)'
    
    // console.log(cardsToPlayGameWith)
    // console.log(evt.target.id)
    
    const id = parseInt(evt.target.id.split('-')[2])
    
    const idMod = id % cardsToPlayGameWith.length
    
    const cardUrl = cardsToPlayGameWith[idMod].image
    cardFront.style.backgroundImage = `url(${cardUrl})`
    
    //console.log(cardFront)
    
    console.log(cardUrl)
    const fullCardInfo = {
      dom:cardFront, url:cardUrl
    }
  
  openCards.push(fullCardInfo)   
  firstChoice = false
  // isTimeLeft is registering as true instead of false
  console.log(isTimeLeft)
  isWinnerTrue()
  checkforMatch()
}

function checkforMatch() {
  if (openCards.length === 1) {
    nextCardMessage()
} else if (openCards.length === 2) {
  openCards[0].url === openCards[1].url ? cardMatch = true : cardMatch = false
  matchTrueMessage()
// console.log(cardMatch)

  if (cardMatch) {
    console.log(cardMatch)
    matchesMade += 1
    matchesObtained.textContent = matchesMade
    completedMatches = openCards.slice(0,2) // use slice to move matched cards from one array into another
    openCards.splice(0,2) 
    checkMatchesMade()
    console.log(matchesComplete)
  } else {
    moves -= 1
    matchFalseMessage()
    // might need to parseInt this
    movesLeft.textContent = moves
    // console.log(openCards)
    setTimeout(function() {
      openCards[1].dom.style.transform = 'rotateY(-180deg)'
      openCards[1].dom.style.backgroundImage =`url(${"../images/backs/minina.svg"})`
      openCards.splice(1,1)
    },3000) 
    
    // console.log(openCards)
  }
  isThereMovesLeft()
  console.log(`matches made ${matchesMade} and moves left ${moves}` )
  console.log(isTimeLeft)
  }
  
} 

function matchTrueMessage(){
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
  // invoke in check for match function
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
    gameOver()
    // call a game is over function
    }
  } else {
      isLooserTrue()
  }
  }

  function isLooserTrue(){
    console.log(moves)

    if (moves === 0 || isTimeLeft === false) {
      winner = false
      gameOver()
      }
    }
  

function gameOver(){

  `${winner === false || winner === true ? 
    (timeRemaining.textContent = '🐾', movesLeft.textContent = '🐾', matchesObtained.textContent = '🐾') : (timeRemaining.textContent + movesLeft.textContent + matchesObtained.textContent)}`
  
  // messageEl.textContent = moves === 0 ? `You're out of moves, better luck next time!` : messageEl.textContent;

}
// create a game over function

// add light mode dark mode
// Write and export a function to access picture data
// Import the function that will allow us access to the picture data (this lives under constants)
// Test the function to make sure its working
// Tweak event listener so that picture data is stored in a variable
// Create a card so each image will have a card assocaited with it
// Go back and add sound effects when: 
  // game starts
  // card is flipped
  // timer runs out (player loses)
  // player is out moves (player loses)
  // player wins
// Go back and add confetti when a player wins a level
// Also find a way to add fun animations that go along with the cat theme