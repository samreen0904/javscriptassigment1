// question # 1 start


// var number = prompt("Enter a positive number:");

// document.write("Number: " + number + "<br>");
// document.write("Round off value: " + Math.round(number) + "<br>");
// document.write("Floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number));
// question # 1 end



// question # 2 start
// var number = prompt("Enter a negative floating point number:");

// document.write("Number: " + number + "<br>");
// document.write("Round off value: " + Math.round(number) + "<br>");
// document.write("Floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number));
// question # 2 end




// question # 3 start

// var number = prompt("Enter a number:");

// document.write("Number: " + number + "<br>");
// document.write("Absolute value: " + Math.abs(number));
// question # 3 end




// question # 4 start
// var dice = Math.floor(Math.random() * 6) + 1;

// document.write("Dice value: " + dice);
// question # 4 end




// question # 5 start

// var coin = Math.floor(Math.random() * 2);

// if (coin === 0) {
//     document.write("Coin value: Heads");
// } else {
//     document.write("Coin value: Tails");
// }
// question # 5 end

// question # 6 start
// var randomNumber = Math.floor(Math.random() * 100) + 1;

// document.write("Random number: " + randomNumber);
// question # 6 end



// question # 7 start
// var weight = prompt("Enter your weight:");

// var parsedWeight = parseFloat(weight);

// document.write("Your weight is: " + parsedWeight + " kg");
// question # 7 end







// question # 8 start

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userNumber = prompt("Enter a number between 1 and 10:");

if (userNumber == secretNumber) {
    document.write("Congratulations! You guessed the secret number.");
}
else{

    alert("your number  wrong guessed ")
}
// question # 8 end