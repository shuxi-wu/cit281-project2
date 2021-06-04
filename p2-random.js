/*
    CIT 281 Project 2
    Name: Shuxi Wu
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");


//return a single, random, lowercase letter
function getRandomLetter(){
    let index = getRandomInteger(0,alphabet.length-1)
    return alphabet[index]
}

//return the random length string
function getRandomString(minLength, maxLength) {
    let result = ''
    for (let i = 0; i < getRandomInteger(minLength, maxLength+1); i++) {
        result += getRandomLetter();
    }
    return result
}

console.log(getRandomString(10, 20))

//return a string in ascending order 
function getSortedString(string) {return string.split('').sort().join('')}

console.log(getSortedString(getRandomString(10,20)))