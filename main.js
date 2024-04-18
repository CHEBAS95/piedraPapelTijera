console.log('hola juego');

const rock=document.getElementById('rock').addEventListener('click',()=>{
    selectUser(ROCK);
});
const paper=document.getElementById('paper');
const excisor=document.getElementById('excisor');

const ROCK=1;
const PAPER=2;
const EXCISOR=3;

paper.addEventListener('click',()=>{
    selectUser(PAPER);
})

excisor.addEventListener('click',()=>{
    selectUser(EXCISOR);
})

function selectUser(select) {
    console.log(select);
    const compSelection = selectComp();
    play(select, compSelection);
}

function selectComp() {
    const compSelection = Math.floor(Math.random() * 3) + 1;
    console.log(compSelection);
    return compSelection;
}

function play(selectUser, selectComp) {
    if (selectUser === selectComp) {
        console.log('Empate');
    } else if ((selectUser === ROCK && selectComp === EXCISOR) || (selectUser === PAPER && selectComp ===ROCK)||(selectUser === EXCISOR && selectComp === PAPER)) {
        console.log('¡Ganaste!');
    } else if ((selectUser === ROCK && selectComp === PAPER) || (selectUser === PAPER && selectComp === EXCISOR)||(selectUser ===EXCISOR && selectComp === ROCK)) {
        console.log('¡Perdiste!');
    } else {
        console.log('Juego nulo');
    }
}