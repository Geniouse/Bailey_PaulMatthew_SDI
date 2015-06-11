/**
 * Created by matthewbailey on 6/9/15.
 */
    //SDI Assignment: Expressions
    // Calculating the area of a triangle.

var userName =      prompt("Enter Your Name") + ",";
var triangleBase   = 36; //Triangle Base figure placed here...
var triangleHeight =  9; //Triangle Height figure placed here...
var solution       = triangleBase * triangleHeight /2 // Solution = base * height divided by 2
var stringArea     = " The area of your triangle is" + " " + solution; //A String text followed by the solution to the problem.

var quickGuide = [27, 9];
var exampleGuide = "\nmultiply base & height then divide by 2 \nin order to get the area of the triangle\n" //written solution of how to arrive at the answer
var example = "For example" + " " + quickGuide[0] + "x" + quickGuide[1] + "/2 = 121.5" ; //Example shown with the use of array.

console.log (userName + stringArea + exampleGuide +example); //Solution to the area of a triangle will be printed to the console.