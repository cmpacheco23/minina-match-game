//// Add html buttons one for each dificulty level
//// Add a reset button to the html file
//// Add a container element for cards to append to

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
  
  // function generateCards() {
  //   return mininaCards[Math.floor(Math.random() * mininaCards.length)]
  // }
/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

//// Add variables that will determine the state of the game: board, winner, countdown, moves, matchedCard, cardToRemove, openCards

let cards = []
let winner, countdown, moves, cardMatch, cardsToPlayGameWith, matchesMade, firstChoice

let openCards = []
let cardToRemove = []
// set difficulty to a number and assign it to a constant for each level

/*------------------------ Cached Element References ------------------------*/


//// Add cache reference for dificulty buttons
//// Add cache reference for reset button
//// Add cache reference for container element
//// Add a constant variable cardsEls that will store the cards needed, their number will be adjusted at each level
//// Add cache reference for cardsEls

  const easyGame = document.getElementById('easy-game')
  const mediumGame = document.getElementById('medium-game')
  const hardGame = document.getElementById('hard-game')
  const resetBtnEl = document.getElementById('reset-game')
  const cardEls = document.querySelectorAll('#minina-card')
  const cardContainer = document.querySelector('.card-container')
  const messageEl = document.getElementById('new-message')
  
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
    render()
  }
  

  function generateDeck() {
    let cardsOut = []
    
    mininaCards.forEach((card) => {
      cardsOut.push(card)
      cardsOut.push(card)
    })
    cardsToPlayGameWith = cardsOut
    console.log(cardsToPlayGameWith)
  }

  function render() {
    generateDeck()
    cardsDisplayDesign()
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
    firstChoice = true
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
   // console.log(openCards)      
    firstChoice = false
    checkforMatch()
    
    }

// to do list
  // have the first card not flip over
  // have any cardFront after the first card check for match


  //     // add rules so that previous card is removed before next click, otherwise more than one card will be flipped on next click
      

function checkforMatch() {

  if (openCards.length > 2) {
    return
} else if (openCards.length === 2) {
  openCards[0].url === openCards[1].url ? cardMatch = true : cardMatch = false
console.log(cardMatch)
console.log(openCards)
  if (cardMatch) {
    matchesMade += 1
    console.log(openCards)
  } else {
    moves -= 1
    cardToRemove.push(openCards[1])
    openCards.pop()
    
    // console.log(cardToRemove)
    // console.log(openCards)
  }
  console.log(`matches made ${matchesMade} and moves left ${moves}` )
  }
  unmatchedCardFlip()
}

// if cards are a match - I need to move those two cards into another array called completedMatches
//console.log(openCards)

//console.log(openCards)
  


  // create a function checkCard 
    // will check `if` opened card is a match
    // if open card isnt a match it will flip the card over and remove a move
    function unmatchedCardFlip() {
      //goals of this function
      // houses cardsToRemove
      // step 1: set a delay through function setTimeOut
      // step 2: turn card back around 'transform dom element'
      // step 3: change background to back of card
        // questions - do I need to remove the current background first?
      // step 4: remove the class of the one card in cardToRemove so it doesn't cause issues with future cards - do I need to do this? bc it doesn't cause issues with future cards?
      // step 5: empty out the cardsToRemove array
      
      setTimeout(function() {
        //issue went away and is no longer rendering
        cardToRemove[0].dom.style.transform = 'rotateY(-180deg)'
        cardToRemove[0].dom.style.backgroundImage = `url(${"../images/backs/minina.svg"})`
      },4000) 
      
      // console.log(cardToRemove)

    }
    
    function removeUnmatchedCard(evt) {
      // remove the class name 
      // remove card from card to remove --> cardToRemove.pop()
    }

  // console.log(cardToRemove[0].dom)
    // transform cards rotate 180Y
    // use pop method to clear cardsToRemove array


function updateMessage(){

  console.log('messageworks')

  if (openCards) {

  }
// if open cards has only 1 card message changes to make your next selection
    // messageEl.textContent = `Make your next selection!`
  }
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