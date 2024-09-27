/*Ex. 4.1.8 (*) - Print multiplication table
Write a program that prints the multiplication table of the number 7. (Use a loop)*/

var result;
for (i = 1; i < 11; i++){
    result = i * 7;
    console.log(i + " " + "x" + " " + "7" + " " + "=" + " " + result);
}