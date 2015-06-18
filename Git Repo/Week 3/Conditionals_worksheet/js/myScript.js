/**
 * Created by matthewbailey on 6/18/15.
 */
//Paul-Matthew Bailey
//Conditionals Worksheet

//Group 1
//Last Chance for Gas!

var carMpg = 40;        //vehicle miles per gallon (number variable)
var gasCapacity = 5;    // Amount of gallons in vehicle (number variable)
var milesTravel = 200;  // Amount of miles to travel (Number variable)

(carMpg * gasCapacity > milesTravel) ? console.log("Yes, you can make it without stopping for gas!") : console.log("you only have " + gasCapacity + " gallons of gas in your tank, better get gas now while you can!");


//Group 2: Multiple Results
//Grade Letter calculator

var aboveAverage = "A"; //Letter Grade variable
var good         = "B"; //Letter Grade variable
var okay         = "C"; //Letter Grade variable
var studentGrade = 91;  //student Grade number variable

console.log("You have a " + studentGrade + "%" + " ," + "which means you have earned a(n) " + aboveAverage + " in the class!");

//Group 4: Multiple conditions.
//Movie Ticket Price
var seniorAge = 55; //Number variable
var childAge = 10;  //Number variable
var movieTime = 4;  //Number variable
customerAge = 63;   //Number variable

(customerAge >= seniorAge) ? console.log("The ticket price is $7") : console.log("The ticket Price is $12");