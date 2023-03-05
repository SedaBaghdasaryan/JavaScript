// _____________________________HOMEWORK 1______________________________________________

// ForEach function
let numberArrayForEach = [2, 4, 5, 60, 90, 45];

const multiplyByTen = (number) => {
  return number * 10;
};

function forEach(array, callbackFn) {
  if (array == undefined || array == null) {
    console.log('Your array is empty');
    return;
  }

  for (let i = 0; i < array.length; i++) {
    console.log(callbackFn(array[i]));
  }
}

forEach(numberArrayForEach, multiplyByTen);

// Filter function

const fruit = 'apple,banana,orange,apricot';

const fruitWithALetter = (string) => {
  return string[0] === 'a';
};

function filter(string, callbackFn) {
  let fruitNameArray = string.split(',');

  for (let i = 0; i < fruitNameArray.length; i++) {
    if (callbackFn(fruitNameArray[i])) {
      console.log(fruitNameArray[i]);
    }
  }
}
filter(fruit, fruitWithALetter);

// Map function

let firstName = ['Anna', 'Karen', 'Hakob'];
let lastName = ['Habobyna', 'Karpetyan', 'Minasyan'];

const concatString = (string1, string2) => {
  return string1 + ' ' + string2;
};

function map(array1, array2, callbackFn) {
  if (
    array1 == undefined ||
    array1 == null ||
    array2 == undefined ||
    array2 == null
  ) {
    console.log('The arrays cannot be empty');
    return;
  }
  if (array1.length !== array2.length) {
    console.log('The arrays length should be same');
    return;
  }

  for (let i = 0; i < array1.length; i++) {
    callbackFn(array1[i], array2[i]);
    console.log(callbackFn(array1[i], array2[i]));
  }
}

map(firstName, lastName, concatString);

// Reduce function

const numberArreyReduce = [3, 5, 6, 7, 9, 12, 34];

const sumOfArrey = (number, sum) => {
  return sum + number;
};

function reduce(array, callbackFn) {
  if (array == undefined || array == null) {
    console.log('The array cannot be empty');
    return;
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = callbackFn(array[i], sum);
  }
  console.log(sum);
}
reduce(numberArreyReduce, sumOfArrey);

// _____________________________HOMEWORK 2______________________________________________

// Uppercase function

const anyString = 'SDHJSueryurywuerywiu';

function uppercase(word) {
  let upperCaseResult = '';

  if (typeof word !== 'string') {
    return null;
  }

  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) <= 90) {
      upperCaseResult += word[i];
    } else {
      upperCaseResult += String.fromCharCode(word.charCodeAt(i) - 32);
    }
  }
  return upperCaseResult;
}

let uppercaseResult = uppercase(anyString);

console.log(uppercaseResult);

// lowerCase function

function lowerCase(word) {
  let lowerCaseResult = '';

  if (typeof word !== 'string') {
    return null;
  }

  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) >= 97) {
      lowerCaseResult += word[i];
    } else {
      lowerCaseResult += String.fromCharCode(word.charCodeAt(i) + 32);
    }
  }
  return lowerCaseResult;
}

let lowerCaseResult = lowerCase(anyString);

console.log(lowerCaseResult);
