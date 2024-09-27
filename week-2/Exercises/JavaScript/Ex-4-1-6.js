/*Ex. 4.1.6 (*) - Age Calculator
Want to find out how old you’ll be? Calculate it!
• Use prompt() and alert().
• Ask user for birth year.
• Ask user for a future year.
• Calculate the 2 possible ages for the given year.
• Output them to the screen/console like so: "I will be either NN or NN in YYYY", substituting the values.
For example, if you were born in 1988, then in 2026 you’ll be either 37 or 38, depending on what month it is in
2026.
Additional Task: Ask for precise dates.*/

var birth = Number(prompt("Please enter your birth year: "));
var future = Number(prompt("Please enter the year in the future to calculate how old will you be in that time: "));
var age = future - birth;

console.log("In " + future + "," + " " + "you will be " + age + " " + "years old.");
