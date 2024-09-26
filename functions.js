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
function search(animals, name) {
    // Iterate through the array of animals
    for (let i = 0; i < animals.length; i++) {
      // Check if the current animal's name matches the search name
      if (animals[i].name === name) {
        // Return the animal object if a match is found
        return animals[i];
      }
    }
    // Return null if no match is found
    return null;
  }


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    // Iterate through the array of animals
    for (let i = 0; i < animals.length; i++) {
      // Check if the current animal's name matches the search name
      if (animals[i].name === name) {
        // Replace the animal object with the replacement object
        animals[i] = replacement;
        // Exit the function after replacement
        return;
      }
    }
    // If no match is found, do nothing
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].name === name) {
        animals.splice(i, 1); // Remove the animal from the array
        return; // Exit once the removal is done
    }
}
// Do nothing if not found
}

/////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
  // Check that the animal object has 'name' and 'species' properties with length > 0
  if (animal && typeof animal.name === 'string' && animal.name.length > 0 &&
      typeof animal.species === 'string' && animal.species.length > 0) {

      // Check for uniqueness of the name
      var isUnique = true;
      for (var i = 0; i < animals.length; i++) {
          if (animals[i].name === animal.name) {
              isUnique = false;
          
          }
      }

      // Add the animal to the array if it is unique
      if (isUnique) {
          animals.push(animal);
      }
  }
}


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