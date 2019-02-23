
// Possible Players: 
var playerList = ["David De Gea", "Marcelo", "Sergio Ramos", "Raphael Varane", "Virgil Van Dijk", "N'golo Kante", "Luca Modric", "Kevin De Bruyne", "Kylian Mbappe", "Lionel Messi", "Christiano Ronaldo", "Neymar Jr"];


// Game initiated and variables assigned:

/// Initial score and remaining guesses are set:
var score = 0;
var remainingGuesses = 12;

/// Current score is displayed on screen in "score&guess-box".
var displayScore = document.getElementById("current-score");
    displayScore.textContent = score;

document.getElementById("start-button").addEventListener("click", function(){
    runGame();
    
});


    // Game-round initiated:
    function runGame() {

      /// A player from the player list is randomly selected:
        var randomPlayerUpper = playerList[Math.floor(Math.random() * playerList.length)];
        var randomPlayer = randomPlayerUpper.toLowerCase();
    
        /// A series of empty spaces is generated, equal to the number of characters in the selected player's name:
        var blankPlayerGuess = [];
            for (var i=0; i<randomPlayer.length; i++){
            blankPlayerGuess[i] = "_";
            }
            for (var k=0; k<randomPlayer.length; k++) {
                if (randomPlayer[k] === " ") {
                    blankPlayerGuess[k] = " ";
                }
                else if (randomPlayer[k] === "'") {
                    blankPlayerGuess[k] = "'";
                }
            blankPlayerGuess
            }
    
        /// That series of empty spaces is displayed on the screen in the "current-player-guess" box:
        var displayGuess = document.getElementById("current-player-guess");
            displayGuess.textContent = blankPlayerGuess;
    
        /// Initial remaining guesses are set:
        var remainingGuesses = 12;
    
    
        var displayRemainingGuesses = document.getElementById("guesses-remaining");
            displayRemainingGuesses.textContent = remainingGuesses;
    
        /// Incorect guesses are displayed in the "incorrect-guesses" box:
        var wrongGuesses = [];
        var displayWrongGuesses = document.getElementById("incorrect-guesses");
            displayWrongGuesses.textContent = wrongGuesses;

        document.onkeyup = function(event) {
            var allowedGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
            var userGuessUpper = event.key;
            var userGuess = userGuessUpper.toLowerCase(); 
            
            function compare() {

                for (var j=0; j<randomPlayer.length; j++) {
                    if (randomPlayer[j] === userGuess) {
                        blankPlayerGuess[j] = userGuess;
                        displayGuess.textContent = blankPlayerGuess;
                     }
                  }
                        
                if ((!randomPlayer.includes(userGuess)) && (!wrongGuesses.includes(" " + userGuess))) {
                      remainingGuesses--;
                      wrongGuesses.push(" " + userGuess);
                      displayRemainingGuesses.textContent = remainingGuesses;
                      displayWrongGuesses.textContent = wrongGuesses;
                  }
            }
            if (allowedGuesses.includes(userGuess)) {
                compare()  
             }
             
              
        
          if(!blankPlayerGuess.includes("_")) {
            alert("You won!");
            score++;
            displayScore.textContent = score;
            runGame();
          }

          if (remainingGuesses < 1) {
              alert("You lost!");
              runGame();
          }
        }
    }