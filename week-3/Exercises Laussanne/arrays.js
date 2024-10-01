let topics = ["HTML", "CSS", "JS"];
console.log(topics);

let firstTopic = topics[0];

topics[2] = "jQuery";
// Possible to overwrite a value in an array
console.log(topics[2]);
console.log("Last version of the array is " + topics);

console.log(topics.length);

let timeSpent = [
  ["Work", 9],
  ["Eat", 2],
  ["Commute", 1],
  ["Watch TV", 2],
  ["Sleep", 7],
];

console.log(timeSpent[0][1]);

console.log(timeSpent[0].length);

let list = ["doors", "windows", "rooms"];
for (let item of list) {
  console.log(item);
}
for (let char of "hello") {
  console.log(char);
}

const t1 = ["HTML", "CSS"];
const t2 = ["JS", "PHP"];
const topicss = t1.concat(t2);
console.log(topicss);
console.log(topicss.toString());

for (i = 0; i < topicss.length; i++) {
  console.log(topicss[i]);
}
