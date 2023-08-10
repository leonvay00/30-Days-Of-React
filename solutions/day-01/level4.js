/**
 * EXERCISE: LEVEL 4
 */

// 1. Get user input using prompt('Enter your age:'). If user is 18 or older, give feedback: 'You are old enough to drive'
//   but if not 18 give another feedback stating to wait for the numger of years they need to turn 18
let age = Number(prompt("Enter your age: "))
if (age >= 18) {
    console.log('You are old enough to drive')
} else {
    console.log(`You are left with ${18 - age} years to drive`)
}

// 2. Compare the values of myAge and yourAge using if...else. Based on the comparison and log the result to console
//    stating who is older (me or you). Use prompt("Enter your age: ") to get age as input.
let myAge = Number(prompt('Enter you age: '))
if (myAge > 25) {
    console.log(`You are ${myAge - 25} years older than me`)
} else if (myAge === 25) {
    console.log('We are the same age')
} else {
    console.log(`I am ${25 - myAge} older than you`)
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b' try to implement it in two ways
let a = 4
let b = 3
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is less than ${b}`)
}

a > b? console.log(`${a} is greater than ${b}`):console.log(`${a} is less than ${b}`)

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not useing JavaScript
let num = Number(prompt('Enter a number: '))
if (num % 2 === 0) {
    console.log(`${num} is an even number`)
} else {
    console.log(`${num} is an odd number`)
}
