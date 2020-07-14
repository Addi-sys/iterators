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

    if (number < 2) {
        return false
    }

    for (i = 2; i < number; i++) {

        if (number % i === 0) {
            return false;
        }

    }
    return true
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

    let result = arrayName.map(char => char.charAt(0)).join('.')

    // for (i = 0; i < arrayName.length; i++) {
    //     result += arrayName[i][0] + '.'
    // }

    // console.log(arrayName)

    // return arrayName[0].charAt(0) + '.' + arrayName[1].charAt(0)
    return result
})

console.log(initials)

//  11 - print an array of every number * 100

let multiplyNum = numbers.map(num => num * 100)

console.log(multiplyNum)

// 12 - sort inventors in alphabetical order

let alphaInventors = inventors.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
})

console.log(alphaInventors)

// 13 - sort in reverse

let alphaReverseInventors = inventors.sort((a, b) => {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
})

console.log(alphaReverseInventors)

// 14 - sort by length of name, shortest first

let shortName = inventors.sort((a, b) => {
    if (a.length < b.length) {
        return -1;
    } else if (a.length > b.length) {
        return 1;
    } else {
        return 0;
    }

})

console.log(shortName)

// 15 - sort by length of name, longest first

let longName = inventors.sort((a, b) => {
    if (a.length < b.length) {
        return 1;
    } else if (a.length > b.length) {
        return -1;
    } else {
        return 0;
    }

})

console.log(longName)

// 16 - find sum of all numbers

let sum = numbers.reduce((total, item) => {
    return total += item
})

console.log(sum)

// 17 - find sum of all even numbers

let sumEven = numbers.filter(number => (number % 2) === 0).reduce((total, item) => {
    return total += item
})

console.log(sumEven)

// 18 - create string that has first name of every inventor

let totalFirstNames = inventors.reduce((total, item) => {
    total += item.split(' ')[0]
    return total
}, '')

console.log(totalFirstNames)

// 19 - does any inventor have the letter y in the array

let nameHaveY = inventors.some(item => item.includes('y'))

console.log(nameHaveY)

// 20 - does every inventor have 'e' in the name

let nameHaveE = inventors.every(item => item.includes('e'))

console.log(nameHaveE)

// 21 - does every inventor have a first name longer than 4 chars

let splitWords = inventors.map(item => {
    let splitItem = item.split(' ')
    console.log(splitItem)
    return splitItem
})

let longerThan4 = splitWords.every(item => item[0] > 4)

console.log(longerThan4)

//  22 - find inventors with middle name

let middleName = inventors.find((item) => {
    let splitNames = item.split(' ')

    console.log(splitNames)
    return splitNames.length === 3

})

console.log(middleName)

// 23 - bonus

// 24 - find number divisible by 7

let divisibleBy7 = numbers.findIndex(item => (item % 7 === 0))

console.log(divisibleBy7)