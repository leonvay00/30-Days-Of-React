/**
 * EXERCISE: LEVEL 5
 */

// 1. Write code which can give grades to students according to theirs scores
let score = 80
if (80 <= score <= 100) {
    console.log("A")
} else if (70 <= score <= 79) {
    console.log("B")
} else if (60 <= score <= 69) {
    console.log("C")
} else if (50 <= score <= 59) {
    console.log("D")
} else {
    console.log("F")
}

/**
 * 2. Check if the season is Autumn, Winter, Spring, or Summer. If the user input is:
 * - September, October, or November, the season is Autumn
 * - December, January, or February, the season is Winter
 * - March, April, or May, the season is Spring
 * - June, July, or August, the season is Summer
 */

let month = prompt("Enter the current month: ")
const autumn = ["september", "october", "november"]
const winter = ["december", "january", "february"]
const spring = ["march", "april", "may"]
const summer = ["june", "july", "august"]
month = month.toLowerCase()


if (autumn.includes(month)) {
    console.log("The season is Autumn")
} else if (winter.includes(month)) {
    console.log("The season is Winter")
} else if (spring.includes(month)) {
    console.log("The season is Spring")
} else if (summer.includes(month)) {
    console.log("The season is Summer")
} else {
    console.log("That month does not exist")
}

// 3. Check is a day is a weekend day or a working day. Your script will take day as an input
let day = prompt("What is the day today: ").toLowerCase()
day = day.charAt(0).toUpperCase() + day.slice(1)


const weekend = ["Saturday", "Sunday"]
const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]


if (weekend.includes(day)) {
    console.log(`${day} is a weekend.`)
} else if (weekday.includes(day)) {
    console.log(`${day} is a working day.`)
}

// 4. Write a program which tells the number of days in a month
// 5. Write a program which tells the number of days in a month, now consider leap year
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

month = prompt("Enter a month: ").toLowerCase()
month = month.charAt(0).toUpperCase() + month.slice(1)
let monthNum = months.indexOf(month) + 1

const daysInMonth = new Date(2023, monthNum, 0).getDate()

console.log(`${month} has ${daysInMonth} days`)
