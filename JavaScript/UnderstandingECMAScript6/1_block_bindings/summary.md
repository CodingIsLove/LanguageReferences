

# Block bindings

### Using "Let" and "Const"
- Using var is bad practice would create "temporal dead zone" 
- Using const for whatever does not change! Only let, when necessary
- Both throw error, when you try to reassigne
- Let and const variables are only accessible after initialization (not like in the old js)
- IIFE (Immediatelly invoked function expressions) had been used earlier because there where no let vars for the loop scope. 


### Global Block bindings
- With let and const you can no longer overwrite global variables.


### Best Practice
- Use const and only use let, if really necessary

### Summary

- Let and const introduce Lexical Scoping to Javascript

