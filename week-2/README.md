Ex. 3.1.1 (*) - Print greeting
Create a program that prompts for your name and prints a greeting using your name.

-define a variable for the name
-request from the user to write down the name with a function to keep it in the memory.
-print this input to the screen with a fixed sentence but including that name in the memory.

Ex. 3.1.2 (*) - Add numbers ca. 30 min
Allow the user to input numbers, add them and print the result.

-define  variables  for the input numbers and 
                    for the sum of the given numbers.
-start a loop, ask user to give the numbers or print something to end the loop to finish calculation.
-in the loop, when user gives the number, add it to the sum. (sum = sum + number)
-when the loop finished by user, print sum to the screen with a fixed sentence but including sum which is in the memory.

Ex. 3.1.3 (*) - Which number is bigger? ca. 15 min
Declare 2 variables, both numbers. Compare which number is greater Log the output, e.g. "The greater number
of 5 and 10 is 10." Add an output for the else statement, e.g. "The smaller number of 5 and 10 is 5."

- define two variables 
- if num1 is bigger than num2, write output like "num 1 is greater than num2."
- if num2 is bigger than num1, write output like "num 2 is greater than num1."
- else write output like "two numbers are equal."
- if two numbers are not equal, write output like "smaller number is minimum (num1, num2)"

Ex. 3.1.4 (*) - Subtract numbers ca. 45 min
Allow the user to input numbers, subtract the smaller from the bigger number and print the result.

-define two variable for the numbers.
-define a result variable.
-ask user to give the numbers and take it to the memory.
- if num1 is bigger than num2, result = num1 - num2
- if num2 is bigger than num1, result = num2 - num1
- else result = 0
- write output like "the resul is (result)"

Ex. 3.1.5 (*) - Combine ca. 60 min
Combine Ex. 3.1.2 and 3.1.4 into one program.
The program should ask the user if they want to add or subtract two numbers. Then the program should ask
for the two numbers and print the result.

-define two variable num1, num2 for the numbers.
-define a result variable.
-define a function variable.
-ask user to choise adding function or substracting function. And take it to the memory for the function variable.
-ask user to insert two numbers to keep it in the memory.
-add function works like:
    result = num1 + num2
-substract function works like:
    if num1 is bigger than num2,    result = num1 - num2
    if num2 is bigger than num1,    result = num2 - num1
    else                            result = 0
-call the relevant function (function).
-write output like "the resul is (result)"

Ex. 3.2.1 (**) - FizzBuzz
Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the
number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print
"FizzBuzz".

-define variable number.
-For each number from 1 to 100;
    if number % 3           == 0    print "Fizz"
    if number % 5           == 0    print "Buzz"
    if number % 3 AND % 5   == 0    print "FizzBuzz"
    else                            print "(number)"

Ex. 3.2.2 (**) ca. 45 min
Write a program that asks the user for a date. Find the day of the year for the given date. For example,
January 1st would be 1, and December 31st is 365.
(a) Do not include leap years.
(b) Include leap years. Check the rules for leap years on the internet, and implement them in your program.

-define a variable total_days
-define a variable day
-define a variable month
-define a variable year
-create an array days_in_month that keeps the amount of the days of the months (31,28,31,30,31,30,31,31,30,31,30,31) 
-ask user to give the day, month and year in a way seperate and take it to the memory.
-without leap year function:
    total_days = (sum of the days in the array until that month) + day
    return total_days
    print "The date you entered is (total_days). day of the year."

-Is it a leap year function :
    if (year % 4 == 0 and year % 100 != 0) OR (year % 400 == 0):
        return True
    return False

-with leap year function:
    if (is it a leap year) is true
        days_in_month(1) == 29
    total_days = (sum of the days in the array until that month) + day
    return total_days
    print "The date you entered is (total_days). day of the year."

if (is it a leap year) is true
    call (with leap year function)
else
    call (without leap year function)

Ex. 3.3.1 (***) - Sorting algorithms
Write a sort algorithm yourself. (e.g. bubble sort)

-define an array of the input bay the user seperated with commas or spaces
-ask user to give the numbers for sorting and take it to the array.

until it remains only 1 number in the array,