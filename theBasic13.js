const printOneToNum = (num) => {
    for(let i=1; i <= num; i++) {
        console.log(i);
    }
}
printOneToNum(255);

const sumOfZeroToNum = (num) => {
    let sum = 0;
    for(let i = 0; i <= num; i++) {
        sum+=i;
    }
    console.log(sum)
}
sumOfZeroToNum(255);

const findLargestIntInArray = (array) => {
    let largestInt = array[0];
    for(let i = 0; i < array.length; i++) {
        if (array[i] > largestInt) {
            largestInt = array[i];
        }
    }
    console.log(largestInt);
}
findLargestIntInArray([1,2,3,4,5]);

const zeroToNumArrayOfOdds = (num) => {
    let oddArray = [];
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            oddArray.push(i);
        }
    }
    console.log(oddArray);
}
zeroToNumArrayOfOdds(255);

const arrayValuesGreaterThanY = (array, y) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > y) {
            console.log(array[i]);
        }
    }
}
arrayValuesGreaterThanY([1,2,3,4,5], 3);

const maxMinAverageOfNumbersFromArray = (array) => {
    let max = array[0];
    let min = array[0];
    let average = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        } 
        if (array[i] < min ) {
            min = array[i]
        }
        average+=array[i];
    }
    
    console.log("max: " + max);
    console.log("min: " + min);
    console.log("average: " + average/array.length);
}
maxMinAverageOfNumbersFromArray([1,2,3]);

const negativeValuesEqualDojo = (array) => {
    const string = 'Dojo';
    for(let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = string;
        }
    }
    console.log(array);
}
negativeValuesEqualDojo([-1,-2,-3, 5, 6]);

const printOddNumbersOneToNum = (num) => {
    for ( let i = 1; i <= num; i++) {
        if(i % 2 !== 0) {
            console.log(i);
        }
    }
}
printOddNumbersOneToNum(255);

const iterateArrayPrintValues = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
iterateArrayPrintValues([1,2,3,4,5]);

const averageOfArray = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum+=array[i];
    }
    console.log(sum / array.length);
}
averageOfArray([1,2,3,4,5,6]);

const changeArrayValuesToSquaredValues = (array) => {
    for(let i = 0; i < array.length; i++) {
        array[i] = array[i]*array[i];
    }
    console.log(array);
}
changeArrayValuesToSquaredValues([1,2,3,4,5]);

const changeNegativeNumbersToZeroInArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
    console.log(array);
}
changeNegativeNumbersToZeroInArray([1,2,-1,2,3]);