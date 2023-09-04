//// Add html buttons one for each dificulty level
//// Add a reset button to the html file
//// Add a container element for cards to append to

// console.log('minina check')

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

easyGame.addEventListener('click', initEasy)

// mediumGame.addEventListener('click', initMedium)

// hardGame.addEventListener('click', initHard)

// timerCountdown.addEventListener('',)



cardEls.forEach((cardEl, idx) => {
  cardEl.addEventListener('click', () => flipCard(idx));
})

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
      for (let i=0; i <2; i++) {
        const newCard = document.createElement('div')
        newCard.className = `card back-minina large shadow outline`
        const cardId = `minina-card-${idx * 2+i}`
        newCard.id = cardId
        newCard.addEventListener('click', () => flipCard(idx));
        cardContainer.appendChild(newCard)
      }
      

    })
  }
  // // quotes.push(newQuote)
  // // adjustFavicon(newQuote.isTaylor)

  // }

function shuffleCards(){
}
// function updateBoard(init) {
  
// }


function updateMessage() {

}



function flipCard(cardIdx) {
  const cardFront = document.getElementById(`minina-card-${cardIdx}`);

  if (cardFront) {
    cardFront.classList.remove('back-minina');
    cardFront.style.transform = 'rotateY(180deg)'
    cardFront.style.backgroundImage = `url(${mininaCards[cardIdx % mininaCards.length].image})`;
  }
}




  //     // add rules so that previous card is removed before next click, otherwise more than one card will be flipped on next click
      

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