let currentPlayer = "X";
const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent !== "") {
      return;
    }

    cell.textContent = currentPlayer;

    if (checkForWin()) {
      alert(`${currentPlayer} wins!`);
      resetGame();
      return;
    }

    if (checkForDraw()) {
      alert("It's a draw!");
      resetGame();
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

function checkForWin() {
  // check for win logic goes here
}

function checkForDraw() {
  // check for draw logic goes here
}

function resetGame() {
  // reset game logic goes here
}
