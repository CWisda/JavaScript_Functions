console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

/*
We declare a function named printOdds using function declaration notation.
The function takes one parameter named count, which represents the number up to which we want to count.
Inside the function body, we use a for loop to iterate from 1 to the count value.
Within the loop, we use an if statement to check if the current value (i) is odd by using the condition i % 2 !== 0. If it's odd, we log the value of i to the console using console.log(i).
The loop continues until i reaches the count value, printing out all the odd numbers in between.
*/

function printOdds(count) {
    if (count < 0) {
        for (let i = 0; i >= count; i--);
    } else  {
    for (i = 1; i <= count; i++) {
        if( i % 2 !==0) {
        console.log(i);
     } 
    } 

}

printOdds(10);

//bonus question negative number 

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// NAME - AGE function 

/*We declare a function named checkAge using function declaration notation.
The function takes two parameters: userName (for the name) and age.
Inside the function body, we declare and initialize two local variables aboveSixteen and belowSixteen with the appropriate greeting messages using template literals (`).
We use an if/else statement to check if the age is below 16. If it is, we log the message stored in the belowSixteen variable to the console. Otherwise, we log the message stored in the aboveSixteen variable to the console. */

function checkAge(userName, age) { 
    if (userName) {
        console.log("Please provide a valid username");
        return;
    }
    const aboveSixteen = (`Congrats ${userName}, you can drive!`);
    const belowSixteen = (`Sorry ${userName}, but you need to wait until you're 16.`);
     if (age < 16) {
     console.log(belowSixteen);
} else if (age >=16) {
    console.log(aboveSixteen);
} else {
    console.log("Invalid age");
}

}

checkAge("Serena", 12);
checkAge("Charles", 42);


/* BONUS: Remember that parameters are optional, and no userName or age value could be passed in. Correctly account for no parameter being passed in. */


/* Write a function that receives two parameters, x and y coordinates in the Cartesian plane, and prints out a message indicating if the point (x, y) lies on either the x or y axis, or what quadrant the point lies in.

For example:

(0, 2) is on the y axis
(1, 2) is in Quadrant 1
(-6, 18) is in Quadrant 2 
*/


function getQuadrant (x, y) {
    if (x == undefined || y == undefined) { 
        console.log("Invalid (x, y) location");
        return null;
    }
    if (x == 0 && y == 0) {
        console.log("Origin Point");
    } else if (x == 0) { 
        console.log("y-axis");
    } else if (y === 0) {
        console.log("x-axis");
    } else if (x > 0 && y > 0) { 
        console.log("Quadrant 1");
    } else if (x < 0 && y > 0) {
        console.log("Quadrant 2");
    } else if (x < 0 && y < 0) {
        console.log("Quadrant 3");
    } else {
        console.log("Quadrant 4");
    }
}

getQuadrant(0, 2); // Output: The point (0, 2) is on the y-axis.
getQuadrant(1, 2); // Output: The point (1, 2) is in Quadrant 1.
getQuadrant(-6, 18); // Output: The point (-6, 18) is in Quadrant 2.
getQuadrant(0, 0);



// Question 4 - what type of Triangle


function getTriangleType(side1, side2, side3) {
    if (
      side1 + side2 <= side3 ||
      side1 + side3 <= side2 ||
      side2 + side3 <= side1
    ) {
      return "Invalid triangle length";
    } 
     if (side1 === side2 && side2 === side3) {
      return "Equilateral triangle length";
    } 
     if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "Isosceles triangle: Only two side lengths are equal.";
    } else {
      return "Scalene";
    }
}

console.log(getTriangleType(1, 2, 2)); // Output: Isosceles triangle: Only two side lengths are equal.
console.log(triangleType(1, 1, 2));  // Output: Invalid triangle: The sum of two sides should be greater than the length of the third side.

console.log(getTriangleType(3, 4, 5));
console.log(getTriangleType(4, 1, 2));
console.log(getTriangleType(3, 3, 3));
console.log(getTriangleType(2, 2, 4));





// Question 5 Data plan Usage 

function dataPlan(planLimit, currDay, usageSoFar) { 
    const daysRemaining = 30 - currDay;
    const idealAverage = planLimit/ 30;
    const dataRemaining = planLimit - usageSoFar;
    const currAvgUsage = usageSoFar / currDay;
    const projectedUsage = currAveUsage * 30;
    const exceededUsage = projectedUSage - planLimit;
    const underUsage = (planLimit - projectedUsage);
    const newIdealUsage = (dataRemaining / daysRemaining);

    let output = "";

   {
    output += '${currDay} days used, ${daysRemaining} days remaining/nAverage daily use: ${currAveUsage} GB/day\n';

     if (exceedingUsage > 0) {
    output += 'You are EXCEEDING your average daily use (${currAveUsage} GB/day), continuing this high usage, you will exceed your data plan by ${exceededUsage} GB. \nTo stay below your data plan, use no more than ${newIdealUsage} GB/day.`;
     } else if (underUsage > 0) {

     }

    console.log(output);
}

dataPlan(100, 15, 56)

