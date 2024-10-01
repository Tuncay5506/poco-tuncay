/*Ex. 4.1.11 (*) - Objects and Arrays
• Create an array with the names of five cities. Access and log the third city in the array.
• Create an array of numbers [5, 10, 15, 20]. Add a number at the end, remove the first number, and log
the final array.
• Create an object representing a book with properties title, author, and year. Log the book’s title.*/

let cityArray = ["Geneva", "Zurich", "Lausanne", "Bern", "Valais"];
let thirdCity = cityArray[2];
console.log(thirdCity);



let numberArray = [5, 10, 15, 20];
numberArray.push(88);
numberArray.shift();
console.log(numberArray);



const book = {
    title: "Les Miserables",
    author: "Victor Hugo",
    year: "1888"
    };
console.log(book.title);
