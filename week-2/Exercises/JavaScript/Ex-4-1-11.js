/*Ex. 4.1.11 (*) - Play with while loop
Define three variables for the LaunchCode shuttle:
• one for the starting fuel level,
• another for the number of astronauts aboard,
• and the third for the altitude the shuttle reaches.
Construct while loops to do the following:
a) Prompt the user to enter the starting fuel level. The loop should continue until the user enters a positive
value greater than 5000 but less than 30000.
b) Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the
entry by having the loop continue until the user enters an integer from 1 - 7.
c) Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the
fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers. (Hint: The
loop should end when there is not enough fuel to boost the crew another 50 km, so the fuel level might
not reach 0).*/

var fuel = Number(prompt("Please enter the starting fuel level between 5000-30000: "));
while (fuel < 0 || fuel < 5000 || fuel > 30000) {
    var fuel = Number(prompt("Wrong! Please enter the starting fuel level between 5000-30000: "));
    if (fuel > 5000 && fuel < 30000){
        console.log("Amount of fuel is defined as " + fuel + ".")
        break;
    }
}

var astronaut = Number(prompt("Please enter the number of astronauts up to a maximum of 7: "));
while (astronaut < 1 || astronaut > 7) {
    var astronaut = Number(prompt("Wrong! Please enter the number of astronauts up to a maximum of 7: "));
    if (astronaut > 0 && astronaut < 8){
        console.log("Number of astronauts are defined as " + astronaut + ".")
        break;
    }
}

var altitude = 0;
var i = 1;
while ((fuel - (astronaut * 100)) >= (astronaut * 100)){
    fuel = fuel - (astronaut * 100);
    altitude = altitude + 50;
    console.log(astronaut + " " + "astronauts consumed " + (i*astronaut*100) + " liters fuel in " + i + " iteration and gained " + altitude + " km. Only " + fuel + " litres of fuel left.")
    i++;
}