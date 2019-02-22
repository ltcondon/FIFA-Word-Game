// Possible Players: 
var playerList = ["David De Gea", "Marcelo", "Sergio Ramos", "Raphael Varane", "Virgil Van Dijk", "N'golo Kante", "Luca Modric", "Kevin De Bruyne", "Kylian Mbappe", "Lionel Messi", "Christiano Ronaldo", "Neymar Jr"];
// Array.prototype.randsplice = function() {
//     var randomPlayerUpper = [Math.floor(Math.random() * this.length)];
//     var randomPlayer = this.splice(randomPlayerUpper, 1);
//     var randomPlayer = randomPlayerUpper.toLowerCase();
//     return randomPlayer;
// }
// Game initiated and variables assigned:

document.getElementById("start-button").addEventListener("click", function(){


    /// A player from the player list is randomly selected:
    // randsplice(playerList);

    var randomPlayerUpper = playerList[Math.floor(Math.random() * playerList.length)];
    var randomPlayer = randomPlayerUpper.toLowerCase();

    /// A series of empty spaces is generated, equal to the number of characters in the selected player's name:
    var blankPlayerGuess = [];
        for (var i=0; i<randomPlayer.length; i++){
        blankPlayerGuess[i] = "_";
        }

    /// That series of empty spaces is displayed on the screen in the "current-player-guess" box:
    var displayGuess = document.getElementById("current-player-guess");
        displayGuess.textContent = blankPlayerGuess;

    /// Initial score and remaining guesses are set:
    var score = 0;
    var remainingGuesses = 12;

    /// Current score and remaining guesses are displayed on screen in "score&guess-box".
    var displayScore = document.getElementById("current-score");
        displayScore.textContent = score;

    var displayRemainingGuesses = document.getElementById("guesses-remaining");
        displayRemainingGuesses.textContent = remainingGuesses;

    /// Incorect guesses are displayed in the "incorrect-guesses" box:
    var wrongGuesses = [];
    var displayWrongGuesses = document.getElementById("incorrect-guesses");
        displayWrongGuesses.textContent = wrongGuesses;

    document.onkeyup = function(event) {
        var userGuess = event.key;

        
        for (var j=0; j<randomPlayer.length; j++) {
            if (randomPlayer[j] === userGuess) {
                blankPlayerGuess[j] = userGuess;
             }
            // else if (randomPlayer[userGuess] === "-1") {
            else {
                wrongGuesses.push(userGuess + ", ");
            }
        }

        remainingGuesses--;
    
    }
});