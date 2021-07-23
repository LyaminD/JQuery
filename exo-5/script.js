console.log("exercice 5");
$( "img" ).on('click',event => {
        let nom =$(event.currentTarget).attr('alt');
          console.log('L\'utilisateur clic sur ' + nom)
        });


function getComputerChoice() {
  var randChoice = Math.floor(Math.random() * 3);
  if (randChoice == 0) {
    return "rock";
  } else if (randChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {

  if (userChoice === computerChoice) {
    console.log("Tied");
  } else if (userChoice == "rock") {
    if (computerChoice == "scissors") {
      console.log("win");
    } else {
      console.log("lost");
    }
  } else if (userChoice == "paper") {
    if (computerChoice == "scissors") {
      console.log("lost");
    } else {
      console.log("win");
    }
  } else {
    if (computerChoice == "rock") {
      console.log("lost");
    } else {
      console.log("win");
    }
  }
}
