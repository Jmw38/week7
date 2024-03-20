//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//Do not use numbers to reference the last element, find it programmatically. `length`
//ages[7] - ages[0] is not allowed!
//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//Use a loop to iterate through the array and calculate the average age.

//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//Use a loop to iterate through the array and calculate the average number of letters per name.
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

//How do you access the last element of any array?

//How do you access the first element of any array?


//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:

//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

//Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

//Write a function that takes an array of numbers and returns the average of all the elements in the array.

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//const ages = [3, 9, 23, 64, 2, 8, 28, 93];
//ages.push(42);
//console.log(ages);

//const firstElement = ages[1];
//const lastElement = ages[ages.length - 1];
//const difference = lastElement - firstElement;
//console.log(difference);

//let sum = 0;
//for (let i = 0; i < ages.length; i++) {
   // sum += ages[i];
//}
//const averageAge = sum / ages.length;
//console.log(averageAge);

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
const averageLettersPerName = totalLetters / names.length;
console.log('Average number of letters per name:', averageLettersPerName);


let concatenatedNames = '';

for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i];
    if (i < names.length - 1) {
        concatenatedNames += ' '; // Add a space except for the last name
    }
}

console.log('Concatenated names:', concatenatedNames);


//const myArray = [1, 2, 3, 4, 5];
//const lastElement = myArray[myArray.length - 1];
//console.log(lastElement); 

//const myArray = [10, 20, 30, 40, 50];
//const firstElement = myArray[0];
//console.log(firstElement); 

//let nameLengths = [];


//for (let i = 0; i < names.length; i++) {
   // const name = names[i];
    //const length = name.length;
    //nameLengths.push(length);
//}

//console.log(nameLengths);

//const nameLengths = [3, 5, 3, 5, 4, 3];
//let sum = 0;
//for (let i = 0; i < nameLengths.length; i++) {
    //sum += nameLengths[i];
//}
//console.log(sum);

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const nameLengths = [3, 5, 3, 5, 4, 3];
const totalSum = calculateSum(nameLengths);
console.log(totalSum);

function repeatedWord(word, n) {
    let repeatedWord = '';
    for (let i = 0; i < n; i++) {
        repeatedWord += word;
    }
    return repeatedWord;
}

const result = repeatedWord('hello', 3);
console.log(result);


function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const fullName = getFullName('Josh', 'Wilson');
console.log(fullName);


function isSumGreaterThan100(numbers) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum > 100;
}
const numberArray = [10, 20, 30, 50];
console.log(isSumGreaterThan100(numberArray));


function calculateAverages(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numberArray.length;
    return average;
}
const numbersArray = [10, 20, 30, 40, 50];
console.log(calculateAverages(numberArray));


function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numbers.length;
    return average;
}
function compareAverages( array1, array2) {
    const average1 = calculateAverage(array1);
    const average2 = calculateAverage(array2);
    return average1 > average2;
}
const firstArray = [10, 20, 30, 40, 50];
const secondArray = [5, 15, 25, 35, 45];
console.log(compareAverages(firstArray, secondArray));

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
const hotOutside = true;
const money = 15.75;
console.log(willBuyDrink(hotOutside, money));

// This calculate the area inside the rectangle.
function calculateRectangleArea(length, width) {
    if (length <= 0 || width <= 0) {
        throw new Error('Length and width must be a positive number.');
    }
    return length * width;
}

// Example usage:
const length = 5;
const width = 10;
const area = calculateRectangleArea(length, width);
console.log('The area of the rectangle is:', area);