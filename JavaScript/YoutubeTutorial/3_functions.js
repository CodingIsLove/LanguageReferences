


/* general notes
    - Global scope can be accessed from everywhere.
    -
 */

// Basic
function ourReusableFunction(){
    console.log("Heyya, World");
}

// with args
function argFunction(a,b){
    console.log(a-b);
}

// return values
function minusSeven(num) {
    return num -7;
}




// Call all the written functions
ourReusableFunction();
argFunction(3,4);
console.log(minusSeven(100));
