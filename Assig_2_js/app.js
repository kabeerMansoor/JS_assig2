//***************ASSIGNMENT 21-40 ************************************** */

//========================= Chapter 21 ==================================
// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.
// SOLUTION:
/*
var allLower = prompt("Enter something...").toLowerCase();
console.log(allLower);
*/


// 2. Convert the string represented by x to lower-case and assign the
// result to the same variable.
// SOLUTION:
/*
var x = "This Is Chapter No Twenty One".toLowerCase();
console.log(x);
*/


// 3. Convert the string represented by y to upper-case and assign the
// result to the same variable.
// SOLUTION:
/*
var y = "This Is Chapter No Twenty One".toUpperCase();
console.log(y);
*/



// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.
// SOLUTION:
/*
var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
var b = a;
console.log(b);
*/



// 5. Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.
// SOLUTION:
/*
var arr = ["KABEER","SHABBIR","FARAZ","ASHIR","HUZAIFA"];
for(var i = 0;i<arr.length;i++){
    arr[i]=arr[i].toLowerCase();
    var res = arr[i];
    console.log(res);
};
*/



// 6. Display in an alert the upper-case version of the string
// represented by a variable.
// SOLUTION:
/*
var a = "Hellow World".toUpperCase();
alert(a);
*/



// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.
// SOLUTION:
/*
var cityName = "kaRacHi";
var correct = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
console.log(correct);
*/






//========================= Chapter 22 - 25 (Strings) ===========================
// 1. "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.
// SOLUTION:
/*
var sameWords = "captain".slice(1,3);
console.log(sameWords);
*/



// 2. The number of characters in the string will be assigned to the
// variable.
// SOLUTION:
/*
var input = "HI How are you!";
var numberOfCharacters = input.length;
console.log(numberOfCharacters);
*/



// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.
// solution:
/*
var animal = "elephant".slice(2,6);
var seg = animal;
console.log(seg);
*/



// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.
// SOLUTION:
/*
var a = "This is JS Course : ";
var b = a.length;
console.log(b);
*/



// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.
// SOLUTION:
/*
var a = "Pakistan Zindabad";
console.log(a.length);
var b = a.slice(0,1)+a.slice(-3);
console.log(b);
*/



// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?
// SOLUTION:
/*
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);  //3
*/



// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// SOLUTION:
/*
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log(indx); //16
*/



// 8. Find the index of the first character of the last instance of "go" in
// the string represented by the variable text and assign the number
// to the variable indx, which hasn't been declared beforehand.
// SOLUTION:
/*
var text = "You must go, and then go again. Don't hesitate to go.";
var indx = (text.lastIndexOf("go"));
console.log(indx);
*/



// 9. Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.
// SOLUTION:
/*
var a = "Hello world";
var indexNum = 7;

if (a[indexNum] === "w") {
    console.log("Segment exists.");
} 
*/



// 10. In this string "abcde", what character is at index 2? (Use
//     charAt)
//     SOLUTION:
/*
var a = "abcde";
console.log(a.charAt(2)); //c
*/



// 11. Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.
// SOLUTION:
/*
var a = "this js course is helpful";
var cha = a.charAt(10);
console.log(cha);
*/



// 12. Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.
// SOLUTION:
/*
var str = "hello world!";
var x = str.slice(-1);
console.log(x);
*/



// 13. Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.
// SOLUTION:
/*
var input = "Hello world";
var cha = input.charAt(5);
console.log(cha);
*/




// 14. Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character.
// SOLUTION:
/*
var a = "hello world";
var b = "l";
if(a.charAt(3)===b){
    console.log("Yes verified:");
};
*/



// 15. Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to an
// element of an array that has been declared beforehand.

// In the string represented by reply replace the first instance of "no"
// with "yes" and assign the revised string to revisedReply, which hasn't
// been declared beforehand.
// SOLUTION:
//Part A
/*
var a = "My name is kabeer";
var b = [];
for(var i=0;i<a.length;i++){
    b.push(a.charAt(i));
}
console.log(b);
*/
//Part B
/*
var reply = "no, I don't think so. It's a no-go.";
var revisedReply = reply.replace("no","yes");
console.log(revisedReply);
*/



