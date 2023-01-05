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

  //Button Creation
  //X Button
  const xButton = document.createElement("button");
  //setAttribute sets the value of the button to in our JS
  xButton.setAttribute("value", "x");
  xButton.classList.add("x-button");
  xButton.textContent = "X";
  playerChoices.appendChild(xButton);
  //Y Button
  const yButton = document.createElement("button");
  yButton.setAttribute("value", "y");
  yButton.classList.add("y-button");
  yButton.textContent = "Y";
  playerChoices.appendChild(yButton);

  //Loop to add onclick events to both X and Y buttons
  let btns = document.querySelectorAll("button");

  btns.forEach(function (buttonSelect) {
    buttonSelect.addEventListener("click", function () {
      if (buttonSelect == xButton) {
        console.log("x");
      } else if (buttonSelect == yButton) {
        console.log("y");
      }
    });
  });
})();
