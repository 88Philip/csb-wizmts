var aiWins = 0;
var playerWins = 0;
var draws = 0;
var totalGames = aiWins + playerWins + draws;
var main = function (input) {
  //Win rate for player
  var winRate = (playerWins / totalGames) * 100;
  //Check for invalid Player input and prompting player to change his choice if invalid
  if (input !== "sissors" && input !== "paper" && input !== "stone") {
    return "Invalid input, please try again with either sissors, paper or stone only";
  }
  //Generating AI choice
  var randomInteger = Math.floor(Math.random() * 3);
  console.log(randomInteger);
  var aiChoice = "";
  if (randomInteger === 0) {
    aiChoice = `sissors`;
  }
  if (randomInteger === 1) {
    aiChoice = `paper`;
  }
  if (randomInteger === 2) {
    aiChoice = `stone`;
  }
  console.log(aiChoice);

  // //Checking Players choice against AI
  if (input === aiChoice) {
    draws += 1;
    return "You have chosen ${input} and ai has chosen similarly so its a draw player win rate ${winRate}";
  } else if (input === "sissors" && aiChoice === "stone") {
    aiWins += 1;
    return "You have chosen sissors and ai has chosen stone so you lose player win rate ${winRate}";
  }
  if (input === "sissors" && aiChoice === "paper") {
    playerWins += 1;
    return "You have chosen sissors and ai has chosen paper and you win player win rate ${winRate}";
  }
  if (input === "paper" && aiChoice === "sissors") {
    aiWins += 1;
    return "You have chosen paper and ai has chosen sissors so you lose player win rate ${winRate}";
  }
  if (input === "paper" && aiChoice === "stone") {
    playerWins += 1;
    return "You have chosen paper and ai has chosen stone and you win player win rate ${winRate}";
  }
  if (input === "stone" && aiChoice === "sissors") {
    playerWins += 1;
    return "You have chosen stone and ai has chosen sissors and you win player win rate ${winRate}";
  }
  if (input === "stone" && aiChoice === "paper") {
    aiWins += 1;
    return "You have chosen stone and ai has chosen paper and you lose player win rate ${winRate}";
  }
};