// 16. In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.
// SOLUTION:
/*
var str = "1ce upon a time";
var newStr = str.replace("1","one");
console.log(newStr);
*/



// 17. If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");
// SOLUTION:
/*
var x = "a b n a y a a t m a";
var y = x.replaceAll("a", "z");
console.log(y);
*/






//**************************** Chapter 26 (Rounding Numbers) ******************************** */
// 1. Form a statement that rounds a number to the nearest integer.
// SOLUTION:
/*
var roundNum = Math.round(5.6);
console.log(roundNum);
*/



// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
// SOLUTION:
/*
var origNum = 2.2;
var roundNum = Math.ceil(origNum);
console.log(roundNum);
*/



// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
// SOLUTION:
/*
var origNum = 2.7;
var roundNum = Math.floor(origNum);
console.log(roundNum);
*/



// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.
// SOLUTION:
/*
var num = 2.5;
var num2 = Math.round(num);
console.log(num2);
*/



// 5. Round .5 to 0 and assign it to a variable that hasn't been declared
// beforehand.
// SOLUTION:
/*
var num = 0.5;
var num2 = Math.floor(num);
console.log(num2);
*/







//******************************* Chapter 27 (Random Numbers) ************************************ */
// 1. Convert a random number generated by JavaScript to a number in
// the range 1 to 50
// SOLUTION:
/*
var a = Math.floor(Math.random() * 51);
console.log(a);
*/




// 2. Generate a random number and assign it to a variable that hasn't
// been declared beforehand.
// SOLUTION:
/*
var a = Math.floor(Math.random() * 51);
var res = a;
console.log(res);
*/



// 3. You have to create a dice in JavaScript with the use of pseudo-
// random number.
// SOLUTION:
/*
var a = Math.floor(Math.random() * 6)+1;
var dice = a;
console.log(dice);
*/



// 4. You have to create a toss (head/tail) in JavaScript with the use of
// pseudo-random number.
// SOLUTION:
/*
var toss = Math.round(Math.random());
if(toss === 0){
    console.log("Heads");
}else{
    console.log("Tails");
};
*/






//*********************  Chapter 28, 29 (Converting Strings)***********************************/
// 1. How do you convert a string to an integer in JavaScript?
// SOLUTION:
/*
var a = +"25";
console.log(typeof a);
*/



// 2. Write a JavaScript function to convert the string "123" to an
// integer.
// SOLUTION:
/*
var str = +"123";
console.log(str);
*/



// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?
// SOLUTION:
/*
var str = +"12.5";
console.log(str);
console.log(typeof str);
*/
//Another way:
/*
var decimalString = "3.14"; // Replace with your decimal string
var floatingPointNumber = parseFloat(decimalString);
console.log(typeof floatingPointNumber);
console.log("Floating-point number:", floatingPointNumber);
*/



// 4. How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?
// SOLUTION:
/*
var a = +"12345678";
if (typeof a === "number") { // Compare with "number" as a string
    console.log("Conversion Successfully of string into number.");
} else {
    console.log("Failed conversion.");
};
*/



// 5. How can you convert a number to a string in JavaScript?
// SOLUTION:
/*
var a = 123;
console.log(a);
var res = a.toString();
console.log(res , typeof res);
*/



// 6. Write a JavaScript function to convert the number 42 to a string.
// SOLUTION:
/*
var a = 42;
function convert (a){
   var b = a.toString();
   console.log(b + " " + typeof b);
}
convert(a);
*/




// 7. Can you convert a string representing a decimal number (e.g.,
//     "3.14") to an integer in JavaScript? If so, how?
//     SOLUTION:
/*
var decimalString = "3.14"; 
var integerNumber = parseInt(decimalString);

console.log("Integer number:", integerNumber + " " + typeof integerNumber);
*/








