// Create a function for win or loose
// If win = “ You win” 
// Else
// If loose = “what a bummer”
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

// You can call this function by passing in two arguments, the first being a boolean representing whether the player won or not, and the second being a boolean representing whether the player lost or not. For example:
// console.log(result(true, false)); // Outputs: "You win"
// console.log(result(false, true)); // Outputs: "You loose"

//Win Logic
const winChecker = () => {
}

//Loop through all win patterns
// for (let i of winningPattern) {
//     let [element1, element2, element3] = [
//       btnRef[i[0]].innerText,
//       btnRef[i[1]].innerText,
//       btnRef[i[2]].innerText,
//     ]};

// Work out winning patterns:
// Winning Pattern Array
// think about how to utilize this with the code further below 
// array that will push in certain number, then it needs to measure the input numbers 
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

// console.log(element1);
// console.log(element2);
// console.log(element3);
// this variable has three elements inside them
// each element is the pressButton with inside the square braces is winningPattern[i][0]
// so they are taking turns
// followed by an if statement,  

if (element1 === element2 && element2 === element3 && element1 !== '' ) {
  if (element1 === 'X') {
  winner = true;
  console.log("player1 wins");
  } else {
  winner = true;
  console.log("player2 wins");
  }
  }
}};  

if (winningPattern)
 
// Change the innerHTML of the box based on the turn variable
for (let i = 0; i < pressButton.length; i++) {
  pressButton[i].addEventListener("click", function() {
    if (pressButton[i].innerText === "" && winner === false ) { 
      console.log(winner);
      // neeed to create a variable that will recognise the winner, the winner var can be global
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
// 


// -- Event Listener --
// resetButton.addEventListener( 'click', startGame );

// -- Start Game --
// startGame();

// create variable as to who's turn it is
// inside the for loop, I am going to change the variable 
// this is to show for the 9 options there are to click on each button
// for(let i = 0; i < 9; i++);

// pressButton.addEventListener("click", function()  {
// pressButton.innerText = 'X';
// });
// Create a button for a new game -> this function works once you have finished the game. 
// let newgameBtn = document.getElementById("new-game");
// //New Game
// newgameBtn.addEventListener("click", function()  {
// count = 0;
// enableButtons();
// });
// restartBtn.addEventListener("click", function()  {
//   count = 0;
//   enableButtons();
// });

// need to assign button to both X and to Y 

// Worry about CSS at the end