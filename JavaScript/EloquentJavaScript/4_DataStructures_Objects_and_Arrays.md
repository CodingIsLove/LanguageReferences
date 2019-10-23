# Data Structures: Objects and Arrays


- Numbers, Booleans and Strings are the atoms, that data structures are built from. 


## Data Sets
    - Two main ways to access properties are:
        - Dotnotation =>string after dot ist directly the property name
        - Bracketnotation => Value in bracket will be evaluated to property name
        
## Methods

### Strings
    - string.topperCase

### Arrays
- Stack operations
   - array.push
   - array.pop


## Objects

Ways of creating an object:
 ```js
 let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

 ```
 
 - Using the binary "in" operator, to find out, if object has a certain property:
 - If you want to find out, what the properties of an Object ware, you can call the **Object.keys(object)** method.
 - If you want to copy all the properties from one object to another, you can use the Object.assign(obj1,obj2) operation.
 
 And that is how the data for the squirrel case should look like:
 
 ```js 
     let journal = [
      {
          events: ["work", "touched tree", "pizza", "running", "television"],
          squirrel: false
      },
      {
          events: ["work", "ice cream", "coliflower", "lasagna", "touched tree"],
          squirrel: false
      },
      {
          events: ["weekend", "cyycling", "break", "peanuts", "beer"],
          squirrel: true
      }   
    ];
 ```
 
 
        
## Mutability

    - Numbers, strings and booleans are immutable
    - At Objects, you can change their properties.
    - Pay attention to object bindings!
```js
    let object1 = {value:10};
    let object2 = object1;
    let object3 = {value:10}
```
Now object1 and object2 have the reference to the exact same object!  They have the same **identity**.

- When using "==" for objects, Javascript compares by **identity**!
- There is no deep comparison built in into javascript.


## Arrayology
Some useful methods, that can be used, when working with arrays:
- array.push
- array.pop
- array.shift
- array.unshift
- array.indexOf()
- array.lastIndexOf()
- array.slice()
- array.concat()


## Useful methods for Strings
- string.trim() => removes spaces, newlines, tabs and similar characters
- string.padStart() => takes desired length an padding character as argument ex: String(6).padStart(3,"0") => 006
- String.split()
- String.join()
- String.repeat()


## Rest Parameters
Is when a function can take any number of arguments. 

Here is an example on how to write such a function;
 ```js
function max(...numbers){
    let result = -Infinity;
    for( let number of numbers){
        if(number > result) result = number;
    }
    return result;
}
 ```
 
 The "...numbers" element is called **Rest parameter**. Mostly it is used, when you get an array of argumets.
 The "..." Syntax can also be used to **spread** the array into another function. for example: console.log(max(...numbers));
 
 
## JSON
- Is used to serialize Data => That means to convert the data to a flat description.
- Rules:
    - All Property names are surrounded by double quotes
    - Comments are not allowed in json
- JSON.stringify(object) => helps us to convert javascript objects into json objects.