//******************** Chapter 30 (Controlling the length of decimals) ***********************/
// 1. Code a statement that rounds a number represented by num to 4
// places, converts it to a string, and assigns it to newNum, which
// hasn't been declared beforehand.
// SOLUITION:
/*
var num = 3.145647832;
var newNum = num.toFixed(4).toString();
console.log(newNum + " " + typeof newNum);
*/



// 2. In a single statement round a number represented by a variable to
// 2 places, convert it to a string, convert it back to a number, and
// assign it to the same variable.
// SOLUTION:
/*
var a = Math.round(2.56).toString();
a = +a;
console.log(a + " " + typeof a);
*/



// 3. Code the first line of an if statement that tests whether the
// number represented by num, rounded to 2 digits and converted
// to a string, has more than 4 characters in it.
// SOLUTION:
/*
var num = 1234.56789;
if (num.toFixed(2).toString().length > 4) {
   console.log("success");
}
*/



// 4. Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal
// places and converted to a string.
// SOLUTION:
/*
var a = 3.58763456;
a = a.toFixed(2); //two decimal points:
console.log(a);
a= Math.round(a); //round operation
console.log(a);
a= a.toString(); //convert number into string
console.log(a);
*/






//************************ Chapter 31 - 34 (Date & Time) **************************************/
// 1. Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand.
// SOLUTION:
/*
var date = new Date();
var dObj = date;
console.log(dObj);
*/



// 2. Code a statement that creates a new Date object, converts it to a
// string, and assigns the string to dStr, which hasn't been declared
// beforehand.
// SOLUTION:
/*
var date = new Date();
date = date.toString();
var dStr = date;
console.log(dStr , typeof dStr);
*/



// 3. Code a statement that extracts the day of the week from a Date
// object represented by d and assigns it to day, which hasn't been
// declared beforehand.
// SOLUTION:
/*
var d = new Date().getDay();
var day = d;
console.log(day); //6:
*/



// 4. The day has been extracted from the Date object and assigned to
// d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.
// SOLUTION:
/*
var d = new Date().getDay();
var day = d;
console.log(day); //6:
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
alert(days[day]); //Saturday:
*/



// 5. Extract all parts of the Date and Time and assign it to the variable
// which has not been declared beforehand.
// SOLUTION:
/*
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();
var hour = date.getHours();
var min =  date.getMinutes();
var sec = date.getSeconds();

console.log("The year is " + year);
console.log("The month is " + month);
console.log("The day is " + day);
console.log("The hour is " + hour);
console.log("The minutes is " + min);
console.log("The seconds is " + sec);
*/



// 6. Code a statement that creates a Date object for the last day of the
// last month of 2020 and assigns it to later, which hasn't been
// declared beforehand.
// SOLUTION:
/*
var DateObj = new Date(2020,11,31);
var later = DateObj;
console.log(later); //Thursday December 31 was the last day of 2020:
*/



// 7. Create a Date object for the second day of the second month of
// 1992 and assign it to a variable that hasn't been declared
// beforehand.
// SOLUTION:
/*
var dateObj = new Date(1992,1,2);
var result = dateObj;
console.log(result); //Sun Feb 02 1992
*/



// 8. Code a single statement that displays in an alert the milliseconds
// that elapsed between the reference date and the beginning of
// 1980.
// SOLUTION:
/*
var referenceDate = new Date();
var beg1980 = new Date(1980,0,1);
var milliSeconds = referenceDate - beg1980;
alert("the milliseconds that elapsed between the reference date and the beginning of 1980 is " + milliSeconds);//1377525187031
*/



// 9. How do you change the year of a date in JavaScript?
// SOLUTION:
/*
var date = new Date();
var desiredYear = date.setFullYear(2020); //Set your desired year:
console.log(date);// Wed Aug 26 2020
*/



// 10. Write a JavaScript function to change the month of a given
// date to January.
// SOLUTION:
/*
function changeMonth(){
    var date = new Date();
    console.log(date);
    var change = date.setMonth(0);
    console.log(date);
};

changeMonth(); //Thu Jan 26 2023
*/



