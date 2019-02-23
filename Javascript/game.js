
// Possible Players: 
var playerList = ["David De Gea", "Marcelo", "Sergio Ramos", "Raphael Varane", "Virgil Van Dijk", "N'golo Kante", "Luka Modric", "Kevin De Bruyne", "Kylian Mbappe", "Lionel Messi", "Christiano Ronaldo", "Neymar Jr"];


// Game initiated and variables assigned:

/// Initial score and remaining guesses are set:
var score = 0;
var remainingGuesses = 10;

/// Current score is displayed on screen in "score&guess-box".
var displayScore = document.getElementById("current-score");
    displayScore.textContent = score;

// Game restarts if user reaches end of array or runs out of guesses:
function restart() {
    
    // Resets options in array:
    playerList = ["David De Gea", "Marcelo", "Sergio Ramos", "Raphael Varane", "Virgil Van Dijk", "N'golo Kante", "Luka Modric", "Kevin De Bruyne", "Kylian Mbappe", "Lionel Messi", "Christiano Ronaldo", "Neymar Jr"];    
    
    // Resets any progress from previous attempt(s):
    score = 0;
    remainingGuesses = 10;
    wrongGuesses = [];
    
    // Displays correct stats on-screen:
    displayScore.textContent = score;    
    displayWrongGuesses = document.getElementById("incorrect-guesses");
            displayWrongGuesses.textContent = wrongGuesses;

    var displayEmpty = document.getElementById("current-player-guess");
            displayEmpty.textContent = "WHO AM I??";
}

// Start button starts/resets game: 
document.getElementById("start-button").addEventListener("click", function(){
    restart();
    runGame();
    
});


    // Game-round initiated:
    function runGame() {

      /// A player from the player list is randomly selected:
        var randomPlayerIndex = [Math.floor(Math.random() * playerList.length)];
        var randomPlayerUpper = playerList[randomPlayerIndex];
        var removeSelection = playerList.splice(randomPlayerIndex, 1);
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
            }
    
        /// That series of empty spaces is displayed on the screen in the "current-player-guess" box:
        var displayGuess = document.getElementById("current-player-guess");
            displayGuess.textContent = blankPlayerGuess;
    
        /// Initial remaining guesses are set and displayed:
        var remainingGuesses = 10;
        var displayRemainingGuesses = document.getElementById("guesses-remaining");
            displayRemainingGuesses.textContent = remainingGuesses;
    
        /// Incorect guesses are displayed in the "incorrect-guesses" box:
        var wrongGuesses = [];
        var displayWrongGuesses = document.getElementById("incorrect-guesses");
            displayWrongGuesses.textContent = wrongGuesses;

        /// Once a guess is made (key is pressed), guess is first verified as a possible character, then compared to the random player:
        document.onkeyup = function(event) {
            var allowedGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
            var userGuessUpper = event.key;
            var userGuess = userGuessUpper.toLowerCase(); 
            if (allowedGuesses.includes(userGuess)) {
                compare();
             }
            
            function compare() {

                for (var j=0; j<randomPlayer.length; j++) {
                    if (randomPlayer[j] === userGuess) {
                        blankPlayerGuess[j] = userGuess;
                        displayGuess.textContent = blankPlayerGuess;
                     }
                  }
                
                //// If letter has not been previously guessed, it is pushed to the screen either into the current guessword (if correct), or into the incorrect guesses' box:
                if ((!randomPlayer.includes(userGuess)) && (!wrongGuesses.includes(" " + userGuess))) {
                      remainingGuesses--;
                      wrongGuesses.push(" " + userGuess);
                      displayRemainingGuesses.textContent = remainingGuesses;
                      displayWrongGuesses.textContent = wrongGuesses;
                  }
            }

             
              
          /// Once current guessword is completely filled with correct characters, the user is alerted they were correct, their score increases, and a new guessword is generated:
          if(!blankPlayerGuess.includes("_")) {
            alert("You won!");
            score++;
            displayScore.textContent = score;
            runGame();
          }

          /// If the user runs out of guesses, they are alerted they've lost the game, and the game resets:
          if (remainingGuesses < 1) {
              alert("You lost!");
              restart();
          }
        }
    }