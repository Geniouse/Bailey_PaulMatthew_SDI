/**
 * Created by matthewbailey on 6/19/15.
 */
//Paul-Matthew Bailey
//6-19-15
//Functions Worksheet

//Calculate the circumference of a circle.

// Formula for circumference of a circle is 2 * pie(3.14) * radius
var calcCircumference = function(a, pie, radius){
    //code the function runs
    var circumference = a * pie * radius;
    return circumference;
}
var ans = calcCircumference(2, 3.14, 6); //invoking

//After machine works out the problem it will print "The circumference of your circle is X"
console.log("The circumference of your circle is " +  ans);

