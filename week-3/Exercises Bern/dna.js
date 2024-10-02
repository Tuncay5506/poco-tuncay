let dna = prompt("Enter the DNA code please: ");
while (dna.length > 1000) {
  dna = prompt(
    "The code must not be longer than 1000! Please enter the DNA code again: "
  );
}
function countDNA(code) {
  let a = 0;
  let g = 0;
  let c = 0;
  let t = 0;
  code = code.toLowerCase();
  for (let i = 0; i < code.length; i++) {
    if (code[i] === "a") {
      a++;
    } else if (code[i] === "g") {
      g++;
    } else if (code[i] === "c") {
      c++;
    } else if (code[i] === "t") {
      t++;
    } else {
      alert(
        "For your information, you have entered different letter/letters than A, G, C, T!"
      );
      return;
    }
  }
  console.log("A: " + a + " G: " + g + " C: " + c + " T: " + t);
  console.log(`A: ${a} G: ${g} C: ${c} T: ${t}`);
}
countDNA(dna);