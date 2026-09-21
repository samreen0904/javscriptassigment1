// question # 1 start
// function power(a, b) {
//     let result = 1;
//     let i = 1;

//     while (i <= b) {
//         result = result * a;
//         i++;
//     }

//     return result;
// }

// let a = +prompt("Enter base number:");
// let b = +prompt("Enter power:");

// let answer = power(a, b);

// document.write(a + " raised to " + b + " is " + answer);
// question # 1 end

//  question #2  start
// function checkLeapYear(year) {
//     if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//         return "Leap Year";
//     } else {
//         return "Not a Leap Year";
//     }
// }

// let year = +prompt("Enter a year:");

// let result = checkLeapYear(year);

// document.write(result);
// question # 2 end



// question # 3 start
// function area(s1, s2, s3) {
//     let S = findS(s1, s2, s3);
//     let area = S*(S - a)*(S - b)*(S - c);
//     return area;
// }
// function findS(a, b, c) {
//     let find = (a + b + c) / 2
//     return find
// }
// let a = +prompt('length a');
// let b = +prompt('length b');
// let c = +prompt('length c');
// let result = area(a, b, c)
// document.write('The area of triangle is '+result)



// question # 3 end



// question # 4 start

// function calculateAverage(marks1, marks2, marks3) {
//     let average = (marks1 + marks2 + marks3) / 3;
//     return average;
// }

// function calculatePercentage(marks1, marks2, marks3) {
//     let total = marks1 + marks2 + marks3;
//     let percentage = (total / 300) * 100;
//     return percentage;
// }

// function mainFunction() {
//     let marks1 = Number(prompt("Enter marks of Subject 1"));
//     let marks2 = Number(prompt("Enter marks of Subject 2"));
//     let marks3 = Number(prompt("Enter marks of Subject 3"));

//     let average = calculateAverage(marks1, marks2, marks3);
//     let percentage = calculatePercentage(marks1, marks2, marks3);

//     document.write("Average = " + average + "<br>");
//     document.write("Percentage = " + percentage + "%");
// }


// mainFunction();
// question # 4 end


// question # 5 start
// function myIndexOf(string, character) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === character) {
//             return i;
//         }
//     }

//     return -1;
// }

// let word = prompt("Enter a word:");
// let character = prompt("Enter a character:");

// let result = myIndexOf(word, character);

// document.write("Index = " + result);




// question # 5 end



// question # 6 start
// function removeVowels(sentence) {
//     let result = "";

//     for (let i = 0; i < sentence.length; i++) {
//         if (
//             sentence[i] !== "a" &&
//             sentence[i] !== "e" &&
//             sentence[i] !== "i" &&
//             sentence[i] !== "o" &&
//             sentence[i] !== "u"
//         ) {
//             result += sentence[i];
//         }
//     }

//     return result;
// }

// let sentence = prompt("Enter a sentence:");

// let result = removeVowels(sentence);

// document.write("After removing vowels: " + result);

// question # 6 end



// question # 7 start
// function countVowels(sentence) {
//     let count = 0;

//     for (let i = 0; i < sentence.length - 1; i++) {

//         let pair = sentence[i] + sentence[i + 1];

//         switch (pair) {
//             case "aa":
//             case "ae":
//             case "ai":
//             case "ao":
//             case "au":
//             case "ea":
//             case "ee":
//             case "ei":
//             case "eo":
//             case "eu":
//             case "ia":
//             case "ie":
//             case "ii":
//             case "io":
//             case "iu":
//             case "oa":
//             case "oe":
//             case "oi":
//             case "oo":
//             case "ou":
//             case "ua":
//             case "ue":
//             case "ui":
//             case "uo":
//             case "uu":
//                 count++;
//                 break;
//         }
//     }

//     return count;
// }

// let sentence = prompt("Enter a sentence:");

// let result = countVowels(sentence);

// document.write("Number of occurrences of two vowels in succession: " + result);
// question # 7 end



// question # 8 start
// function convertToMeters(km) {
//     let meters = km * 1000;
//     return meters;
// }

// function convertToFeet(km) {
//     let feet = km * 3280.84;
//     return feet;
// }

// function convertToInches(km) {
//     let inches = km * 39370.08;
//     return inches;
// }

// function convertToCentimeters(km) {
//     let centimeters = km * 100000;
//     return centimeters;
// }

// function mainFunction() {
//     let distance = Number(prompt("Enter distance in kilometers:"));

//     let meters = convertToMeters(distance);
//     let feet = convertToFeet(distance);
//     let inches = convertToInches(distance);
//     let centimeters = convertToCentimeters(distance);

//     document.write("Distance in meters = " + meters + "<br>");
//     document.write("Distance in feet = " + feet + "<br>");
//     document.write("Distance in inches = " + inches + "<br>");
//     document.write("Distance in centimeters = " + centimeters);
// }

// mainFunction();
// question # 8 end



// question # 9 start
// function calculateOvertime(hours) {
//     let overtimeHours = 0;
//     let overtimePay = 0;

//     if (hours > 40) {
//         overtimeHours = hours - 40;
//         overtimePay = overtimeHours * 12;
//     }

//     return overtimePay;
// }

// function mainFunction() {
//     let hours = Number(prompt("Enter hours worked:"));

//     let pay = calculateOvertime(hours);

//     document.write("Overtime Pay = Rs. " + pay);
// }

// mainFunction();
// question # 9 end



// question # 10 start
function calculateNotes(amount) {
    let notes100 = Math.floor(amount / 100);
    amount = amount % 100;

    let notes50 = Math.floor(amount / 50);
    amount = amount % 50;

    let notes10 = Math.floor(amount / 10);

    document.write("100 rupee notes = " + notes100 + "<br>");
    document.write("50 rupee notes = " + notes50 + "<br>");
    document.write("10 rupee notes = " + notes10);
}

function mainFunction() {
    let amount = Number(prompt("Enter amount:"));

    calculateNotes(amount);
}

mainFunction();
// question # 10 end