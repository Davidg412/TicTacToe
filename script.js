//Game Board
const gameBoard = (() => {
  const myBoard = [];
  const gameContainer = document.querySelector("#game-container");
  //Loop to create 3x3 gameBoard
  for (let i = 0; i < 9; i++) {
    const gameSquare = document.createElement("div");
    gameSquare.classList.add("game-square");
    gameContainer.appendChild(gameSquare);
    myBoard.push(gameSquare);
  }
})();

//X or O letter player selection
const playerSelection = (() => {
  //Header for buttons
  const playerChoices = document.querySelector(".player-choices");
  const selectionMessage = document.createElement("h2");
  selectionMessage.classList.add("selection-message");
  selectionMessage.textContent = "Choose your weapon:";
  playerChoices.appendChild(selectionMessage);

  //Buttons for player selection
  //X Button
  const xButton = document.createElement("button");
  xButton.classList.add("x-button");
  xButton.textContent = "X";
  playerChoices.appendChild(xButton);
  //Y Button
  const yButton = document.createElement("button");
  yButton.classList.add("y-button");
  yButton.textContent = "Y";
  playerChoices.appendChild(yButton);
})();
