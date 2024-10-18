// Define the images for dice faces
const diceImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];

let rollCount = 0;

// Function to generate a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice images and show results
function playGame() {
    // Roll two dice
    const dice1Value = rollDice();
    const dice2Value = rollDice();
    
    // Update the dice images
    document.getElementById("dice1").src = diceImages[dice1Value - 1];
    document.getElementById("dice2").src = diceImages[dice2Value - 1];

    // Update the result text
    let resultText = `You rolled ${dice1Value} and ${dice2Value}.`;
    
    if (dice1Value === dice2Value) {
        resultText += " It's a double!";
    }

    document.getElementById("result").textContent = resultText;

    // Increment roll counter and display it
    rollCount++;
    document.getElementById("rollCounter").textContent = `Rolls: ${rollCount}`;
}

// Add event listener to the button
document.getElementById("rollButton").addEventListener("click", playGame);
