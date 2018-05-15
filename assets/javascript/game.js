<!--JavaScript-->

// Declare variables

var yourNumber = 0;
var magicNumber = 0;
var crystalPoints = [];
var wins = 0;
var losses = 0;

// Restart game

function reset() {
    yourNumber = 0;

// Get browser to set a new goal between 10 and 100

    magicNumber = Math.floor(Math.random()*100) + 10;

// Give crystals new values between 1 and 15

    for (var i = 0; i < 4; i++) {
        crystalPoints[i] = Math.floor(Math.random()*15) + 1;
        $("#button" + (i+1)).attr("value", crystalPoints[i]);
    }

// Update user on magic and current numbers

    $("#magic-number").text(magicNumber);
    $("#your-number").text(yourNumber);
}

// Start game
reset();

$(document).ready(function() {

// When a crystal button is clicked
    $("button").on("click", function (){

        if (yourNumber < magicNumber) {
            yourNumber += parseInt(this.value);

        if (yourNumber > magicNumber) {
            losses++;
            alert("Sorry! Try again")
            }

        else if (yourNumber === magicNumber) {
            wins++;
            alert("Nice job! You Win!")    
            }
        }
        else { reset();}

// Update html
$("#your-number").text(yourNumber);
$("#wins").text(wins);
$("#losses").text(losses);

    });
});
