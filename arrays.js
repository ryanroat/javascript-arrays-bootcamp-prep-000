var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(theArray, newEl) {
  return [newEl, ...theArray];
}

function destructivelyAddElementToBeginningOfArray (theArray, newEl) {
  theArray = [newEl, ...theArray];
  return theArray;
}

function addElementToEndOfArray [theArray, newEl] {
  return [...theArray, newEl];
}

function destructivelyAddElementToEndOfArray [theArray, newEl] {
  theArray = [...theArray, newEl];
  return theArray;
}