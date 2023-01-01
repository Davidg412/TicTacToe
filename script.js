//Game Board Module
const gameBoard = (() => {
  const myBoard = [];
  const gameContainer = document.querySelector("#game-container");

  //Loop to create 3x3 gameBoard
  for (let i = 0; i < 9; i++) {
    const gameSquare = document.createElement("div");
    gameSquare.classList.add("game-square");
    gameContainer.appendChild(gameSquare);
    myBoard.push(gameSquare);
    console.log(myBoard.length);
  }
})();
