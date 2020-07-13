name = ['bob', 'cherry', 'samm', 'billy']

let nameOutput = name.map((item, index) => {
    let arrayName = item.split('')
    console.log("array", arrayName)

    arrayName.filter((char, index) => char[index] === char[index + 1])
    return;
})

// sort array
// return largest to smallest
let number = [1, 6, 3, 5, 2, 7, 2, 9, 7, 3]

let sortedArray = number.sort((a, b) => {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
})
console.log(sortedArray)

// challenge - which student is better?

let score = [
    [100, 8],
    [20, 5],
    [100, 5]
]

let bestScore = score.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
})

console.log(bestScore)

let sortedName = name.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
})

console.log(sortedName)

// Reduce takes all elements and takes one value
// Output is a single value, not array

let sumNumbers = number.map(item => item * 2).reduce((total, item) => {
    return total += item
})

console.log(sumNumbers)

// Some - does array contain a certain value? returns bool

let fruit = ['apple', 'guava', 'pineapple', 'mango']

let result = fruit.some(item => item === 'apple')

console.log(result)

// every - checks if every item is the same

let result2 = fruit.every(item => item === 'apple')

console.log(result2)

// find - finds the item for you, only finds the first then stops

let result3 = fruit.find(item => item.includes('n'))

console.log(result3)

// findIndex - finds the position, finds first stops

let result4 = fruit.findIndex(item => item === 'apple')

console.log(result4)