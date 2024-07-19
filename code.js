console.log(`--------------------------
    Question 1: \n`);
//Question #01-- Create an array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Question #1a-- Subtract the value of the first element from the value of the last element
console.log(ages[ages.length - 1] - ages[0]);

//Question #1b-- Add a new age to the array
ages.push(45);

// Repeat the subtraction step to ensure it is dynamic
console.log(ages[ages.length - 1] - ages[0]);

//Question #1c-- Calculate the average age
let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i];
}
let averageAge = totalAge / ages.length;
console.log(averageAge);

console.log(`--------------------------
    Question 2: \n`);

// Create an array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Question # 2a--Calculate the average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log(averageLetters);

//Question #2b-- Concatenate all the names together, separated by spaces
let allNames = '';
for (let i = 0; i < names.length; i++) {
    allNames += names[i] + ' ';
}
console.log(allNames.trim());

console.log(`--------------------------
    Question 3: \n`);

//Question # 03-- Access the last element of any array
console.log(names[names.length - 1]);

console.log(`--------------------------
    Question 4: \n`);

//Question # 04-- Access the first element of any array
console.log(names[0]);

console.log(`--------------------------
    Question 5: \n`);

//Question # 05 Create a new array called nameLengths
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

console.log(`--------------------------
    Question 6: \n`);
//Question # 06 Calculate the sum of all the elements in the nameLengths array
let totalNameLength = 0;
for (let i = 0; i < nameLengths.length; i++) {
    totalNameLength += nameLengths[i];
}
console.log(totalNameLength);

console.log(`--------------------------
    Question 7: \n`);

//Question # 07-- Function to concatenate a word to itself n times
function repeatWord(word, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}
console.log(repeatWord('Hello', 3));

console.log(`--------------------------
    Question 8: \n`);

//Question # 08-- Function to return a full name
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(getFullName('Samera', 'Iftikhar'));

console.log(`--------------------------
    Question 9: \n`);

// Question # 09--Function to check if the sum of an array is greater than 100
function isSumGreaterThan100(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}
console.log(isSumGreaterThan100([20, 30, 40, 50, 60]));

console.log(`--------------------------
    Question 10: \n`);
//Question # 10-- Function to return the average of an array
function getAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log(getAverage([10, 20, 30, 40, 50]));

console.log(`--------------------------
    Question 11: \n`);

// Question # 11--Function to compare the averages of two arrays
function compareAverages(array1, array2) {
    let average1 = getAverage(array1);
    let average2 = getAverage(array2);
    return average1 > average2;
}
console.log(compareAverages([10, 20, 30], [5, 15, 25]));

console.log(`--------------------------
    Question 12: \n`);

// Question # 12--Function to decide whether to buy a drink
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 11));

console.log(`--------------------------
    Question 13: \n`);

// Question # 13--Custom function example
// This function checks if a number is even
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));
