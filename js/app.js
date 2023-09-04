//// Add html buttons one for each dificulty level
//// Add a reset button to the html file
//// Add a container element for cards to append to

// console.log('minina check')

// import { generateCards } from "../js/data.js"
const mininaCards = [ 
  {imageUrl: "../images/fronts/minina1.svg",
  cardName: 'card1' },
  {imageUrl: "../images/fronts/minina2.svg",
  cardName: 'card2' },
  {imageUrl: "../images/fronts/minina3.svg",
  cardName: 'card3' },
  {imageUrl: "../images/fronts/minina4.svg",
  cardName: 'card4' },
  {imageUrl: "../images/fronts/minina5.svg",
  cardName: 'card5' },
  {imageUrl: "../images/fronts/minina6.svg",
  cardName: 'card6' },
  {imageUrl: "../images/fronts/minina7.svg",
  cardName: 'card7' },
  {imageUrl: "../images/fronts/minina8.svg",
  cardName: 'card8' }
  ]
  
  function generateCards() {
    return mininaCards[Math.floor(Math.random() * mininaCards.length)]
  }
/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

//// Add variables that will determine the state of the game: board, winner, countdown, moves, matchedCard, cardToRemove, openCards

let cards = []
let winner, countdown, moves, cardMatch, cardToRemove, openCards


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

  // cardEls.forEach(cardEl => {
  //   cardEl.addEventListener('click', console.log('yes'))
  // });

  //console.log(cardEl)
// Add event listener for difficulty button

//// Add event listener for reset button
//// Add event listener for card selection
//// Add event listener for timer

easyGame.addEventListener('click',() => console.log('easy game button clicked') )

// mediumGame.addEventListener('click', initMedium)

// hardGame.addEventListener('click', initHard)

// timerCountdown.addEventListener('',)


for (let cardEl of cardEls) {
  cardEl.addEventListener('click', handleClick)
}

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
    

   // timerCountdown =
    cardMatch = false
    winner = false
    moves = 0
    render()
    shuffleCards() // create shufflecard function
  
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

  function render() {
    cardContainer.innerHTML = ''
    mininaCards.forEach((card, idx) => {
      loadCard(card, idx)
    })

  function loadCard(card, idx) {
    let newCard = document.createElement('div')
    newCard.className = ``
    newCard.innerHTML = 
    ' <div id="minina-card" class="card back-minina large shadow outline"></div>'
    cardContainer.appendChild(newCard)
  }

  // quotes.push(newQuote)
  // adjustFavicon(newQuote.isTaylor)

  }

function shuffleCards(){
}
// function updateBoard(init) {
  
// }


function updateMessage() {

}
  // create a function updateBoard
    // invoke cardPicked function
    // invoke matched function
    // invoked unmatched function
  // create function called updateMessage
  // create timer function - will watch the video
  // Add a favicon to the site


function handleClick() {
  flipCard()


  const clickedCard = generateCards()
  mininaCards.push(clickedCard)
      // add rules so that previous card is removed before next click, otherwise more than one card will be flipped on next click
      
  console.log('card clicked')
  // flipCard()
  // checkCard()



  // console.log('click works')
  // create a function called handleClick with evt parameter
    // update cardsEl so handleClick is invoked when card is clicked

}

function flipCard(){
  //create element to get card to flip and generate 
  // let selectedCard = document.querySelector('.card-container')
  // cardEl.setAttribute {
    
  //   cardEl.innerHTML = 
  //   ' <div class="card front-minina large shadow"></div>'
  //   cardContainer.appendChild(cardEl))
    // newCard.className = ``
    // selectedCard.innerHTML = 
    // ' <div class="card front-minina large shadow"></div>'
    // cardContainer.appendChild(newCard)
  // const clickedCard = generateCards()
  // mininaCards.push(clickedCard)
  //     // add rules so that previous card is removed before next click, otherwise more than one card will be flipped on next click
      
}
function checkCard() {

  // cardEls.forEach((cardVal, idx){
  //   if(cardVal[idx] === idx[0] || idx[1]) {
  //     cardMatch = true
  //   } else {
  //     return unmatched()
  //   }
  // })
    
}
  


  // create a function checkCard 
    // will check `if` opened card is a match
    // if open card isnt a match it will flip the card over and remove a move


function unmatched() {
  // create function unmatched to handle cards that don't match
  // card needs to flip back over
  // remove a move
  // render a message that says oh no that's not it

}

function timerCountdown(){

}
// Add event listener to the board
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
