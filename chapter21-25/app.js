// question # 1 start
// var firstName = prompt("enter   your first name")
// var lastName = prompt("enter   your last name")

// var fullName = firstName + " " +  lastName
// document.write(fullName)

// question # 1 end


// question # 2 start
// var mobileModel = prompt("Enter your favorite mobile phone model:");

// document.write("My favorite phone is: " + mobileModel + "<br>");
// document.write("Length of user input: " + mobileModel.length);

// question # 2 end



// question # 3 start
// var city = "pakistan"
// var citynew = city.indexOf("n")

// document.write("  string  : " + city)
// document.write("</br>")
// document.write("Index Of 'n'    :   " +    citynew)




// question # 3 end



// question # 4 start
//   var word = "Hello World";
//     var result = word.lastIndexOf("l");
//     document.write("  string  : " + word)
// document.write("</br>")
// document.write("Last Index Of 'l'    :   " +    result)

// question # 4 end





// question # 5 start
//   var word = "Pakistan";
//     var result = word.charAt(3);
//     document.write("  string  : " + word)
// document.write("</br>")
// document.write("character at index '3'    :   " +    result)

// question # 5 end




// question # 6 start

//   var firstName = prompt("Enter your first name:");
//     var lastName = prompt("Enter your last name:");

//     var fullName = firstName.concat(" ", lastName);

//     document.write("Hello " + fullName);
// question # 6 end




// question # 7 start

//  var word = "Hyderabad";
//     var result = word.replace("Hyder", "Islam");

//     document.write(result);

// question # 7 end



// question # 8 start
//  var message = "Ali and Sami are best friends. They play cricket and football together.";

//     var result = message.replaceAll("and", "&");

//     document.write(result);
// question # 8 end



// question # 9 start

//  var stringValue = "472";
//     var numberValue = Number(stringValue);

//     document.write("Value: " + numberValue + "<br>");
//     document.write("Type: " + typeof numberValue);
// question # 9 end



// question # 10 start
// var userInput = prompt("Enter any text:");

//     var result = userInput.toUpperCase();

//     document.write("User Input: " + userInput + "<br>");
//     document.write("Uppercase: " + result);
// question # 10 end




// question # 11 start
// var userInput = prompt("Enter any text:");

//     var words = userInput.split(" ");

//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//     }

//     var result = words.join(" ");

//     document.write("Title Case: " + result);

// question # 11 end


// question # 12 start

// var num = 35.36;

//     var result = num.toString();
//     result = result.replace(".", "");

//     document.write(result);
// question # 12 end



// question # 13 start

// var username = prompt("Enter your username:");

//     if (
//         username.includes("@") ||
//         username.includes(".") ||
//         username.includes(",") ||
//         username.includes("!")
//     ) {
//         alert("Please enter a valid username");
//     } else {
//         document.write("Valid Username: " + username);
//     }
// question # 13 end


// question # 14 start

//   var items = ["cake", "apple pie", "cookie", "chips", "patties"];

//     var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

//     userInput = userInput.toLowerCase();

//     if (items.includes(userInput)) {
//         document.write(userInput + " is available in our bakery.");
//     } else {
//         document.write("We are sorry. " + userInput + " is not available in our bakery.");
//     }

// question # 14 end


// question # 15 start

//    var password = prompt("Enter your password:");

//     document.write("Entered password: " + password + "<br>");

//     if (password.length < 6) {
//         document.write("Password must be at least 6 characters long<br>");
//         document.write("Please enter a valid password");
//     }
//     else if (/^[0-9]/.test(password)) {
//         document.write("Password can not begin with a number<br>");
//         document.write("Please enter a valid password");
//     }
//     else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
//         document.write("Password must contain alphabets and numbers<br>");
//         document.write("Please enter a valid password");
//     }
//     else {
//         document.write("Valid Password");
//     }

// question # 15 end



// question # 16 start
//  var university = "University of Karachi";

//     var array = university.split("");

//     for (var i = 0; i < array.length; i++) {
//         document.write(array[i] + "<br>");
//     }

// question # 16 end



// question # 17 start
// var userInput = prompt("Enter any word:");

//     var lastCharacter = userInput.charAt(userInput.length - 1);

//     document.write("User input: " + userInput + "<br>");
//     document.write("Last character of input: " + lastCharacter);


// question # 17 end


// question # 18 start
//  var sentence = "The quick brown fox jumps over the lazy dog";

//     var words = sentence.toLowerCase().split(" ");
//     var count = 0;

//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === "the") {
//             count++;
//         }
//     }

//     document.write("Text: " + sentence + "<br>");
//     document.write("There are " + count + " occurrence(s) of word 'the'");

// question # 18 end






