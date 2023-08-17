/**
 * EXERCISE: LEVEL 8
 */

// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties
//    and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense, and accountBalance methods.
//    Incomes is a set of incomes and its description and expenses is a set of incomes and its descriptions
const personAccount = {
  firstName: "Tom",
  lastName: "Brady",
  incomes: [{ income: 120000, description: "Playing football" }],
  expenses: [{ expense: 100000, description: "New Porsche" }],
  totalIncome: function () {
    let total = 0;
    for (const income of this.incomes) {
      total += income.income;
    }
    return total;
  },
  totalExpense: function () {
    let total = 0;
    for (const expense of this.expenses) {
      total += expense.expense;
    }
    return total;
  },
  accountInfo: function () {
    return `This account belongs to ${this.firstName} ${this.lastName}`;
  },
  addIncome: function (incomeNum, descriptionName) {
    this.incomes.push({
      income: incomeNum,
      description: descriptionName,
    });
  },
  addExpense: function (expenseNum, descriptionName) {
    this.expenses.push({
      expense: expenseNum,
      description: descriptionName,
    });
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
personAccount.addIncome(100, "won a bet");
console.log(personAccount.totalIncome());
personAccount.addExpense(100, "bought food");
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());

// The next 3 questions are based on the following two arrays: users and products
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// 2. Imagine you are getting the above users collection from a MongoDB database.
//    Create a function called signUp which allows users to add to the collection.
//    If user exists, inform the user that he has already an account
const signUp = (username, email, password) => {
  for (const user of users) {
    if (user.email === email) {
      return "An account already exist with this email";
    }
  }
  const date = new Date();
  users.push({
    _id: Math.random().toString(36).substring(7),
    username: username,
    email: email,
    password: password,
    createdAt: date
      .toLocaleString("en-US", {
        dateStyle: "short",
        timeStyle: "short",
      })
      .replace(",", ""),
    isLoggedIn: false,
  });
  return "Account successfully created";
};

console.log(signUp("Thomas", "thomas@thomas.com", "123")); // Account already exist
console.log(signUp("Leon", "leon@leon.com", "123456")); // New Account
console.log(users);

// 3. The products array has three elements and each of them have six properties
//    Create a function called rateProduct which rates the product
//    Create a function called averageRating which calculates the average rating of a product

const rateProduct = (itemName, rating) => {
  for (const item of products) {
    if (item.description === itemName) {
      item.ratings.push({
        userId: Math.random().toString(36).substring(7),
        rate: rating,
      });

      return "Rating Added";
    }
  }
  return "Product not found";
};

const averageRating = (itemName) => {
  for (const item of products) {
    let overallRating = 0;
    if (item.description === itemName) {
      for (const rating of item.ratings) {
        overallRating += rating.rate;
      }
      return `Average rating of ${(overallRating / item.ratings.length).toFixed(1)}`;
    }
  }

  return "Product not found";
};

console.log(rateProduct("Huawei Honor", 5));
console.log(rateProduct("Huawei Honor", 4));
console.log(rateProduct("Nintendo Switch", 4));

console.log(averageRating("Huawei Honor"));
console.log(averageRating("Nintendo Switch"));
