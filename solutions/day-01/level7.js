/**
 * EXERCISE: LEVEL 7
 */

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const countries = {
  "United States": {
    population: 332900000,
    capital: "Washington, D.C.",
    language: "English",
  },
  China: {
    population: 1444216107,
    capital: "Beijing",
    language: "Mandarin Chinese",
  },
  India: {
    population: 1380004385,
    capital: "New Delhi",
    language: "Hindi",
  },
};

// 1. Find the person who has many skills in the users object
let skillCount = 0;
let user = null;

for (const key in users) {
  if (users[key].skills.length >= skillCount) {
    skillCount = users[key].skills.length;
    user = key;
  }
}
console.log(user);

// 2. Count logged in users and count users having greater than equal to 50 points from user object
let loggedIn = 0;
let usersWithOverFifty = 0;

for (const key in users) {
  if (users[key].isLoggedIn) {
    loggedIn++;
  }

  if (users[key].points >= 50) {
    usersWithOverFifty++;
  }
}

console.log(loggedIn);
console.log(usersWithOverFifty);

// 3. Find people who are MERN stack developer from the users object
const mernDevs = [];

for (const key in users) {
  const curUserSkills = users[key].skills;
  if (
    curUserSkills.includes("MongoDB") &&
    curUserSkills.includes("Express") &&
    curUserSkills.includes("React") &&
    curUserSkills.includes("Node")
  ) {
    mernDevs.push(key);
  }
}

console.log(mernDevs);

// 4. Set your name in the users object without modifying the original users object
users.Leon = {
  email: "leon@leon.com",
  skills: [
    "Python",
    "Express",
    "Node",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
  ],
  age: 23,
  isLoggedIn: false,
  points: 50,
};

// 5. Get all keys or properties of users objects
const userNames = Object.keys(users);
console.log(userNames);

// 6. Get all the values of users object
const userValues = Object.values(users);
console.log(userValues);

// 7. Use the countries object to print a country name, capital, population, and language
for (const key in countries) {
  let name = key;
  let capital = countries[key].capital;
  let population = countries[key].population;
  let language = countries[key].language;
  console.log(
    `${name}'s capital is ${capital}. The population count is ${population} and they speak ${language}`
  );
}
