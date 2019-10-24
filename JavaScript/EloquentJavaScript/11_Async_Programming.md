# Asynchronous Programming

The central part of a computer, the part that carries out the individual steps
that make up our programs, is called the processor.

## Asynchronicity
- Asynchronous model allows multiple things to happen at the same time.
- A thread is another running program whose execution may interleaved with other programs by the operating system. 


## Callbacks
- not a very great approach to solve problems
- You put in a callback function into an async function. The callback is executed, when the async function itself gives you the result.


## Promises
In the case of asynchronous actions, you could, instead
of arranging for a function to be called at some point in the future, return an object that represents this future event.

Most basic form of promise.
```js
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));
// → Got 15
```

```js
function storage(nest, name) {
return new Promise(resolve => {
nest.readStorage(name, result => resolve(result));
});
}
storage(bigOak, "enemies")
.then(value => console.log("Got", value));
```

How to catch errors with promise functions

```js
new Promise((_, reject) => reject(new Error("Fail")))
.then(value => console.log("Handler 1"))
.catch(reason => {
console.log("Caught failure " + reason);
return "nothing";
})
.then(value => console.log("Handler 2", value));
// → Caught failure Error: Fail
// → Handler 2 nothing
```
