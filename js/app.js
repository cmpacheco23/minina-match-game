//// Add html buttons one for each dificulty level
//// Add a reset button to the html file

console.log('minina check')
/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/



  /*------------------------ Cached Element References ------------------------*/


  /*----------------------------- Event Listeners -----------------------------*/


  /*-------------------------------- Functions --------------------------------*/



// Add a container element for cards to append to
// Add cache reference for dificulty buttons
// Add cache reference for reset button
// Add cache reference for container element
// Add variables that will determine the state of the game: board, winner, countdown, moves, matchedCard, cardToRemove, openCards
// Add a constant variable cardsEls that will store the cards needed, their number will be adjusted at each level
// Add cache reference for cardsEls
// Add event listener for cardsEl, so only one card flips at a time when clicked: use a for of loop
// Add event listener for difficulty button
// Add event listener for reset button
// Add event listener for card selection
// Add event listener for timer
// Write and export a function to access picture data
// Import the function that will allow us access to the picture data (this lives under constants)
// Test the function to make sure its working
// Tweak event listener so that picture data is stored in a variable
// Create a card so each image will have a card assocaited with it
// Create a render function with a parameter cardpicked
  // add rules so that previous card is removed before next click, otherwise more than one card will be flipped on next click
// Create init function for each level of the game
// Within each init level:
  // set board variable to an array containing the x (number will vary by level) to nulls to represent unflipped squares
  // invoke / call shuffleCards function
  // set winner to false
  // set timer to moves to number of total moves allowed by level
  // set cardMatch to false
  // call render function at the end of each init function
  // Invoke updateBoard & updateMessage functions within render function
// create a shuffleCards function so the cards are random each time the game starts
// create a function updateBoard
  // invoke cardPicked function
  // invoke matched function
  // invoked unmatched function
// create function called updateMessage
// create timer function - will watch the video
// Add a favicon to the site
// create a function called handleClick with evt parameter
  // update cardsEl so handleClick is invoked when card is clicked
// create a function checkCard 
  // will check `if` opened card is a match
  // if open card isnt a match it will flip the card over and remove a move
// create function unmatched to handle cards that don't match
// Add event listener to the board
// add light mode dark mode
// Go back and add sound effects when: 
  // game starts
  // card is flipped
  // timer runs out (player loses)
  // player is out moves (player loses)
  // player wins
// Go back and add confetti when a player wins a level
// Also find a way to add fun animations that go along with the cat theme
