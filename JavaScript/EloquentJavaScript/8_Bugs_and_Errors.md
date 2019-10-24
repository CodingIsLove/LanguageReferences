# Bugs and Errors

## strict mode
You have to put "use strict" at the top of the file.
In a nutshell: putting "use stricdt" at the top of your program rarely hurts and might help you spot a problem.

## Types
If you want to write clean type based code please check out Typescript.


## Testing
- Use test suites for this. 

## Debugging
- Use Chrome devtool

## Exceptions
- Makes it possible to **raise** or **throw** an exception.  

Here is an example of it:
```js

// Define all the necessary functions
function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result); //Using the Error constructor here.
}
function look() {
    if (promptDirection("Which way?") == "L") {
     return "a house";
    } else {
        return "two angry bears";
    }
}

// call the functions with an try and catch block
try {
    console.log("You see", look());
} catch (error) {
    console.log("Something went wrong: " + error);
}
```