// 11. What is the method to change the day of the week for a
// specific date in JavaScript?
// SOLUTION:







// 12. Write a JavaScript function to change the minutes of a given
// time to a specific value. (Value by prompt)
// SOLUTION:
/*
function changeMinutes (){
    var date = new Date();
    var input = +prompt("Enter time you want:");
    if(input >=0 && input <=59){
        date.setMinutes(input);
        console.log(date);
    }else{
        console.log("Enter minutes between 0 till 59");
    }
};
changeMinutes();
*/



// 13. Write a JavaScript function to add a specific number of
// hours to a given time.
// SOLUTION:
/*
function addHours(input) {
    var date = new Date();
    console.log("Original date:", date);
    date.setHours(date.getHours() + input);
    console.log("Updated date:", date);
  }
  
  var input = parseInt(prompt("Enter number of hours:"));
  addHours(input);
  */




//   14. You have to create a age calculator in JavaScript.
//   SOLUTION:
/*
function ageCalculator(inputAge) {
    var currentDate = new Date();
    var age = currentDate.getFullYear() - inputAge.getFullYear();
    console.log(age);
  }
  
  var inputAge = new Date(prompt("Enter Your Birth Date (YYYY-MM-DD):"));
  ageCalculator(inputAge);
  */






  //*******************  Chapter 35 - 37 (Functions) ***************************** */
//   1. Code the first line of a function displayAlert.
//   SOLUTION:
/*
function displayAlert(){
    alert("Question no 1 of Functoons:");
};
displayAlert();
*/


// 2. Code a function named askName that prompts the user to "Enter
// name" and assigns the answer to userName, which hasn't been
// declared beforehand.
// SOLUTION:
/*
var userName = prompt("Enter your name :");
function askName(userName){
    console.log("The name of the user is " + userName);
};
askName(userName);
*/



// 3. Code a function that calls 2 other functions.
// SOLUTION:
/*
function callTwoFunction(){
    a();
    b();
};
function a(){
    console.log("Hello world");
};
function b(){
    console.log("Bye world");
};

callTwoFunction();
*/



// 4. Code a function that displays a prompt, "Enter name" and then
// displays the name in an alert. Call the function.
// SOLUTION:
/*
function display(){
    var name = prompt("Enter name");
    alert(name);
};
display();
*/



// 5. Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that takes
// a variable, a string, and a number as arguments.
// SOLUTION:
/*
function named(a,b,c){
    console.log(a + " " + b + " " + c);
};
named("K","Kabeer",4);
*/



// 6. Code a function that has 2 parameters. Concatenate them and
// assign the result to a variable that hasn't been declared
// beforehand.
// SOLUTION:
/*
function parameter2(name,lastName){
    var concat = name + " " + lastName ;
    console.log(concat);
};
parameter2("kabeer","Mansoor");
*/



// 7. Code a function that has three parameters. Multiply them and
// assign them to a variable that hasn't been declared yet.
// SOLUTION:
/*
function multiply(a,b,c){
    console.log("The Multiplication is : " + a*b*c);
};
multiply(2,6,8); //96
*/



// 8. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.
// SOLUTION:
/*
function averageNumbers(){
    
    var arr = [12,45,36,78,90,23,49,67];
    var sum =0;
    for(var i=0;i<arr.length;i++){
        sum = sum + arr[i];
    };
    console.log(sum);
    var avg = sum/arr.length;
    console.log("The average of Numbers is : " + avg);
};
averageNumbers();
*/



// 9. Write a JavaScript function that takes two parameters and returns
// their sum.
// SOLUTION:
/*
function sum(a,b){
    console.log("The sum is "+ (a+b));
};
sum(34,67);
*/



// 10. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.
// SOLUTION:
/*
function calculateAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum / arr.length);
}

var arr = [2, 3, 4, 5, 6, 7, 8];
calculateAverage(arr); //5
*/



// 11. You have to capture the returned value from a function and
// store it in a variable?
// SOLUTION:
/*
function captured(a,b){
    return a+b;
};
var capturedValue = captured(4,5);
console.log(capturedValue);
*/



