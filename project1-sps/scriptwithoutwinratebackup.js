var main = function (input) {
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
    return "You have chosen ${input} and ai has chosen similarly so its a draw";
  } else if (input === "sissors" && aiChoice === "stone") {
    return "You have chosen sissors and ai has chosen stone so you lose";
  }
  if (input === "sissors" && aiChoice === "paper") {
    return "You have chosen sissors and ai has chosen paper and you win";
  }
  if (input === "paper" && aiChoice === "sissors") {
    return "You have chosen paper and ai has chosen sissors so you lose";
  }
  if (input === "paper" && aiChoice === "stone") {
    return "You have chosen paper and ai has chosen stone and you win";
  }
  if (input === "stone" && aiChoice === "sissors") {
    return "You have chosen stone and ai has chosen sissors and you win";
  }
  if (input === "stone" && aiChoice === "paper") {
    return "You have chosen stone and ai has chosen paper and you lose";
  }
};
