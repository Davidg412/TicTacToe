////////*Game Board*//////////
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

////////////*X or O letter player selection*/////////
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

/////////*Flow of the TicTacToe Game after a letter is selected*//////////
const gameFlow = (playerLetter) => {
  if (playerLetter == "X") {
    let cpuLetter = "O";
  } else if (playerLetter == "O") {
    let cpuLetter = "X";
  }
  let flowBoard = gameBoard.myBoard;

  //Adds click event listeners to each game square
  let allSquares = document.querySelectorAll(".game-square");
  allSquares.forEach(addLetter);
  //Splices letter into game array and appends a letter visually on the board
  function addLetter(square, index) {
    square.addEventListener("click", () => {
      square.textContent = playerLetter;
      flowBoard.splice(index, 1, playerLetter);
      let humanCombos = comboCheck(flowBoard, playerLetter);
      console.log(flowBoard);
    });
  }
};

//////////////*Find combos of players letters in the game board*//////////////
const comboCheck = (playersBoard) => {
  // Winning combos for the game
  if (
    (playersBoard[0] != "" &&
      playersBoard[0] == playersBoard[1] &&
      playersBoard[1] == playersBoard[2]) ||
    (playersBoard[3] != "" &&
      playersBoard[3] == playersBoard[4] &&
      playersBoard[4] == playersBoard[5]) ||
    (playersBoard[6] != "" &&
      playersBoard[6] == playersBoard[7] &&
      playersBoard[7] == playersBoard[8]) ||
    (playersBoard[0] != "" &&
      playersBoard[0] == playersBoard[3] &&
      playersBoard[3] == playersBoard[6]) ||
    (playersBoard[1] != "" &&
      playersBoard[1] == playersBoard[4] &&
      playersBoard[4] == playersBoard[7]) ||
    (playersBoard[2] != "" &&
      playersBoard[2] == playersBoard[5] &&
      playersBoard[5] == playersBoard[8]) ||
    (playersBoard[0] != "" &&
      playersBoard[0] == playersBoard[4] &&
      playersBoard[4] == playersBoard[8]) ||
    (playersBoard[2] != "" &&
      playersBoard[2] == playersBoard[4] &&
      playersBoard[4] == playersBoard[6])
  ) {
    console.log("winner");
  }
};
