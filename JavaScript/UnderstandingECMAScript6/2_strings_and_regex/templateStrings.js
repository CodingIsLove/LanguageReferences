

// Basic HTML formatting

let html = `
<div>
<h1>Title</h1>
</div>`.trim();

// Making Substitutions
let name = "Nicholas",
    message = `Hello, ${name}.`;
console.log(message); // "Hello, Nicholas."


// You can embedd also calculations in template literals
let count = 10,
    price = 0.25,
    message = `${count} items cost $${(count * price).toFixed(2)}.`;
console.log(message); // "10 items cost $2.50."


// Using tags
// How a tag function works:
function tag(literals, ...substitutions) {
// return a string
}



// Beispiel einer Tag function
var a = 5;
var b = 10;

function tag(strings, ...values) {
    console.log(strings[0]); // "Hello "
    console.log(strings[1]); // " world "
    console.log(values[0]);  // 15
    console.log(values[1]);  // 50

    return "Bazinga!";
}

tag`Hello ${ a + b } world ${ a * b}`;
// "Bazinga!"


// Using rav alues
let message1 = `Multiline\nstring`,
    message2 = String.raw`Multiline\nstring`;
console.log(message1); // "Multiline
// string"
console.log(message2); // "Multiline\\nstring"
