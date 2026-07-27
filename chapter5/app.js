// question # 1 start
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var num1 = 3;
var num2 = 5;
var total = num1 + num2;
document.write("Sum of  " +     num1 + "  and   " + num2 + "   is      "    +    total  +   "<br>" )
// question # 1 end


// question # 2 start
// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// subtraction
var num1 = 3;
var num2 = 5;
var total = num1 - num2;
document.write("Subtraction  of  " +     num1 + "  and   " + num2 + "   is      "    +    total + "<br>" )


// multiplication
var num1 = 3;
var num2 = 5;
var total = num1 * num2;
document.write("multiplication  of  " +     num1 + "  and   " + num2 + "   is      "    +    total + "<br>" )



var num1 = 3;
var num2 = 5;
var total = num1 / num2;
document.write("division  of  " +     num1 + "  and   " + num2 + "   is      "    +    total + "<br>" )




var num1 = 3;
var num2 = 5;
var total = num1 % num2;
document.write("modulus  of  " +     num1 + "  and   " + num2 + "   is      "    +    total  + "<br>" + "<br>")
// question # 2 end



// question # 3 start
// 3. Do the following using JS Mathematic Expressions

// a. Declare a variable
var myVar;

// b. Show value after declaration
document.write("Value after variable declaration is " + myVar + "<br>");

// c. Initialize the variable with 5
myVar = 5;

// d. Show initial value
document.write("Initial value: " + myVar + "<br>");

// e. Increment the variable
myVar++;

// f. Show value after increment
document.write("Value after increment is: " + myVar + "<br>");

// g. Add 7 to the variable
myVar = myVar + 7;

// h. Show value after addition
document.write("Value after addition is: " + myVar + "<br>");

// i. Decrement the variable
myVar--;

// j. Show value after decrement
document.write("Value after decrement is: " + myVar + "<br>");

// k & l. Show the remainder after dividing by 3
var remainder = myVar % 3;
document.write("The remainder is : " + remainder + "<br>")

// question # 3 end


// question # 4 start
// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticketPrice = 600;
var totalCost = ticketPrice * 5;

document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR" + "<br>" + "<br>");
// question # 4 end




// question # 5 start
// 5. Write a script to display multiplication table of any
// number in your browser. E.g
var number = 4;

document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br>" + "<br>");
// question # 5 end



// question # 6 start
// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheit = 70;
var celsius = (fahrenheit - 32) * 5/9;

document.write(fahrenheit + "°F is " + celsius + "°C");


// question # 6 end



// question # 7 start
// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser


var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h1>Shopping Cart</h1>");

document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br><br>");

document.write("Shipping Charges " + shippingCharges + "<br><br>");

document.write("Total cost of your order is " + totalCost);
// question # 7 end


// question # 8 start
// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser



var totalMarks = 980;
var marksObtained = 804;

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>");

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");


// question # 8 end


// question # 9 start
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


var usDollar = 10;
var saudiRiyal = 25;

var totalPKR = (usDollar * 104.80) + (saudiRiyal * 28);

document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: " + totalPKR + "<br>" + "<br>");


// question # 9 end



// question # 10 start
// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var num = 10;

var result = ((num + 5) * 10) / 2;

document.write("Result: " + result);
// question # 10 end


// question # 11 start
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

var currentYear = 2026;
var birthYear = 2009;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h1>Age Calculator</h1>");

document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("My age is : " + age2   +  " years old.");

 // question # 11 end



 // question # 12 start
//  12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)



var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("<h1>The Geometrizer</h1>");

document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);
 // question # 12 end



 // question # 13 start
//  13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

var favoriteSnack = "Chocolate Chip";
var currentAge = 17;
var maximumAge = 65;
var amountPerDay = 3;

var totalNeeded = (maximumAge - currentAge) * 365 * amountPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1>");

document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maximumAge + "<br>");
document.write("Amount of Snacks per Day: " + amountPerDay + "<br><br>");

document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");
 // question # 13 end





 






