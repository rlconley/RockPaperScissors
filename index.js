
function computerPlay () {
  // randomly return R, P, or S
  // generating the computer's choice
  // return computerSelection
  console.log('computerPlay called');
};

function playerPlay () {
  //request input R, P, or S
  //allows for any case UPPlowMiX
  //re-requests if they dont type a valid option
  //return playerSelection
  console.log('playerPlay called')

};

function playRound (playerSelection, computerSelection) {
  // rock beats scissors
  // scissors beats paper
  // paper beats rock
  // sames is tie, go again

  //compare player and computer input
  //determine winner
  //return string option x beats y
  console.log('playRound called')

};

function game() {
  // play 5 rounds of game using playRound function
  // keep score and display results of each round via console.log()
  // report overall winner or loser with console.log()
  // use prompt() to get input from the user
  console.log('game called')
};

// start with one round
playRound(playerPlay(), computerPlay());