const h1Element = document.getElementById('header');
const pElement = document.getElementById('paragraph');
const aElement = document.getElementById('link');

for (let i = 1; i <= 2; i++) {
  h1Element.innerHTML += ' ' + i;
}

for (let i = 1; i <= 4; i++) {
  pElement.innerHTML = i + ' ' + pElement.innerHTML;
}

for (let i = 1; i <= 7; i++) {
  aElement.innerHTML = i;
}
