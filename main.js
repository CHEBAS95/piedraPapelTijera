console.log("hola juego");
/* variables del juego */

const buttons = document.querySelectorAll(".game-button");
const winLose = document.querySelector(".win");
const theme = document.getElementById("theme");
const userOption = document.getElementById("userOption")
const compOption = document.getElementById("compOption")


buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    selectUser(index + 1);
  });
});
/*-------------CONSTANTES DEL JUEGO ----------ny */
const ROCK = 1;
const PAPER = 2;
const EXCISOR = 3;
const win = "ganaste ";
const lose = "perdiste, intentalo en otra ocación";
const tie = "empate, no puedes ser mejor?";


/* -------------FUNCIONES DEL JUEGO---------  */
function selectUser(select) {
  console.log(select);
  changeImage(select);
  const compSelection = selectComp();
  // const resultText=result();
  play(select, compSelection);
}

/*--TRABJAR EN SET INETEAVAL Y SET TIME OT*/
setTimeout(() => selectComp(), 5000);
function selectComp() {
  const compSelection = Math.floor(Math.random() * 3) + 1;
  // Cambiar la imagen de la computadora después de 2 segundos
  setTimeout(() => changeImageComp(selectComp), 5000);
  changeImageComp(compSelection);
  console.log(compSelection);
  return compSelection;
}

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


function changeImage(selectUser) {
  if (selectUser === ROCK) {
    userOption.src = 'img/roca.png';
  } else if (selectUser === PAPER) {
    userOption.src = 'img/papel.png';
  } else if (selectUser === EXCISOR) {
    userOption.src = 'img/tijeras.png';
  }
}

function changeImageComp(selectComp) {
  if (selectComp === 1) {
    compOption.src = 'img/roca.png';
  } else if (selectComp === 2) {
    compOption.src = 'img/papel.png';
  } else if (selectComp === 3) {
    compOption.src = 'img/tijeras.png';
  }
}



/* FUNCIONES DE ESTILOS */
theme.addEventListener("change", () => {
  if (theme.checked) {
    console.log("activado modo oscuro");
    document.body.classList.add("dark-theme");
    document.h2.classList.add("dark-theme")
  } else {
    console.log("activado modo claro");
    document.body.classList.remove("dark-theme");
  }
});