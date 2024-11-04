
let theFavNumber = 3;
let guess = null;

while (guess !== theFavNumber) {
    guess = parseInt(prompt("Guess the favorite number:"), 10);

    if (guess < theFavNumber) {
        alert("Too low! Try again.");
    } else if (guess > theFavNumber) {
        alert("Too high! Try again.");
    } else if (guess === theFavNumber) {
        alert("Correct! You've guessed the favorite number.");
    } else {
        alert("Please enter a valid number.");
    }
}