//                                      Video 110 Udemy Exercises
 
 // Guess what answers you would get if you ran this in the Javascript Console in Google Chrome.

//Evaluate the below:
//5 + "34" = 534 ----Correct
//5 - "4" = 1 ---Correct
//10 % 5 = 0 ---Correct
//5 % 10 = 5 ---Correct
//"Java" + "Script" =Javascript ---Correct
//" " + " "  = "  " ---Correct
//" " + 0  = " 0" ---Correct
//true + true = true ---Incorrect (2)
//true + false = 1 ---Correct
//false + true = 1 ---Correct
//false - true = -1 ----Correct
//3 - 4 = -1 ---Correct
//"Bob" - "bill" = NaN ---Correct

//Evaluate the below comparisons:
//5 >= 1 =True Correct
//0 === 1  = False0 ---Correct
//4 <= 1 = False ----Correct
//1 != 1 = False  ---Correct
//"A" > "B" = False ---Correct
//"B" < "C"  = True ---Correct
//"a" > "A" = False ---Incorrect (True)
//"b" < "A" = False ---Correct
//true === false = False ---Correct
//true != true = False ---Correct

// Make the string: "Hi There! It's "sunny" out" by using the + sign:
// Answer: "Hi There" + "!" + " " + "It\'s Sunny out" ----Correct




//                               Video 112 Udemy Exercises

// Evaluate what answers you would get if you ran this in the Javascript Console in Google Chrome.

// add variable "firstName" and "lastName" /// so that they equal your name 

let firstName = "Javier";
let lastName = "Cunat";

// create a variable that holds the answer /// of "firstName" + " " + "lastName"

let fullName = firstName + " " + lastName; 

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
a + b // what is the answer here?

//Answer 23

// What is c equal to?
var c;

//Undefined since not assigned

//                                  Video 113 Udemy Exercises 

// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

// BONUS: Make a program that can subtract, multiply, and also divide!

let firstNumber = prompt("Enter first number");
let secondNumber = prompt("Enter second number");
let sum = alert(Number(firstNumber) + Number(secondNumber));


//                                   Video 116 Udemy Exercises

// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

let ageCalculator = prompt("What is your age?");

if (Number(ageCalculator) < 18) {
    alert("Sorry you are too young to drive this car, powering off.");
}
else if (Number(ageCalculator) === 18) {
    alert("Congragulations on your first year driving. Enjoy the ride!");
}
else if (Number(ageCalculator) > 18) {
    alert("Powering on. Enjoy your ride");
}
else if (Number(ageCalculator) >= 80){
    alert("You shouldnt be driving at this age.");
}


//                                  Video 119 Udemy Exercises


//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!

let a = function checkDriverAge() {

    let ageCalculator = prompt("What is your age?");

    if (Number(ageCalculator) < 18) {
        alert("Sorry you are too young to drive this car, powering off.");
    }
    else if (Number(ageCalculator) === 18) {
        alert("Congragulations on your first year driving. Enjoy the ride!");
    }
    else if (Number(ageCalculator) > 18) {
        alert("Powering on. Enjoy your ride");
    }
    else if (Number(ageCalculator) >= 80){
        alert("You shouldnt be driving at this age.");
    }
}

let checkDriverAge2 = function(){
    let ageCalculator = prompt("What is your age?");

if (Number(ageCalculator) < 18) {
    alert("Sorry you are too young to drive this car, powering off.");
}
else if (Number(ageCalculator) === 18) {
    alert("Congragulations on your first year driving. Enjoy the ride!");
}
else if (Number(ageCalculator) > 18) {
    alert("Powering on. Enjoy your ride");
}
else if (Number(ageCalculator) >= 80){
    alert("You shouldnt be driving at this age.");
}
}

fucntion checkDriverAge(ageCalculator){
   // let ageCalculator = console.log("What is your age")

   if (Number(ageCalculator) < 18) {
       return "Sorry you are too young to drive this car, powering off.";
   } else if (Number(ageCalculator) === 18 ) {
       return "Congragulations on your first year of driving. Enjoy the ride!"
   } else if (Number(ageCalculator) > 18) {
       return "Powering on. Enjoy your ride"
   }
}