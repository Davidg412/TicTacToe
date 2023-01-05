//Game Board
const gameBoard = (() => {
  //Array for the board
  let myBoard = [];
  let emptySquare = "";
  let allSquares = [];
  let index = 0;
  const gameContainer = document.querySelector("#game-container");
  //Loop to create 3x3 gameBoard
  for (let i = 0; i < 9; i++) {
    const gameSquare = document.createElement("div");
    gameSquare.classList.add("game-square");
    gameSquare.dataset.linkedArray = index;
    gameContainer.appendChild(gameSquare);
    //Creates an empty space in the array
    myBoard.push(emptySquare);
    //Places the div (square) element into the array
    allSquares.push(gameSquare);
    index++;
  }

  return { myBoard, allSquares };
})();

//X or O letter player selection
const playerSelection = (() => {
  //Header for buttons
  const playerChoices = document.querySelector(".player-choices");
  const selectionMessage = document.createElement("h2");
  selectionMessage.classList.add("selection-message");
  selectionMessage.textContent = "Choose your weapon:";
  playerChoices.appendChild(selectionMessage);

  //Button Creation
  //X Button
  const xButton = document.createElement("button");
  //setAttribute sets the value of the button to in our JS
  xButton.setAttribute("value", "x");
  xButton.classList.add("x-button");
  xButton.textContent = "X";
  playerChoices.appendChild(xButton);
  //Y Button
  const oButton = document.createElement("button");
  oButton.setAttribute("value", "o");
  oButton.classList.add("o-button");
  oButton.textContent = "O";
  playerChoices.appendChild(oButton);

  //Loop to add onclick events to both X and Y buttons
  let btns = document.querySelectorAll("button");
  btns.forEach(function (i) {
    i.addEventListener("click", () => {
      if (i == xButton) {
        gameFlow("x");
      } else if (i == oButton) {
        gameFlow("o");
      }
    });
  });
})();

//Flow of the TicTacToe Game
const gameFlow = (playerLetter) => {
  if (playerLetter == "x") {
    let cpuLetter = "o";
  } else if (playerLetter == "o") {
    let cpuLetter = "x";
  }
  let flowBoard = gameBoard.myBoard;

  //Winning sets for the game
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  console.log(flowBoard);
};
