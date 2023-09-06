console.log('minina check')

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
let winner, countdown, moves, cardMatch, cardsToPlayGameWith, matchesMade, firstChoice

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
  const timeLeft = document.getElementById('timer')
  const movesLeft = document.getElementById('moves')
  const matchesObtained = document.getElementById('match')

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

  initEasy()
  // initMedium()
  // initHard()

function initEasy() {
    
    
  // timerCountdown =
  matchesMade = 0 
  cardMatch = false
  winner = false
  moves = 32 
  firstChoice = true
  render()
}
  

function generateDeck() {
  let cardsOut = []
    
  mininaCards.forEach((card) => {
    cardsOut.push(card)
    cardsOut.push(card)
  })
  cardsToPlayGameWith = cardsOut
  // is there where i invoke the shuffle function?
  console.log(cardsToPlayGameWith)
  console.log(firstChoice)
}

function render() {
  generateDeck()
  cardsDisplayDesign()
  // updateBoard()
  updateMessage()
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

function shuffleCards(){
  return cardsToPlayGameWith[Math.floor(Math.random() * cardsToPlayGameWith.length)]
}

function flipCard(evt) {
 //   console.log(evt.target.id)
  console.log(firstChoice)
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
  
  console.log(fullCardInfo)
  openCards.push(fullCardInfo)
   // console.log(openCards)      
  firstChoice = false
  checkforMatch()
    
}

function checkforMatch() {
console.log(openCards)
  if (openCards.length > 2) {
    return 
} else if (openCards.length === 2) {
  openCards[0].url === openCards[1].url ? cardMatch = true : cardMatch = false
console.log(cardMatch)

  if (cardMatch) {
    matchesMade += 1
    matchesObtained.textContent = matchesMade
    completedMatches = openCards.slice(0,2) // use slice to move matched cards from one array into another
    openCards.splice(0,2) // use splice to remove all matched cards 
    console.log(completedMatches)
    console.log(openCards)
  } else {
    moves -= 1
    // might need to parseInt this
    movesLeft.textContent = moves
    console.log(openCards)
    
    setTimeout(function() {
      openCards[1].dom.style.transform = 'rotateY(-180deg)'
      openCards[1].dom.style.backgroundImage =`url(${"../images/backs/minina.svg"})`
      openCards.splice(1,1)
    },4000) 
    
    console.log(openCards)
  
    // cardToRemove.push(openCards[1])
    //remove the background here instead of pushing the cards
    //openCards.pop()
    
    // console.log(cardToRemove)
    // console.log(openCards)
  }
  console.log(`matches made ${matchesMade} and moves left ${moves}` )
  }
  // unmatchedCardFlip()
}


// if cards are a match - I need to move those two cards into another array called completedMatches
//console.log(openCards)

//console.log(openCards)
  


  // create a function checkCard 
    // will check `if` opened card is a match
    // if open card isnt a match it will flip the card over and remove a move
console.log(cardToRemove)
    
// function unmatchedCardFlip() {
//       //goals of this function
//       // houses cardsToRemove
//       //// step 1: set a delay through function setTimeOut
//       //// step 2: turn card back around 'transform dom element'
//       //// step 3: change background to back of card
//         // questions - do I need to remove the current background first?
//       // step 4: remove the class of the one card in cardToRemove so it doesn't cause issues with future cards - do I need to do this? bc it doesn't cause issues with future cards?
//       // step 5: empty out the cardsToRemove array
//       //issue appears when I add code after this function
//       //function must live inside function to work
//   setTimeout(function() {
//     cardToRemove[0].dom.style.transform = 'rotateY(-180deg)'
//     cardToRemove[0].dom.style.backgroundImage = `url(${"../images/backs/minina.svg"})`
//     },4000) 
  
//     // console.log(cardToRemove)
// }


function updateMessage(){
  if (firstChoice === true && openCards.length === 0) {
     // should render intial state h2 message from html
     // can i add a time out function?
      setTimeout(function() {
        messageEl.textContent = 'Select Your First Card'
      },3000) 
      console.log(openCards)
  } else if (firstChoice === false && openCards.length === 1) {
    messageEl.textContent = 'Select Your Next Card'
  }
  {
  
  }
  
  // if (openCards.length === 1){
  //   messageEl.textContent = 'Select Your Next Card'
  //   console.log(openCards)
  //   //Object.keys(openCards).length
  //   // not displaying
  //   // why is my h2 not changing when there is one card in the object openCards


  // } else if (openCards.length === 2) {
  //   if (cardMatch === true) {
  //     messageEl.textContent = "Congrats You've got a match!"
  //   } else if(cardMatch === false) {
  //     messageEl.textContent = "Nice try, not a match - try again!!"
  //   }
  // }
  

  

  }
// if open cards has only 1 card message changes to make your next selection
    // messageEl.textContent = `Make your next selection!`
  
// if opencards has 2 items and cardMatch is false   change message to say 'oh no, you just missed it, try again, you lost a move!'

// if open cards has 2 items but cardMatch is true change message to say woohoo you got a match!

// messageEl.textContent = `It's ${cardMatch === true ? 'Nice work, you got a match!':'oh no, you just missed it, try again!'}`

// function timerCountdown(){
// }

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