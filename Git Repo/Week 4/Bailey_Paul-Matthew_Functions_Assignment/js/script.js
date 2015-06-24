/**
 * Created by matthewbailey on 6/23/15.
 */
//Paul-Matthew Bailey
//SDI Assignment: Function

//Variables
var nameInput = prompt("Please enter your name"); //Prompt for user to enter name.

// ----------Function for validating User String Input-----------
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

// --------Function for Validating user Number Input------------

function numEntered(singleDigit){

    var timesClicked = 0;

    while (singleDigit === ""){

        singleDigit = prompt("Enter your PowerBall Number!");

        timesClicked++;

        if (timesClicked > 2){

            console.log("Sorry, you can\'t do that anymore!");
            break;
        }
    }

    return singleDigit;


}





// Main Code
nameInput = nameEntered(nameInput); //value returned form firstName to nameInput
console.log ("Hey " + nameInput + "!"); //Machine  will print "Hey, (User Name)!"

numInput = numEntered(numInput);
console.log ("Your PowerBall number is " + numInput +".")

