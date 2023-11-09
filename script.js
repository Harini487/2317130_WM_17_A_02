// Variables to store player names and scores
let player1Name, player2Name;
let player1Score = 0;
let player2Score = 0;

// Variable to track the current player's turn
let currentPlayer = 1;

// Function to start the game, called when the "Start Game" button is clicked
function startGame() {
  // Get player names from input fields
  player1Name = document.getElementById("player1").value;
  player2Name = document.getElementById("player2").value;

  // Check if both players have entered their names
  if (player1Name && player2Name) {
    // Display player names in the H1 and enable the "Roll Dice" button
    document.getElementById(
      "winner-text"
    ).innerText = `${player1Name} vs ${player2Name}🚩`;
    document.getElementById("roll-btn").disabled = false;
    document.getElementById("start-btn").disabled = true;

    // Alert the players about the winning condition
    alert(`The first player to reach 20 points wins!`);
  } else {
    // Alert if one or both players have not entered their names
    alert("Please enter names for both players.");
  }
}

// Function to simulate rolling the dice when the "Roll Dice" button is clicked
function rollDice() {
  // Generate random dice results for both players
  const player1Result = Math.floor(Math.random() * 6) + 1;
  const player2Result = Math.floor(Math.random() * 6) + 1;

  // Update dice images based on the current player's turn
  if (currentPlayer === 1) {
    // Player 1's turn, update only left dice
    document.getElementById(
      "player1-dice"
    ).src = `images/dice${player1Result}.png`;
  } else {
    // Player 2's turn, update only right dice
    document.getElementById(
      "player2-dice"
    ).src = `images/dice${player2Result}.png`;
  }

  // Update scores based on the dice results
  updateScores(player1Result, player2Result);
}

// Function to update scores and switch players
function updateScores(player1Result, player2Result) {
  // Update the score of the current player based on the dice result
  if (currentPlayer === 1) {
    player1Score += player1Result;
    // Display updated score for Player 1
    document.getElementById(
      "player1-score"
    ).innerText = `${player1Name} Score: ${player1Score}`;
  } else {
    player2Score += player2Result;
    // Display updated score for Player 2
    document.getElementById(
      "player2-score"
    ).innerText = `${player2Name} Score: ${player2Score}`;
  }

  // Check if there is a winner
  checkWinner();
}

// Function to check if there is a winner
function checkWinner() {
  // Check if either player's score is equal to or exceeds 20
  if (player1Score >= 20 || player2Score >= 20) {
    // Determine the winner based on the higher score
    const winner = player1Score > player2Score ? player1Name : player2Name;

    // Display the winner in the H1
    document.getElementById("winner-text").innerText = `${winner} wins!🎉`;

    // Ask if players want to play again
    alert("Do you want to play again?");

    // Reset the game
    resetGame();
  } else {
    // Switch players for the next turn
    currentPlayer = currentPlayer === 1 ? 2 : 1;
  }
}

// Function to reset the game to its initial state
function resetGame() {
  // Reset scores and current player
  player1Score = 0;
  player2Score = 0;
  currentPlayer = 1;

  // Display initial scores and enable the "Start Game" button
  document.getElementById(
    "player1-score"
  ).innerText = `${player1Name} Score: 0`;
  document.getElementById(
    "player2-score"
  ).innerText = `${player2Name} Score: 0`;
  document.getElementById("player1-dice").src = "images/dice1.png";
  document.getElementById("player2-dice").src = "images/dice1.png";
  document.getElementById("roll-btn").disabled = true;
  document.getElementById("start-btn").disabled = false;
}
