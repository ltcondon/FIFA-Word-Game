// Possible Players: 
var playerList = [
 player1 = "David De Gea",
 player2 = "Marcelo",
 player3 = "Sergio Ramos",
 player4 = "Raphael Varane",
 player5 = "Virgil Van Dijk",
 player6 = "N'golo Kante",
 player7 = "Luca Modric",
 player8 = "Kevin De Bruyne",
 player9 = "Kylian Mbappe",
 player10 = "Lionel Messi",
 player11 = "Christiano Ronaldo",
 player12 = "Neymar Jr",
];

// A random question is prompted:
document.onkeyup = function(event) {

if (event.keyCode == 32) {
var currentPlayer = playerList[Math.floor(Math.random() * playerList.length)];
var displayQuestion = document.getElementById("current-question");
   displayQuestion.textContent = currentQuestion;

// User's answer is compared to question's answer:
if (((event.key === "t") && (a.currentQuestion === true)) || ((event.key === "f") && (a.currentQuestion === false))) {
   var correctPrompt = document.getElementById("current-question");
   correctPrompt.textContent = "Correct! Nice Job.";
}

else if (((event.key === "t") && (a.currentQuestion === false)) || ((event.key === "f") && (a.currentQuestion === true))) {
   var incorrectPrompt = document.getElementById("current-question");
   incorrectPrompt.textContent = "Sorry! That's incorrect.";
} 

else {
   console.log("n/a");
}
}
};
