// JavaScript function to generate a random number between 1 and 10
function getRandomNumber() {
    // Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)
    return Math.floor(Math.random() * 10) + 1;
}

// Call the function to get a random number
console.log(getRandomNumber());
