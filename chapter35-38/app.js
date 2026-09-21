// question # 1 Start
// function showDateTime() {
//     let date = new Date();
//     document.write(date);
// }

// showDateTime();

// question # 1 end



// question # 2 Start
// let firstName = prompt("Enter your first Name")
// let lastName = prompt("Enter your last Name")
// function userName(name1 , name2){
//     document.write(`hello! ` + name1 + " "+ name2)

// }
// userName(firstName,lastName)

// question # 2 end





// question # 3 Start
//  function sum(){
//     let firstNum= Number(prompt('Enter first number'));
//     let secondNum= Number(prompt('Enter Second number'));
//     let result=firstNum+secondNum;
//     alert('The sum of '+firstNum+' and '+secondNum+' is '+result)
//     return result
// }
// sum();



// question # 3 end



// question # 4 Start

//  function calculator(num1,operator,num2){
//     if(operator==='+'){
//         var result= num1+num2;
//         alert(result)
//     }
//     else if(operator==='-'){
//         var result= num1-num2;
//         alert(result)
//     }
//     else if(operator==='*'){
//         var result= num1*num2;
//         alert(result)
//     }
//     else if(operator==='/'){
//         var result= num1/num2;
//         alert(result)
//     }
//     else{
//         alert('Invalid Operator')
//     }
// }
// let  firstNumber=Number(prompt('Enter first number'));
// let operator=prompt('Enter operator');
// let secondNumber=Number(prompt('Enter Second number'));
// calculator(firstNumber,operator,secondNumber);
// question # 4 end



// question # 5 Start

// function square(num){
//     let square=num**2;
//     alert(square)
// }
// let number=+prompt('Enter number to be square')
// square(number);

// question # 5 end


// question # 6 Start
// function factorial(num) {
//     let result = 1;

//     for (let i = num; i >= 1; i--) {
//         result = result * i;
//     }

//     return result;
// }

// let number = +prompt("Enter a number:");

// let answer = factorial(number);

// document.write("Factorial of " + number + " is " + answer);




// function factorial(){
// let n = +prompt('enter n')
// let fact = 1;
// if (n === 1 || n === 0) {
// }
// else {
//     for (var i = n; i >= 1; i--) {
//         fact = fact * i
//     }
// }
// document.write(fact)
// }
// factorial()

// question # 6 end


// question # 7 Start
//  function counting(start,end){
//     for(var i = start; i <= end; i++ ){
//         document.write(i + '<br>');
//     }
// }
// let start = Number(prompt("Enter start number for counting:"));
// let end = Number(prompt("Enter end number for counting:"));
// counting(start,end);

// question # 7 end



// question # 8 Start

// function calculateHypotenuse(base, perpendicular) {
//     let base, perpendicular;

//     function calculateSquare(num) {
//         num = num * num;
//         return num;
//     }
//     base = calculateSquare(base);
//     perpendicular = calculateSquare(perpendicular);
//     let hyp = base + perpendicular;

//     return hyp;

// }

// let base = Number( prompt('Enter base of right angle triangle'));
// let perpendicular = Number(prompt('Enter perpendicular of right angle triangle'));
// let hyp = calculateHypotenuse(base, perpendicular)
// alert('The hypotenuse of right angle triangle is ' + hyp)
// question #  8 end


// question # 9 Start
// function area(width, height) {
//     return width * height;
// }

// // i. Arguments as value
// let result1 = area(10, 5);
// document.write("Area using values: " + result1 + "<br>");

// // ii. Arguments as variables
// let width = 20;
// let height = 10;

// let result2 = area(width, height);
// document.write("Area using variables: " + result2);
// question # 9 end



// question # 10 Start
// function palindrome(string) {
//       let check = '';
//       for (var i = string.length - 1; i >= 0; i--) {
//             check += string[i]
//       }
//       if (string === check) {
//             alert(string + ' is a plindrome word')
//       }
//       else {
//             alert(string + ' is  not a plindrome word')

//       }
// }
// let str = prompt('Write any word')
// palindrome(str);

// question # 10 end



// question # 11 Start
// function capitalizeWords(string) {
//     let words = string.split(" ");

//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }

//     return words.join(" ");
// }

// let str = prompt("Enter a string:");

// let result = capitalizeWords(str);

// document.write(result);

// question # 11 end




// question # 12 Start
// function findLongestWord(string) {
//     let words = string.split(" ");
//     let longest = "";

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }

//     return longest;
// }

// let str = prompt("Enter a string:");

// let result = findLongestWord(str);

// document.write("Longest word is: " + result);
// question # 12 end



// question # 13 Start
// function countLetter(string, letter) {
//     let count = 0;

//     for (var i = 0; i < string.length; i++) {
//         if (string[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// let str = prompt("Enter a string:");
// let letter = prompt("Enter a letter:");

// let result = countLetter(str, letter);

// document.write("The letter " + letter + " occurs " + result + " time.");
// question # 13 end






// question # 14 Start
// function calcCircumference(radius) {
//     let circumference = 2 * Math.PI * radius;
//     document.write("The circumference is " + circumference + "<br>");
// }

// function calcArea(radius) {
//     let area = Math.PI * radius * radius;
//     document.write("The area is " + area);
// }

// let radius = +prompt("Enter the radius of the circle:");

// calcCircumference(radius);
// calcArea(radius);
// question # 14 end


























