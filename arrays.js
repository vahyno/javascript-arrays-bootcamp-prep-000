var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {
  //return array.unshift(element)
  return [element, ...array]

}

function destructivelyAddElementToBeginningOfArray(array,element) {
  //array = [element, ...array];
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array,element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array
}

function accessElementInArray(array, index){
  return(array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array){
 return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array){
  console.log(array.slice(0,array.lenght-1))
  return array.slice(0,array.lenght-1);
  //return array.pop();
  //return array;
}

removeElementFromEndOfArray(chocolateBars)
