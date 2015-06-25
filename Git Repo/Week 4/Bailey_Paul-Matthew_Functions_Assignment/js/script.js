/**
 * Created by matthewbailey on 6/23/15.
 */
//Paul-Matthew Bailey
//SDI Assignment: Function


//Pop-Up alert that lets the user knows what's going on.
alert("You\'re entering the PowerBall quick play. Click OK to continue, Good Luck!");

//Variables
var nameInput = prompt("Please enter your name"); //Prompt for user to enter name.


// ----------------------FUNCTION FOR VALIDATING USER NAME INPUT------------------------------
function nameEntered(firstName){ //User prompted to enter name.

    var timesClicked = 0; //Variable for times clicked.

    //While Loop
        //User prompted to enter name, after 3 attempts the loop will break.
    while (firstName === ""){

        firstName = prompt("You forgot to enter a name!"); //alert the user see when no value is entered.

        timesClicked++; //incrementing times clicked.

        if (timesClicked > 2){ //conditional statement (if times clicked is greater than or equal to 3

            console.log("You've exceeded the maximum amount of attempts!"); //Message the user see when there's no input.
            break; //break out of loop.
        }
     }

    return firstName; //returned value for firstName

}

//Variable
var numInput = prompt("Enter your PowerBall number (1-35) "); //Prompt for user to enter a number.


// -----------------------FUNCTION FOR VALIDATING USER NUMBER INPUT-----------------------------

 function numEntered(singleDigit){

    var timesClicked = 0;

    while (singleDigit === ""){

    //Code that runs when no value is entered.
        singleDigit = prompt("Enter your PowerBall Number!");

        timesClicked++; //Increments amount of times the link is clicked.

        if (timesClicked > 2){

            //Code that runs when link is clicked over 3 times.

            console.log("Sorry, you can\'t do that anymore!");
            break; //Break out of loop.
        }
    }

    return singleDigit; //Return value for singleDigit


}
//------------- FUNCTION FOR GENERATING POWERBALL RANDOM NUMBERS---------------------

function numGenerator(min, max, amount){

    var randomArray = []; //Random array variable

    //FOR LOOP

    for (var i = 0; i < amount; i++){

        var powerBallNum = Math.random() * (max - min) + min;
        randomArray [i] = Math.round(powerBallNum); // Round off to a whole number.

    }
    return randomArray; //return value for randomArray


}
// ----------------------------- MAIN CODE ---------------------------------------

console.log(alert); //Machine will print "You're entering the PowerBall quick play. Click OK to continue, Good luck!"

nameInput = nameEntered(nameInput); //value returned from firstName to nameInput (function call)
console.log ("Hey " + nameInput + "!"); //Machine  will print "Hey, (User Name)!"

numInput = numEntered(numInput); //value returned singleDigit to numInput.

lotto = numGenerator(1, 59, 5); //Lotto numbers randomly generated 1-59 with 5 numbers.

//Machine will print "Your lotto numbers are (5 random numbers) and your PowerBall number is (user input)!
console.log("Your quick play lotto numbers are " + lotto + " and your PowerBall number is " + "[" + numInput + "]!");