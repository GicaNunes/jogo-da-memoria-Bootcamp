

let order = [];
let clickedOrder = [];
let score = 0;


const purple = document.querySelector('.purple');
const pink = document.querySelector('.pink');
const gold = document.querySelector('.gold');
const green = document.querySelector('.green');

//ordem aletoria

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//proxima cor

let lightColor = (element, number) => {
    number = number * 800;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    },number + 250);
}

//checa a ordem

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//clique do usuario

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//retorna a cor

let createColorElement = (color) => {
    if(color == 0) {
        return purple;
    } else if(color == 1) {
        return pink;
    } else if (color == 2) {
        return gold;
    } else if (color == 3) {
        return green;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao GigiGenius! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
purple.onclick = () => click(0);
pink.onclick = () => click(1);
gold.onclick = () => click(2);
green.onclick = () => click(3);


//inicio do jogo
playGame();




