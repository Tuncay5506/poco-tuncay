var target_number = Math.floor((Math.random() * 100) + 1);
var attempts = 0;
const prompt = require("prompt-sync")();

function isNumber(value) {
    return typeof value === 'number';
  }

while (true){
    var guess = Number(prompt ("Enter your guess: "));
    attempts++

    if (isNaN(guess) || (guess < 0 || guess > 100)){
        console.log("Please enter a valid number between 0-100");
    }

    if (guess < target_number){
        console.log("Too low, try again!");
    }

    if (guess > target_number){
        console.log("Too high, try again!");
    }

    if (guess === target_number){
        console.log("Congratulations! You've guessed the number " + target_number + " " + "in " + attempts + " " + "attempts.");
        break;
    }
}