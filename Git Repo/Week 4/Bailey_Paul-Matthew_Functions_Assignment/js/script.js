/**
 * Created by matthewbailey on 6/23/15.
 */
//Paul-Matthew Bailey
//SDI Assignment: Function

//Variables
var nameInput = prompt("Please enter your name"); //Prompt for user to enter name.

//functions

function nameEntered(firstName){

    var timesClicked = 1;

    while (firstName === ""){

        firstName = prompt("You forgot to enter a name!");

        timesClicked++;

        if (timesClicked >= 3){

            console.log("You've exceeded the maximum amount of attempts!");
            break;
        }
     }

    return firstName;
