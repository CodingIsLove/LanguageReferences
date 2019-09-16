

/* General notes:

 */

// Example
var ourDog = {
    "name":"Camper",
    "legs":4,
    "tails":1,
    "friends":["everything!"]
};

// Accessing properties
var dogname = ourDog.name;
var doglegs = ourDog["legs"];  // Object bracket notation


// Updating properties by using dot notation.
ourDog.name = "Franziskus";


// Add new property
ourDog.bark = "bow-wow";
ourDog["klaeff"] = "wuff wuff";

// delete properties
delete  ourDog.klaeff;


// Using Objects for Lookups
var lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago"
};

result = lookup[val];


// Testing if object has specific property
ourDog.hasOwnProperty("bark");


// Manipulation complex objects aka. JSON




