console.log("hola juego");

const rock = document.getElementById("rock").addEventListener("click", () => {
  selectUser(ROCK);
});
const paper = document.getElementById("paper");
const excisor = document.getElementById("excisor");
const winLose = document.querySelector(".win");
const ROCK = 1;
const PAPER = 2;
const EXCISOR = 3;
const win = "ganaste ";
const lose = "perdiste, intentalo en otra ocacion";
const tie = "empate, no puedes ser mejor?";

paper.addEventListener("click", () => {
  selectUser(PAPER);
});

excisor.addEventListener("click", () => {
  selectUser(EXCISOR);
});

function selectUser(select) {
  console.log(select);
  const compSelection = selectComp();
  // const resultText=result();
  play(select, compSelection);
}

function selectComp() {
  const compSelection = Math.floor(Math.random() * 3) + 1;
  console.log(compSelection);
  return compSelection;
}
// function result() {
//     // winLose.classList.toggle('d-none')
//     winLose.innerHTML=(tie);
// }
function play(selectUser, selectComp) {
  if (selectUser === selectComp) {
    console.log("Empate");
    winLose.innerHTML = tie;
  } else if (
    (selectUser === ROCK && selectComp === EXCISOR) ||
    (selectUser === PAPER && selectComp === ROCK) ||
    (selectUser === EXCISOR && selectComp === PAPER)
  ) {
    console.log("¡Ganaste!");
    winLose.innerHTML = win;
  } else if (
    (selectUser === ROCK && selectComp === PAPER) ||
    (selectUser === PAPER && selectComp === EXCISOR) ||
    (selectUser === EXCISOR && selectComp === ROCK)
  ) {
    console.log("¡Perdiste!");
    winLose.innerHTML = lose;
  } else {
    console.log("Juego nulo");
  }
}
