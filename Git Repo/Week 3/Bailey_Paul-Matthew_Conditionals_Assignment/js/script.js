/**
 * Created by matthewbailey on 6/17/15.
 */

//SDI
//Assignment: Conditionals
//Paul-Matthew Bailey
// 6-18-15

var customerName  = prompt("Please Enter your Name");                            //Prompt user for name
var cashOnHand    = prompt("How much money are you willing to spend?");          //Prompt user for budget.
var loan          = prompt("How much did you get loaned");                       //Prompt user for loans received by friends, family etc.
var carPrice      = prompt("Enter the price of the car");                        //Prompt user to enter a value of desired vehicle.
var additionalTax = 2000;                                                        //Number variable.
var totalAmount   = Number(cashOnHand) + Number(loan) - additionalTax;

console.log("My name is " + customerName + ".");
console.log("I currently have " + "$" + cashOnHand + " to spend. ");
console.log("I just got a " + "$" + loan + " loan!");
console.log("The car cost " + "$" + carPrice);
console.log("They told me that the additional taxes wil be approximately " + "$" + additionalTax);
console.log("I would end up with " + "$" + totalAmount  + " after paying taxes.");

//validate all of the user's entry

if(customerName === "") {

    //code that runs if construction is false and customerName === nothing
    customerName = prompt("You didn\'t enter your name!!");
    console.log("You entered " + customerName + " as your name");

}

if(cashOnHand === "") {

    //code that runs if construction is false and cashOnHand === nothing
    cashOnHand = prompt("Please enter your budget");
    console.log("You entered " + "$" + cashOnHand + " for your budget.");
}

if(loan === "") {

    //code that runs if construction is false and loan === nothing
    loan = prompt("Please enter the loan amount");
    console.log("You entered " + "$" + loan + " for loan the amount.");
}
if(carPrice === "") {

    //code that runs if construction is false and carPrice === nothing
    carPrice = prompt("Please enter the car amount");
    console.log("You entered " + " $" + carPrice + " for the car amount.");
}
    //Conditions of purchasing a car.
if(totalAmount >= carPrice){

    //code that runs if the condition is true
    console.log("You can purchase this car!");

}else{
    //If the user can't afford the car the "this car cost too much for you, sorry!" will be printed to the console.
    console.log("This car cost too much for you, sorry!");
}
    // If the car price is less that the available cash then print to the console "you can afford this car!" otherwise "Sorry, you can't afford this car!"
    // (Ternary conditional Statement) with logical operator.
(cashOnHand && loan >= carPrice) ? console.log("You can afford this car!") : console.log("Sorry, You can\'t afford this.");

