
import $ from 'jquery';

let isX = true;

const printX = () => {
    $(this).css('background-image', 'url(x.png)')
}

const printO = () => {
    $(this).css('background-image', 'url(o.png)')
}

$(".cell").click(function() {
    if($(this).css('background-image') !== 'none') { // Checks if already clicked before
        return;
    }
    if(isX === true) {
        printX()
        isX = false
    } else {
        printO()
        isX = true
    }
})

$("#resetbtn").click(function() {
    location.reload() // Reset the game
})