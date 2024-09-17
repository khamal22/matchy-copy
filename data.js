/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {
  species: 'dog',
  name: "hunter",
  noises: [], 
};

console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = ['bark'];
noises.unshift('whimper')
noises.splice(noises.length, 0, 'growling', 'howling')

console.log(noises)

///////////////////////////////////////S///////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
noises.push('coughing')
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
var duck = {
  species: 'duck',
  name: 'mack',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
}
var alligator = {
  species: 'albino',
  name: 'ally',
  noises: ['grunt', 'growl']
}
var whale = {
  species: 'blue',
  name: 'ruffles',
  noises: ['pulses', 'groans',]
}
animals.push(alligator)
animals.push(duck)
animals.push(whale)
animals.push(animal);
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// i chose an array to handle the list of friends because i feel that it would be to easy way to manipulate the data 
/*
I:the animal array 
O:a random index of the input array 
C:use math.random 
E:
*/
var friends = [];


function getRandom(animals){
 
  return Math.floor(Math.random() * animals.length);
}
// getRandom()
var randomIndex = getRandom(animals);
var randomAnimal = animals[randomIndex];
friends.push(randomAnimal.name);
animals[0]['friends'] = friends;

console.log(friends);
console.log(animals[0]);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports.animal = animal || null;
  module.exports.noises = noises || null;
  module.exports.animals = animals || null;
  module.exports.friends = friends || null;
  module.exports.getRandom = getRandom || null;
}