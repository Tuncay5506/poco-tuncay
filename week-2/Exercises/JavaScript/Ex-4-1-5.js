/*Ex. 4.1.5 (*) - Even or Odd
Write a program that asks for the user to input a number:
• If the number is even, print "The number is even."
• If the number is odd, print "The number is odd."
• If it is not a number, print "This is not a number."*/

var number = (prompt("Please enter a number: "));

if(number % 2 == 0){
    console.log("The number is even.");
}
else{
    console.log("The number is odd.");
}

if (isNaN(number)){
    console.log("Please enter a valid number!");
}