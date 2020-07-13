const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

// 1) print out array of inventers starting with 'A'
let aName = inventors.filter(function(word) {
    return word[0] === 'A';
})

console.log(aName)

// 2) print array of inventers whose name contains 'n'
let matchedWords = [];

let nName = inventors.filter(function(word) {
    for (i = 0; i < word.length; i++) {
        if (word[i] === 'n') {
            matchedWords.push(word);
            break;
        }
    }

    return word;
})

console.log(matchedWords)

// easier way

let findName = inventors.filter(function(word) {
    return word.includes('n')
})

// 3 array whose name has same letters twice in a row

let nameOutput = inventors.filter(name => {

    let arrayName = name.split('')
    let result = false;


    arrayName.map((_, i) => {
        if (arrayName[i] === arrayName[i + 1]) {
            result = true;
        }
    })

    return result;
})

console.log(nameOutput)

// 4 print array of odd numbers

let oddOutput = numbers.filter(number => (number % 2) !== 0)

console.log(oddOutput)

// 5 print array of numbers with 2 digits

let doubleDigit = numbers.filter(number => number > 9 && number < 100)

console.log(doubleDigit)

// 6 print numbers that are prime

let primeNumbers = numbers.filter((number) => {

    if (number === 1 || number == 2) {
        return true
    }

    for (i = 2; i <= Math.sqrt(number); i++) {

        if (number % i === 0) {
            return false;
        } else {
            return true
        };
    }
});

console.log(primeNumbers)

// 7 - print first names only

let firstNames = inventors.map(names => {

    let splitNames = names.split(' ')
    console.log(splitNames)

    return splitNames[0]
})

console.log(firstNames)

// 8 - print length of every inventers name

let nameLength = inventors.map(names => {
    let splitNames = names.split('')

    return splitNames.length
})

console.log(nameLength)

// 9 - print all names in uppercase

let upperCaseNames = inventors.map(name => {
    let upper = name.toUpperCase();

    return upper;
})

console.log(upperCaseNames)

// 10 - print out all initials

let initials = inventors.map(name => {
    let arrayName = name.split(' ')
        // let isCapital = false

    console.log(arrayName)

    return arrayName[0].charAt(0) + '.' + arrayName[1].charAt(0)
})

console.log(initials)

//  11 - print an array of every number * 100

let multiplyNum = numbers.map(num => num * 100)

console.log(multiplyNum)