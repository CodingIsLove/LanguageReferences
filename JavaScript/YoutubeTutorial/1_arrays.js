

/* General Notes
    - You can use bracketnotation to access and modifie array values
    - Arraymethods are
        - push()
        - pop()
        - shift() => Like the pop function, but from the other direction
        - unshift() => Add element to beginning of array, like inversed push()

 */

// Array
var ourArray = ["John", 23];

//Nested arrays
var multArray = [["the univers",42],["everything",10110]];

// Acces multidimensional array
var acces =  multArray[0][1]; // Goes from big to small/ left to right.

// manipulating array with push
var pusharr = ourArray.push(["Jesus Chris"]);

