/**
 * EXERCISE: LEVEL 7
 */

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// 1. Find the person who has many skills in the users object
let skillCount = 0
let user = null

for (const key in users) {
    if (users[key].skills.length >= skillCount) {
        skillCount = users[key].skills.length
        user = key
    }
}
console.log(user)

// 2. Count logged in users and count users having greater than equal to 50 points from user object
let loggedIn = 0
let usersWithOverFifty = 0

for (const key in users) {
    if (users[key].isLoggedIn) {
        loggedIn++
    }

    if (user[key].points >= 50) {
        usersWithOverFifty++
    }
}

console.log(loggedIn)
console.log(usersWithOverFifty)

// 3. 