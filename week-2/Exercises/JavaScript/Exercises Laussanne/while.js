let a = 1
while (a<=10) {
    console.log("This is while loop - Hello Powercoders! a = " + a);
    a++
}

var number = 1
while (true) {
    console.log("number is " + number);
    if (number % 5 === 0){
        break;
    }
    number++
}
console.log("number after the loop is " + number);

let number2 = (prompt("Enter a number:\n"));
console.log("You entered " + number2);