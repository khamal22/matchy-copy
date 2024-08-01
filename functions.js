/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
I:a function that takes 2 parameters the array of animals and a string 
O:returns the animals object if the animal with that name exist otherwise null
C:
E:

*/    
function search(animals,name ){
    //looping through the animals array 
        for (let i = 0; i < animals.length; i++) {
            //returns animal object if it exist 
            if (animals[i].name === name) {
              return animals[i];
            }
          }
          //return null if it doesnt exist 
          return null;
    }


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, newAnimal) {
  for (let i = 0; i < animals.length; i++) {
      if (animals[i].name === name) {
          animals[i] = newAnimal;
          return true; // Return true to indicate success
      }
  }
  return false; // Return false if no match was found
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
  const initialLength = animals.length;
  // Filter out the animal with the matching name
  const updatedAnimals = animals.filter(animal => animal.name !== name);
  // Return true if something was removed, false otherwise
  return updatedAnimals.length < initialLength ? updatedAnimals : false;
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}