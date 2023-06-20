let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

//urls: Imperative version

function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(element => {
    urls.push(urlify(element));
  });
  return urls;
}

console.log(imperativeUrls(states));

//urls: Functional version

function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}

console.log(functionalUrls(states));

//singles: Imperative version

function imperativeSingles(elements) {
  let singles = [];
  elements.forEach( element => {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles
}

console.log(imperativeSingles(states));

//singles: Functional version

function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}

console.log(functionalSingles(states));

let numbers = [2, 2, 2, 2];

//sum: Imperative
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(element => {
    total += element
  });
  return total;
}

console.log(imperativeSum(numbers));

//sum: Functional

function functionalProduct(elements) {
  return elements.reduce((total, element) => {return total *= element});
}

console.log(functionalProduct(numbers));


//lengths: Imperative

function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach( element => {
    lengths[element] = element.length;
  });
  return lengths;
}

console.log(imperativeLengths(states));

//lengths: Functional

function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths;}, {});
}

console.log(functionalLengths(states));