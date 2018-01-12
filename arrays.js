var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(theArray, newEl) {
  return [newEl, theArray];
}

function destructivelyAddElementToBeginningOfArray (theArray, newEl) {
  theArray = [newEl, theArray];
  return theArray;
}

