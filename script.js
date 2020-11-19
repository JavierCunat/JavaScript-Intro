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

let a = fucntion checkDriverAge(ageCalculator){
   // let ageCalculator = console.log("What is your age")

   if (Number(ageCalculator) < 18) {
       return "Sorry you are too young to drive this car, powering off.";
   } else if (Number(ageCalculator) === 18 ) {
       return "Congragulations on your first year of driving. Enjoy the ride!"
   } else if (Number(ageCalculator) > 18) {
       return "Powering on. Enjoy your ride"
   }
}

//                                 Video 121 Udemy Exercises

// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

/// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]

let array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift(); //Shifts to the left removing Banana

array.sort(); //sorts original array

array.push("Kiwi"); //pushes kiwi to last element in array

array.splice(0,1); //replaces at index 1 for nothing

array.reverse(); //puts array in reverse order

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

let array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1][0]);


//                                       Video 123 Udemy Exercises

// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let facebook = {
    username: "guest",
    password: "cchscchs"
}

let database = [
    {
        username: "guest",
        password: "cchscchs"
    }
]

let newsfeed = [
    {
        username: "Larrubia",
        timeline: "Im the teacher"
    },

    {
        username: "Javi",
        timeline: "Im the owner"
    },

    {
        username: "Guest",
        timeline: "Im a guest"
    }
]

