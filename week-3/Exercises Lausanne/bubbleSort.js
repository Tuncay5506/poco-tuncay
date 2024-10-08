let myInput = [2, 3, 1, 5, 2, 2, 2, 5, 99, 6, 92, 88];
let myOutput = bubbleSort(myInput);

function bubbleSort(arr) {
  let len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    len--;
  } while (swapped);

  return arr;
}

function printArrayInOneLine(array, separator = ", ") {
  let text = "[";
  for (i = 0; i < array.length; i++) {
    text = text + array[i];
    if (i != array.length - 1) {
      text = text + separator;
    }
  }
  text = text + "]";
  console.log(text);
}
printArrayInOneLine(myOutput);
