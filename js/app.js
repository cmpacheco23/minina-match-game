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
let winner, countdown, moves, cardMatch, cardsToPlayGameWith, matchesMade

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
  //console.log('easy mode selected')

  // const mediumGame = document.getElementById('medium-game')
  // //console.log('medium mode selected')
  
  // const hardGame = document.getElementById('hard-game')
  // //console.log('hard mode selected')
  const resetBtnEl = document.getElementById('reset-game')
  //console.log('you reset the game')
  
  const cardEls = document.querySelectorAll('#minina-card')
  // const cardEls = document.getElementById('minina-card')
  //console.log('card container activated')

  const cardContainer = document.querySelector('.card-container')
  
  /*----------------------------- Event Listeners -----------------------------*/

  //// Add event listener for cardsEl, so only one card flips at a time when clicked: use a for of loop


//// Add event listener for reset button
//// Add event listener for card selection
//// Add event listener for timer

easyGame.addEventListener('click', initEasy)

// mediumGame.addEventListener('click', initMedium)

// hardGame.addEventListener('click', initHard)

// timerCountdown.addEventListener('',)

// cardEls.forEach((cardEl) => {
//   cardEl.addEventListener('click', flipCard());
// })

resetBtnEl.addEventListener('click', initEasy)
//make this singular
/*-------------------------------- Functions --------------------------------*/

// Within each init level:
// Create init function for each level of the game
  // set board variable to an array containing the x (number will vary by level) to nulls to represent unflipped squares
  // invoke / call shuffleCards function
  // set winner to false
  // set timer to moves to number of total moves allowed by level
  // set cardMatch to false
  // call render function at the end of each init function

  initEasy()
  // initMedium()
  // initHard()

  function initEasy() {
    
    render()

   // timerCountdown =
    matchesMade = 0 
    cardMatch = false
    winner = false
    moves = 32 // create shufflecard function
  }
  
  // function initMedium(){
  //   cards = 30
  //   timerCountdown =
  //   cardMatch = false
  //   winner = false
  //   moves = 0
  //   render()
  //   shuffleCards() // create shufflecard function
  // }
  
  // function initHard(){
  //   cards = 50
  //   timerCountdown =
  //   cardMatch = false
  //   winner = false
  //   moves = 0
  //   render()
  //   shuffleCards() // create shufflecard function
  // }



  function generateDeck() {
 //   console.log('deck')
    let cardsOut = []
    
    mininaCards.forEach((card) => {
      cardsOut.push(card)
      cardsOut.push(card)
      //console.log(cardsOut)
    })
    cardsToPlayGameWith = cardsOut
    console.log(cardsToPlayGameWith)
  }

  function render() {
    generateDeck()
    cardsDisplayDesign()
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

  // }

function shuffleCards(){
  return cardsToPlayGameWith[Math.floor(Math.random() * cardsToPlayGameWith.length)]
}

//console.log(shuffleCards())
// function updateBoard(init) {
  
// }


function updateMessage() {

}


  function flipCard(evt) {
 //   console.log(evt.target.id)
  
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
    openCards.push(cardUrl)
   // console.log(openCards)      
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
  openCards[0] === openCards[1] ? cardMatch = true : cardMatch = false
console.log(cardMatch)
console.log(openCards)
  if (cardMatch) {
    matchesMade += 1
    console.log(openCards)
  } else {
    moves -= 1
    cardToRemove.push(openCards[1])
    openCards.pop()
    
    console.log(cardToRemove)
    console.log(openCards)
  }
  console.log(`matches made ${matchesMade} and moves left ${moves}` )
  }
}
//console.log(openCards)

//console.log(openCards)
  


  // create a function checkCard 
    // will check `if` opened card is a match
    // if open card isnt a match it will flip the card over and remove a move


function unmatched() {

  // console.log(cardToRemove)
  // console.log(openCards)
  // create function unmatched to handle cards that don't match
  // card needs to flip back over
  // remove a move
  // render a message that says oh no that's not it

}

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