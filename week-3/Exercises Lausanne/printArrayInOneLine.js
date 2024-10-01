let myArray = [1, 2, 3, -1];
let numberOfElements = myArray.length;

function printArrayInOneLine(array, separator = ", "){
    let text = "[";
    for (i = 0; i < array.length; i++){
        text = text + array[i];
        if (i != array.length-1){
            text = text + separator;
        }
    }
    text = text + "]"
    console.log(text);
}
printArrayInOneLine(myArray);
printArrayInOneLine(myArray, separator = "; ");