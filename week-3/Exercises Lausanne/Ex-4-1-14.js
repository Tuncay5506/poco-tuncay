/*Ex. 4.1.14 (**) - Objects
• Create an object person with properties firstName, lastName, and a method fullName that returns the
full name.
• Create an object student with properties name, age, and an array of objects representing courses (with
courseName and grade). Write a function to log the student’s name and their course grades.*/

const person = {
  firstName: "Tuncay",
  lastName: "Kaya",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

const student = {
  name: "Tuncay",
  age: 39,
  courses: [
    { courseName: "Math", grade: "A" },
    { courseName: "Science", grade: "B+" },
    { courseName: "History", grade: "A-" },
  ],
  logGrades: function () {
    console.log("Student Name: " + this.name);
    console.log("Course Grades:");
    this.courses.forEach((course) => {
      console.log("\t" + course.courseName + "\t" + ":" + course.grade);
    });
  },
};
student.logGrades();