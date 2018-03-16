
import $ from 'jquery';

let bool = true; // When bool true print X, if bool false print O

$(".cell").click(function() { // Eventlissener if was click on cell
    if(bool === true) {
        $(this).css('background-image', 'url(x.png)') // Prints X        
        bool = false
    } else {
        $(this).css('background-image', 'url(o.png)') // Prints O
        bool = true
    }
})

$("#resetbtn").click(function() { // Eventlissener if clicked reset button
    location.reload() // Reset the game
})