console.log("Hello World");

console.log("using let variable");
let counter = 1;
console.log(counter);

counter = counter + 1;
console.log(counter);

console.log("using const variable");
const firstName = "John";
console.log(firstName);


console.log(firstName.length);

console.log(firstName[0]);

// Print all characters starting at index 1
console.log(firstName.substring(1));

// Change to uppercase
const upcase = firstName.toUpperCase(); // JOHN

// Change to Lowercase
const lowcase = firstName.toLowerCase(); // john

const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const months = monthString.split(",");
console.log(months);
console.log(months.length);

const beatleFirstName = "Ringo";
const beatleLastName = "Starr";

// old way
const message = beatleFirstName + " " + beatleLastName + " is a drummer"
console.log(message)

// interpolation
const messageInt = `${ beatleFirstName } ${ beatleLastName } is a drummer`
console.log(messageInt)


const fruits = [];
fruits.push("Apple"); // Create
fruits[0];            // Read
fruits[0] = "Banana"; // Update
fruits.splice(0, 1);  // Delete (1 item at index 0)

// Each Loop
const beatles = ["paul", "john", "ringo", "george"];
beatles.forEach((beatle) => {
  console.log(beatle.toUpperCase());
});
