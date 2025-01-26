function rollDice() {
    const numofDice = document.getElementById("numofDice").value; // Get the number of dice
    const diceResult = document.getElementById("diceResult"); // Element to display results
    const diceImages = document.getElementById("diceImage"); // Element to display dice images
    const values = [];
    const images = [];

    for (let i = 0; i < numofDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1; // Generate random dice value (1-6)
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`); // Corrected backtick usage
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`; // Proper string interpolation with backticks
    diceImages.innerHTML = images.join(''); // Set images to the container
}
