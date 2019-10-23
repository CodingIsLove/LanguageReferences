# Higher-Order Functiosn

Definition: **Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-orderfunctions**. 
The term of higher-order functions comes from mathematics.


## Abstracting Repetition

- Mostly we just create a function definition on the spot for higher-order functions. Like this:

```js
let labels = []

repeat(5, i=> {
    labels.push(`Unit ${i+1}`);  // Using template string and higher order function.
})
console.log(labels); // => ["Unit 1", "Unit 2", ...]
```


Here different Examples of Higher order functions:


**Functions, that create functions**
```js
function greaterThan(n){
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// -> true
```


**Functions, that change other functions**
```js
function noisy(f) {
    return (...args)=>{
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

noisy(Math.min)(3,2,1);
// -> calling with [3,2,1]
// -> called with [3,2,1], returned 1

```


## Script Data Set
Higher Order fucntions are really shining in the are of data processing.

**Implementing a Array filter method**
```js
function filter(array, test){
    let passed = [];
    for(let element of array){
        if(test(element)){  // Here test() is a function, which will return, if the value is as expected or not.
            passed.push(element);
        }
    }
    return passed;
}

console.log(filter(SCRIPTS, scripts=> script.living));
// -> [{name: "Adlam",...},....]
```

If a function does not modify the array, that is given to it, we call it **pure** function.


## Transforming with map
The map method transforms an array by applying a function to all of its elements and building a new array from the returned values. 

```js 
function map(array, transform){
    let mapped = [];
    for(let element of array){
        mapped.push(transform(element));
    }
    return mapped;
}
```

## Summarizing with reduce
The higher order operation, that computes an array to a single value is called **reduce** or sometimes also called **fold**.

```js 
function reduce(array, combine, start){
    let current = start;
    for (let element of array){
        current = combine(current,element);
    }
    return current;
}

console.log(reduce([1,2,3,4], (a,b) => a+b,0 ))
```


## Composability
Till now higher order function did not make that much of a difference. But they really start to shine, when you start composing operations.
Higher-order functions are a bit like a pipeline. If the function must be super fast, then it is smarter, to omit higher order functions.

## Strings and Character Codes
- array.some() as another function. If any argument of the array is true, then the function will return true.


## Recognize Text

Important to know:
    - Each script has a defined range, where you can find all the characters for it. 
    - Strings are encoded as 16bit number .... fuck that was to less! this numbers are called **code units**.
    - After it was clear, that 16bits is not enough UTF-16 was introduced into javascrdipt. => two code unit characters.
    - Normal String methods
    
