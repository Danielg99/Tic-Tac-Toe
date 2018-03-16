
import $ from 'jquery';

const PLAYER = {
    X: 'X',
    O: 'O'
}
const cells = document.querySelectorAll('.cell');

const X_BACKGROUND = 'url("x.png")';
const O_BACKGROUND = 'url("o.png")';

const X_MESSAGE = 'Player X won!';
const O_MESSAGE = 'Player O won!';

let isX = true;
let scoreX = 0
let scoreO = 0

if(localStorage.getItem('X')) {
    scoreX = parseInt(localStorage.getItem('X'))
} else {
    scoreX = 0
}
if(localStorage.getItem('O')) {
    scoreO = parseInt(localStorage.getItem('O'))
} else {
    scoreO = 0
}
$('.score-x').text(scoreX)
$('.score-o').text(scoreO)


const printX = (element) => {
    $(element).css('background-image', 'url("x.png")')
    console.log("x")
}

const printO = (element) => {
    $(element).css('background-image', 'url("o.png")')
}

const checkRow = (cell1, cell2, cell3, player) => {
    let img, message;
    if (player === PLAYER.X) {
        img = X_BACKGROUND;
        message = X_MESSAGE;
    } else {
        img = O_BACKGROUND;
        message = O_MESSAGE;
    }
    if(cells[cell1].style.backgroundImage === img && 
       cells[cell2].style.backgroundImage === img && 
       cells[cell3].style.backgroundImage === img) {
        if(player === PLAYER.X) {
            localStorage.setItem('X', ++scoreX)
        }else {
            localStorage.setItem('O', ++scoreO)
        }
        alert(message)
        location.reload()
    }
}

const winX = () => {
    checkRow(0, 1, 2, PLAYER.X);
    checkRow(3, 4, 5, PLAYER.X);
    checkRow(6, 7, 8, PLAYER.X);
    checkRow(0, 3, 6, PLAYER.X);
    checkRow(1, 4, 7, PLAYER.X);
    checkRow(2, 5, 8, PLAYER.X);
    checkRow(0, 4, 8, PLAYER.X);
    checkRow(2, 4, 6, PLAYER.X);
}

const winO = () => {
    checkRow(0, 1, 2, PLAYER.O);
    checkRow(3, 4, 5, PLAYER.O);
    checkRow(6, 7, 8, PLAYER.O);
    checkRow(0, 3, 6, PLAYER.O);
    checkRow(1, 4, 7, PLAYER.O);
    checkRow(2, 5, 8, PLAYER.O);
    checkRow(0, 4, 8, PLAYER.O);
    checkRow(2, 4, 6, PLAYER.O);
}

$(".cell").click((e) => {
    if($(e.target).css('background-image') !== 'none') { // Checks if already clicked before
        return;
    }
    console.log("cellClicked")
    if(isX === true) {
        printX(e.target)
        isX = false
        winX()
    } else {
        printO(e.target)
        isX = true
        winO()
    }
})

$("#resetbtn").click(() => {
    location.reload() // Reset the game
})
