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
console.log(result(true, false)); // Outputs: "You win"
console.log(result(false, true)); // Outputs: "You loose"

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
for (let i = 0; i < pressButton.length; i++) {
  pressButton[i].addEventListener("click", function() {
  pressButton[i].innerText = 'X';  
});
}  

// create variable as to who's turn it is
// inside the for loop, I am going to change the variable 
// so they are taking turns
// followed by an if statement, 
// changing the inner statement of the box to either X or O 


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