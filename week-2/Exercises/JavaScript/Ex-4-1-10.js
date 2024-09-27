/*Ex. 4.1.10 (*) - Play with arrays and for loop
Initialize two variables to hold the string LaunchCode and the array [1, 5, 'LC101', 'blue', 42], then
construct for loops to accomplish the following tasks:
a) Print each element of the array to a new line.
b) Print each character of the string -in reverse order- to a new line.*/

var varLaunchCode = "LaunchCode";
const myarray = [1, 5, 'LC101', 'blue', 42];

for(i = 0; i < myarray.length; i++){
    console.log(myarray[i]);
}

for(i = varLaunchCode.length; i >= 0; i--){
    console.log(varLaunchCode.charAt(i));
}