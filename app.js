
let cells = document.querySelectorAll(".row > div");

for (let square of cells) {
  square.addEventListener("click", cellClicked);
}


let gameOver = false;


let player = "X";

let announcement = document.querySelector(".winner");


let newGame = document.querySelector("#newGame");

newGame.addEventListener("click", clearBoard)


//FUNCTIONS
function choosePlayer() {
  if (event.target.textContent === 'X' || event.target.textContent === 'O') {
    return;
  }
  event.target.textContent = player;
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
}

function cellClicked() {
  if (gameOver) {
    cells[i].removeEventListener('click', cellClicked)
  }
  choosePlayer();
  checkWinner();
}

function clearBoard() {
  for (let squares of cells) {
    squares.textContent = "";
    announcement.textContent = "";
    location.reload();
  }
}

function checkWinner() {
  if (
    (cells[0].textContent == "X" &&
      cells[1].textContent == "X" &&
      cells[2].textContent == "X") ||
    (cells[3].textContent == "X" &&
      cells[4].textContent == "X" &&
      cells[5].textContent == "X") ||
    (cells[6].textContent == "X" &&
      cells[7].textContent == "X" &&
      cells[8].textContent == "X") ||
    (cells[0].textContent == "X" &&
      cells[3].textContent == "X" &&
      cells[6].textContent == "X") ||
    (cells[1].textContent == "X" &&
      cells[4].textContent == "X" &&
      cells[7].textContent == "X") ||
    (cells[2].textContent == "X" &&
      cells[5].textContent == "X" &&
      cells[8].textContent == "X") ||
    (cells[0].textContent == "X" &&
      cells[4].textContent == "X" &&
      cells[8].textContent == "X") ||
    (cells[2].textContent == "X" &&
      cells[4].textContent == "X" &&
      cells[6].textContent == "X")
  ) {
    console.log("X WINS!");
    announcement.textContent = "X Wins!";
    gameOver = true;
    player = "X";
  } else if (
    (cells[0].textContent == "O" &&
      cells[1].textContent == "O" &&
      cells[2].textContent == "O") ||
    (cells[3].textContent == "O" &&
      cells[4].textContent == "O" &&
      cells[5].textContent == "O") ||
    (cells[6].textContent == "O" &&
      cells[7].textContent == "O" &&
      cells[8].textContent == "O") ||
    (cells[0].textContent == "O" &&
      cells[3].textContent == "O" &&
      cells[6].textContent == "O") ||
    (cells[1].textContent == "O" &&
      cells[4].textContent == "O" &&
      cells[7].textContent == "O") ||
    (cells[2].textContent == "O" &&
      cells[5].textContent == "O" &&
      cells[8].textContent == "O") ||
    (cells[0].textContent == "O" &&
      cells[4].textContent == "O" &&
      cells[8].textContent == "O") ||
    (cells[2].textContent == "O" &&
      cells[4].textContent == "O" &&
      cells[6].textContent == "O")
  ) {
    console.log("O WINS!");
    announcement.textContent = "O Wins!";
    gameOver = true;
    player = "X";
  } else if (
    cells[0].textContent !== "" &&
    cells[1].textContent !== "" &&
    cells[2].textContent !== "" &&
    cells[3].textContent !== "" &&
    cells[4].textContent !== "" &&
    cells[5].textContent !== "" &&
    cells[7].textContent !== "" &&
    cells[7].textContent !== "" &&
    cells[8].textContent !== ""
  ) {
    announcement.textContent = "DRAW!";
    gameOver = true;
    player = "X";
  }
}