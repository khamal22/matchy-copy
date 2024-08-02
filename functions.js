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
  // Check if the name parameter is valid
  if (!name || name.length === 0) {
      console.log("Name must be a non-empty string.");
      return;
  }

  // Find the index of the animal with the given name
  const index = animals.findIndex(animal => animal.name === name);

  // If an animal with the given name is found, remove it
  if (index !== -1) {
      animals.splice(index, 1);
      console.log(`Removed animal with name: ${name}`);
  } else {
      console.log(`Animal with name "${name}" not found.`);
  }
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
// Check if the animal object has a name property with length > 0
if (!animal.name || animal.name.length === 0) {
  console.log("Animal must have a name with length greater than 0.");
  return;
}

// Check if the animal object has a species property with length > 0
if (!animal.species || animal.species.length === 0) {
  console.log("Animal must have a species with length greater than 0.");
  return;
}

// Check if an animal with the same name already exists using a for loop
for (let i = 0; i < animals.length; i++) {
  if (animals[i].name === animal.name) {
      console.log(`Animal with name "${animal.name}" already exists.`);
      return;
  }
}

// Add the new animal to the array
animals.push(animal);
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