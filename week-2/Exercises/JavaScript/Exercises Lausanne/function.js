printNumbers(1, 10);
printNumbers(-10, -5);
printNumbers(0, 1000);

function printNumbers(start, end)
{
    console.log("printing form " + start + " to " + end);
    for (let i = start; i <= end; i++){
        console.log(i);
    }
    console.log("==============================");
}