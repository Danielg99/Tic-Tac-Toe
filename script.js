
let bool = true; // When bool true print X, if bool false print O

$(".cell").click(function() { // Checks if was click on cell
    if(bool === true) {
        $(this).css('background-image', 'url(x.png)') // Prints X        
        bool = false
    } else {
        $(this).css('background-image', 'url(o.png)') // Prints O
        bool = true
    }
})