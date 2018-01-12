var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(theArray, newEl) {
  return [newEl, ...theArray];
}

function destructivelyAddElementToBeginningOfArray (theArray, newEl) {
  theArray = [newEl, ...theArray];
  return theArray;
}

function addElementToEndOfArray (theArray, newEl) {
  return [...theArray, newEl];
}

function destructivelyAddElementToEndOfArray (theArray, newEl) {
  theArray = [...theArray, newEl];
  return theArray;
}

function destructivelyAddElementToEndOfArray(theArray, i) {
  return theArray[i];
}

function  destructivelyRemoveElementFromBeginningOfArray(theArray) {
  theArray.shift();
  return theArray;
}

function removeElementFromBeginningOfArray(theArray) {
  return theArray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(theArray) {
  theArray.pop();
  return theArray;
}

function removeElementFromEndOfArray(theArray) {
  
}