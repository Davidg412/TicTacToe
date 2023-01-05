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
        testFactory("x");
        console.log("x");
      } else if (i == oButton) {
        testFactory("o");
        console.log("o");
      }
    });
  });
})();

const testFactory = (yolo) => {
  if (yolo == "x") {
    console.log("this is x");
  } else if (yolo == "o") {
    console.log("this is o");
  }
};
