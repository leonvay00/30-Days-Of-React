/**
 * EXERCISE: LEVEL 6
 */

// 1. Create an empty object called dog
const dog = {};

// 2. Print the dog object on the console
console.log(dog);

// 3. Add name, legs, color, age and bark properties for the dog object.
//    The bark property is a method which returns "woof woof"
dog.name = "Lucky";
dog.legs = 4;
dog.color = "blonde";
dog.bark = function () {
  return "woof woof";
};

// 4. Get name, legs, color, age, and bark balues from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.bark());

// 5. Set new properties for the dog object: breed, getDogInfo
dog.breed = "pomeranian";
dog.getDogInfo = function () {
  let name = this.name;
  let legs = this.legs;
  let color = this.color;
  let breed = this.breed;
  let info = `${name} is a ${color} ${breed} with ${legs} legs`;
  return info;
};
