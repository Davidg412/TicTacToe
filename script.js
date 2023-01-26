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

  return { myBoard, gameContainer };
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
        gameFlow("X", "O");
      } else if (square == oButton) {
        gameFlow("O", "X");
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
  return { pageContainer };
};

/////////*Flow of the TicTacToe Game after a letter is selected*//////////
const gameFlow = (playerLetter, cpuLetter) => {
  let flowBoard = gameBoard.myBoard;

  //Game on message
  const gameDisplay = selectElement(".game-on");

  //Adds click event listeners to each game square
  let allSquares = document.querySelectorAll(".game-square");
  allSquares.forEach(addLetter);

  //Counter will determine which players turn it is
  let counter = 0;
  //Splices letter into game array and appends a letter visually on the board
  function addLetter(square, index) {
    square.addEventListener("click", () => {
      if (counter % 2 == 0) {
        //Players turn message
        const letterTurn = elementFactory(
          "p",
          { class: "players-turn" },
          `It is player ${playerLetter}'s turn`
        );
        gameDisplay.selector.appendChild(letterTurn.element);
        square.textContent = playerLetter;
        flowBoard.splice(index, 1, playerLetter);
        //Disables the square after it has been clicked
        square.style.pointerEvents = "none";
        let playerCombos = comboCheck(flowBoard, playerLetter);
        console.log(flowBoard);
        counter++;
      } else {
        //Players turn message
        const letterTurn = elementFactory(
          "p",
          { class: "players-turn" },
          `It is player ${cpuLetter}'s turn`
        );
        gameDisplay.selector.appendChild(letterTurn.element);
        square.textContent = cpuLetter;
        flowBoard.splice(index, 1, cpuLetter);
        //Disables the square after it has been clicked
        square.style.pointerEvents = "none";
        let cpuCombos = comboCheck(flowBoard, cpuLetter);
        console.log(flowBoard);
        counter++;
      }
    });
  }
};

//////////////*Find combos of players letters in the game board*//////////////
const comboCheck = (playersBoard, gameLetter) => {
  const pageContainer = selectElement(".page-container");
  //Create game end message
  const endMessage = elementFactory("h2", { class: "end-message" });

  //Append below game board
  const appendBoard = (child) => {
    pageContainer.selector.appendChild(child);
  };

  //Rematch button for game end
  const reMatch = elementFactory(
    "button",
    { class: "rematch-button" },
    "Rematch"
  );

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
    gameStop();
    removeGame();
    //Notify who the winner of the game is
    endMessage.element.textContent = `Player ${gameLetter} Wins!`;
    appendBoard(endMessage.element);
    //Rematch button option
    appendBoard(reMatch.element);
    restartGame();
    //Refresh page if button is clicked
    /*const restartButton = document.querySelector(".rematch-button");

    const refreshPage = () => {
      location.reload();
    };
    restartButton.addEventListener("click", refreshPage);*/
    //Condition checking for tie
  } else if (playersBoard.every(checkTie) == true) {
    gameStop();
    removeGame();
    endMessage.element.textContent = "It's a tie!";
    appendBoard(endMessage.element);
    appendBoard(reMatch.element);
    restartGame();
  }
};

//game board stop
const gameStop = () => (gameBoard.gameContainer.style.pointerEvents = "none");

//Remove Game On message
const removeGame = () =>
  (document.querySelector(".game-on").style.display = "none");

//Check for Tie in game
const checkTie = (boardSquare) => {
  return boardSquare != "";
};

//DOM element creation factory
const elementFactory = (type, attribute, text) => {
  const element = document.createElement(type);

  for (key in attribute) {
    element.setAttribute(key, attribute[key]);
  }

  element.textContent = text;

  return { element };
};

//Select DOM elements
const selectElement = (attribute) => {
  const selector = document.querySelector(attribute);

  const selectorAll = document.querySelectorAll(attribute);

  return { selector, selectorAll };
};

//Refresh page after game end
const restartGame = () => {
  const restartButton = document.querySelector(".rematch-button");

  const refreshPage = () => {
    location.reload();
  };
  restartButton.addEventListener("click", refreshPage);
};
