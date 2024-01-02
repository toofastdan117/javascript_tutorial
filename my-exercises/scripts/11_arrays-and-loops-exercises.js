// 11 Arrays and Loops Exercises


// 11a
let arrayA = [10, 20, 30];
console.log(arrayA);
arrayA[2] = 99;
console.log(arrayA);


// 11b
let arrayB = [1, 2, 3, 4, 5, 6, 7];
function getLastValue(array) {
  let arrayLength = array.length;
  let lastValue = array[arrayLength - 1];
  return lastValue;
}
console.log(getLastValue(arrayA));
console.log(getLastValue(arrayB));


// 11c
let arrayC = ['hi', 'hello', 'good'];
function arraySwap(array) {
  let firstValue = array[0]
  let lastValue = getLastValue(array);
  let arraySwapped = array;
  arraySwapped[0] = lastValue;
  arraySwapped[array.length - 1] = firstValue;
  return arraySwapped;
}
console.log(arraySwap(arrayC));
console.log(arraySwap(arrayB));


// 11d
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}


// 11e
for (let i = 5; i >= 0; i -= 1) {
  console.log(i);
}


// 11f
let i2 = 0
while (i2 <= 10) {
  console.log(i2);
  i2 += 2;
}

let e = 5
while (e >= 0) {
  console.log(e);
  e -= 1;
}


// 11g-i
let arrayG = [1, 2, 4];
let arrayG2 = [-2, -1, 0, 99];

function addOne (array, num) {
  let addOneArray = [];
  for (let g = 0; g < array.length; g++) {
    let gAdd = array[g] + num;
    addOneArray.push(gAdd);
  }
  return addOneArray;
}

console.log(addOne(arrayG, 3));
console.log(addOne(arrayG2, 2));


// 11j
let arrayH1 = [1, 1, 2];
let arrayH2 = [4, 5, 3];
function addArrays (array1, array2) {
  if (array1.length === array2.length) {
    let addedArrays = [];
    for (let j = 0; j < arrayH1.length; j++) {
      let addedNum = array1[j] + array2[j];
      addedArrays.push(addedNum);
    }
    return addedArrays;
  } else {
    console.log('Error: arrays cannot be added because they do not have the same length.')
  }
}
console.log(addArrays(arrayH1, arrayH2));
console.log(addArrays(arrayH2, arrayG));


// 11k
let arrayK1 = [1, -3, 5];
let arrayK2 = [-2, 3, -5, 7, 10];

function countPositive(array) {
  let positiveCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveCount++;
    }
  }
  return positiveCount;
}

console.log(countPositive(arrayK1));
console.log(countPositive(arrayK2));



// 11l-m
let arrayL1 = [1, -3, 5];
let arrayL2 = [-2, 3, -5, 7, 10];
let arrayL3 = [];
let arrayL4 = [3];

function minMax(nums) {
  const minmaxObject = { min: '', max: '' };
  let min = '';
  let max = '';

  if (nums.length === 0) {
    min = null;
    max = null;
  } else if (nums.length === 1) {
    min = nums[0];
    max = nums[0];
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    } else if (nums[i] > max) {
      max = nums[i];
    }
  }

  minmaxObject.min = min;
  minmaxObject.max = max;
  return minmaxObject;
}

console.log(minMax(arrayL1));
console.log(minMax(arrayL2));
console.log(minMax(arrayL3));
console.log(minMax(arrayL4));



// 11n - word counter

let arrayN1 = ['apple', 'grape', 'apple', 'apple', 'grape', 'grape', 'grape', 'cherry'];

let arrayN2 = ['I', 'goofed', 'with', 'that', 'survey', 'link', 'in', 'the', 'email', 'and', 'left', 'out', 'the', 'smart', 'goal', 'questions', 'we', 'like', 'to', 'have', 'you', 'guys', 'develop', 'sorry', 'please', 'use', 'this', 'link', 'and', 'disregard', 'the', 'link', 'ms.', 'back', 'just', 'sent', 'that', 'I', 'am', 'closing', 'apologies', 'to', 'the', '5', 'go', 'getters', 'who', 'already', 'filled', 'it', 'out', 'but', 'if', 'you', '5', 'could', 'fill', 'it', 'out', 'again', 'this', 'time', 'with', 'the', 'three', 'final', 'goal', 'questions', "I'll", 'give', 'you', 'guys', 'pretend', 'bonus', 'points']

function countWords(words) {
  let uniqueCounts = [];
  const wordList = {};

  for (let i = 0; i < words.length; i++) {
    if (!uniqueCounts.includes(words[i])) {
      uniqueCounts.push(words[i]);
      wordList[words[i]] = 1;
    } else {
      wordList[words[i]] += 1;
    }
  }
  return wordList;
}

console.log(countWords(arrayN1));
console.log(countWords(arrayN2));



//console.log(uniqueCounts);
//console.log(wordList);

//if (arrayN.includes(uniqueCounts[0])) {
//  console.log('yes')
//} else {
//  console.log('no')
//}

//const wordList = {};
//wordList[arrayN[0]] = 1;
//console.log(wordList)