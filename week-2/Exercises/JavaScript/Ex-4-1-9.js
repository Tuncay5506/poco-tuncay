/*Ex. 4.1.9 (*) - Play with for loop
Construct for loops that accomplish the following tasks:
• Print the numbers 0 - 20, one number per line.
• Print only the ODD values from 3 - 29, one number per line.
• Print the EVEN numbers 12 down to -14 in descending order, one number per line.
• Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.*/

for (i = 0; i <= 20; i++){
    console.log(i);
}

console.log("=================================================");

for (i = 3; i <= 29; i++){
    if(i % 2 == 1){
        console.log(i);
    }   
}

console.log("=================================================");

for (i = 12; i >= -14; i--){
    if(i % 2 == 0){
        console.log(i);
    }   
}

console.log("=================================================");

for (i = 50; i >= 20; i--){
    if(i % 3 == 0){
        console.log(i);
    }   
}
