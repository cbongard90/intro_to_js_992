const capitalize = (word) => {
  // Take first letter and upcase
  const firstLetter = word[0].toUpperCase();
  // Take the remaining letters and lowcase
  const remainingLetters = word.substring(1).toLowerCase();
  // Merge the 2 and return the answer

  return `${firstLetter}${remainingLetters}`;
  // This one is also valid
  // return firstLetter + remainingLetters;

}


// Testing some words
console.log(capitalize("john")); // should return John
console.log(capitalize("TEST")); // should return Test
console.log(capitalize("wagon")); // should return Wagon
