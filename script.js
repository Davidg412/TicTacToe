/*Game Board*/
const gameBoard = (() => {
  //Array for the board
  let myBoard = [];
  let emptySquare = "";
  let index = 0;
  const gameContainer = document.querySelector("#game-container");
  //Loop to create 3x3 gameBoard
  for (let square = 0; square < 9; square++) {
    const gameSquare = document.createElement("div");
    gameSquare.classList.add("game-square");
    gameSquare.dataset.linkedArray = index;
    gameContainer.appendChild(gameSquare);
    //Creates an empty space in the array
    myBoard.push(emptySquare);
    index++;
  }

  return { myBoard };
})();

/*X or O letter player selection*/
const playerSelection = (() => {
  //Header for buttons
  const playerChoices = document.querySelector(".player-choices");
  const selectionMessage = document.createElement("h2");
  selectionMessage.classList.add("selection-message");
  selectionMessage.textContent = "Choose your letter:";
  playerChoices.appendChild(selectionMessage);

  //Button Creation
  //X Button
  const xButton = document.createElement("button");
  //setAttribute sets the value of the button to in our JS
  xButton.setAttribute("value", "X");
  xButton.classList.add("x-button");
  xButton.textContent = "X";
  playerChoices.appendChild(xButton);
  //Y Button
  const oButton = document.createElement("button");
  oButton.setAttribute("value", "O");
  oButton.classList.add("o-button");
  oButton.textContent = "O";
  playerChoices.appendChild(oButton);

  //Loop to add onclick events to both X and Y buttons
  let btns = document.querySelectorAll("button");
  btns.forEach(function (square) {
    square.addEventListener("click", () => {
      gameOnMessage();
      if (square == xButton) {
        gameFlow("X");
      } else if (square == oButton) {
        gameFlow("O");
      }
    });
  });
})();

//Hide player selection and display game on message
const gameOnMessage = () => {
  //Removes selection buttons
  document.querySelector(".player-choices").style.display = "none";
  //Replace with game message
  const gameOn = document.createElement("h2");
  gameOn.classList.add("game-on");
  gameOn.textContent = "Game On!";
  const pageContainer = document.querySelector(".page-container");
  pageContainer.appendChild(gameOn);
};

/*Flow of the TicTacToe Game after a letter is selected*/
const gameFlow = (playerLetter) => {
  if (playerLetter == "X") {
    let cpuLetter = "O";
  } else if (playerLetter == "O") {
    let cpuLetter = "X";
  }
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
  let flowBoard = gameBoard.myBoard;

  //Adds click event listeners to each game square
  let allSquares = document.querySelectorAll(".game-square");
  allSquares.forEach(addLetter);

  //Splices letter into game array and appends a letter visually on the board
  function addLetter(square, index) {
    square.addEventListener("click", () => {
      square.textContent = playerLetter;
      flowBoard.splice(index, 1, playerLetter);
      console.log(flowBoard);
    });
  }
};
