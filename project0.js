// Create a function for win or loose
function result(win, loose) {
  if (win) {
  return "You win";
  } else if (loose) {
  return "You loose";
  }
  }
  
//Player 'X' plays first
let xTurn = true;
let count = 0;
let btnRef = document.querySelectorAll("#button-option");
let popupRef = document.querySelector(".popup");

//Win Logic
const winChecker = () => {
}

// Loop through all win patterns
// Work out winning patterns
// Winning Pattern Array
// array that will push in certain number
// then it needs to measure the input numbers 
// and the winning numbers 
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

let pressButton = document.getElementsByClassName("button-option");

// create variable as to who's turn it is
let player1 = true;
let winner = false;
function checkWin() {
  for (let i = 0; i < winningPattern.length; i++) {

// winningPattern[i]
// winningPattern[i][0]
// we are creating a variable which is an array
let [element1, element2, element3] = [
  pressButton[winningPattern[i][0]].innerText,
  pressButton[winningPattern[i][1]].innerText,
  pressButton[winningPattern[i][2]].innerText
]

// this variable has three elements inside them
// each element is the pressButton with inside the square braces is winningPattern[i][0]
// so they are taking turns
// followed by an if statement  
if (element1 === element2 && element2 === element3 && element1 !== '' ) {
  if (element1 === 'X') {
  winner = true;
  content.innerText = ("X wins");
  } else {
  winner = true;
  content.innerText = ("O wins");
  }
  }
}};  

if (winningPattern)
 
// Change the innerText of the box based on the turn variable
for (let i = 0; i < pressButton.length; i++) {
  pressButton[i].addEventListener("click", function() {
    if (pressButton[i].innerText === "" && winner === false ) { 
      console.log(winner);
      // need to create a variable that will recognise the winner, the winner var can be global
      if (player1) {
        pressButton[i].innerText = 'X';
        checkWin() ;
        player1 = false;
      } else {
        pressButton[i].innerText = 'O';
        checkWin() ;
        player1 = true;
      }
    }
  });
}


// innerText on to the page not just from console 
const winningMessage = document.querySelector("#content");

// select the Restart button element
const restartButton = document.querySelector('.Restart'); 

restartButton.addEventListener("click", () => {
  function restart() {
    // remove all X and O from the board
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        board[i][j] = EMPTY_CELL;
      }
    }
    
    // reset the game state
    currentPlayer = PLAYER_X; // start with X
    gameEnded = false;
    
    // update the UI
    updateBoard();
  }
  restartButton.addEventListener("click", function()  {
  count = 0;
});

});