// 12. Write a function which tells letter counts of (word).
// SOLUTION:
/*
var letter = "word"
function letterCount(letter){
    console.log(letter.length);
};
letterCount(letter); //4
*/



// 13. Write a function to set (year) in date object.
// SOLUTION:
/*
function setYear(){
    var date = new Date();
     date.setYear("2020");
    console.log(date);
};
setYear();
*/



// 14. Write a function which tells the age of a person who Born on
// (dateOfBirth)
// SOLUTUON:
/*
var input = prompt("Enter your Date of Birth:");

function dateOfBirth(input) {
    var currentDate = new Date();
    var dob = new Date(input);
    var age = currentDate.getFullYear() - dob.getFullYear();
    console.log(age);
}

dateOfBirth(input);
*/



// 15. Write a function which tells the presense of (word) in an
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false
// SOLUTION:
/*
var arr =['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
var userInput = prompt("Enter Name:");
function trueOrFalse(userInput){
    for(var i=0;i<arr.length;i++){
        if(userInput==arr[i]){
            console.log("true:")
        }else{
            console.log("false");
        }
    };
};
trueOrFalse(userInput);
*/



// 16. Write a function which repeat (letter) 10 times.
// Hint: "abcde" str.repeat(10)
// SOLUTION:
/*
var name = "kabeer ";
function repeat(name){
    console.log(name.repeat(10));
};
repeat(name);
*/

// 17. write a function which reverse array = ['a','b','c','d','e']
// Hint: arr.reverse()
// SOLUTION:
/*
var arr = ["Kabeer","Faraz","Baba","Farrukh","Ashir","Huzaifa","Ratan"];
function reverseArray(arr){
    console.log(arr.reverse());
};
reverseArray(arr);
*/






//************************** Chapter 38 (Local vs. Global Variables) **********************/
// 1. Write a JavaScript function that demonstrates the usage of a local
// variable.
// SOLUTION:
/*
var a = "Hello"; //Global variable
function localVariable(){
    var a = "bye"; //local variable
    console.log(a);
};
localVariable();
console.log(a);
*/
/*
var a = "Hello"; //Global variable
function localVariable(){
    var b = "bye"; //local variable
    console.log(b);
};
console.log(b); // Error b is not defined bcz b is inside function and acts as local variable:
console.log(a);
*/



// 2. How can you access a global variable inside a function in
// JavaScript?
// SOLUTION:
/*
var a = "kabeer";

function accessGlobalVariable(a){
    var b = a;
    console.log(b);
};
accessGlobalVariable(a);
*/






//******************* Chapter 39, 40 (Switch Statements) **********************************/
// Chapter 39, 40 (Switch Statements)
// 1. Write a JavaScript switch statement that checks the value of a
// variable and performs different actions based on different cases.
// SOLUTION:
/*
var a = prompt("Enter a Number:");
var b = prompt("Enter a Number:");
var c = prompt("Enter operator");

a = parseFloat(a); 
b = parseFloat(b);

switch (c) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        console.log(a / b);
        break;
    default:
        console.log("Enter valid numbers and operator.");
};
*/



// 2. Write a JavaScript switch statement that check whether cityName
// given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user.
// SOLUTION:
/*
var cityName = prompt("Enter your city name :").toLowerCase();
switch(cityName){
    case "karachi":{
        alert("Your city is present in the list " + cityName);
        break;
    };
    case "lahore":{
        alert("Your city is present in the list " + cityName);
        break;
    };
    case "islamabad":{
        alert("Your city is present in the list " + cityName);
        break;
    };
    case "multan":{
        alert("Your city is present in the list " + cityName);
        break;
    };
    case "quetta":{
        alert("Your city is present in the list " + cityName);
        break;
    };
    case "peshawer":{
        alert("Your city is present in the list " + cityName);
        break;
    };
    default : {
        console.log("Your city is not present in the list: " + cityName);
    }
};
*/




                         // ================= THE END ================= //                      