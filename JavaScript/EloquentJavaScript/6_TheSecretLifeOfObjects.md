

# The secret life of objects


Object oriented programming has shaped the design of many programming languages. In this Chapter I will learn how to 
apply all those concepts to javascript.


## Encapsulation

- In JS there is nothing like a private variable, but the convention is to write "_variablename" to marke it as private.
- Separating Interface from implementation is called encapsulation.


## Methods

- Definition Methods: **Methods are nothing more than properties that hold function values!**
- If a method needs to do something with the object it was called on
- Each function has its own this binding.

```js 
let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'`);
}

rabbit.speak("I am alive.");
//=> The rabbit says: 'I m alive.'
```

The "this" is required, as soon you want to change a property of the object, that the method is called on.
```js
function speak(line) {
console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};
whiteRabbit.speak("Oh my ears and whiskers, " +
"how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
// late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");
// → The hungry rabbit says 'I could use a carrot right now.'
```


## Prototypes
- In addition to their set of properties, most objects also have a **prototype**
- **Prototype** is another object that is used as a fallback of source of properties.
- When an object gets a request for a property that it does not have, its prototype will be searched for the proerpty, then the prototypes property, and so on => Prototype chaining.

```js
let empty = {};
console.log(empty.toString);
// → function toString()…{}
console.log(empty.toString());
// → [object Object]
```

- Object.getPrototypeOf() returns the Prototype of something.
- Object.create() can be used to create an Object with a specific Prototype.
**Lets use this:**

```js
let protoRabbit = {
speak(line) {
console.log(`The ${this.type} rabbit says '${line}'`);
}
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'
```


## Class notation

```js
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
```

- The call() method calls a function with a given this value and arguments provided indiviually



## Overriding derived properties

You can just override properties, if you want to.

## Maps
Is a data structure, that associates values (keys) with other values. Key-Value pairs. Here an example:

```js
let ages = {
Boris: 39,
Liang: 22,
Júlia: 62
};
console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true
```

Since you do not really want to have all the prototype functions on Map, rather use the **Map** method provided by Javascript.


```js
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);
console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
console.log(ages.has("toString"));
// → false
```

## Symbols
Symbols are values created with the Symbol function. Unlike strings, newly created symbols are
unique—you cannot create the same symbol twice.
```js
let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55
```

Being both unique and usable as property names makes symbols suitable for defining interfaces that can peacefully live alongside other properties, no matter, what theier names are!
```js
const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
```

Use Symbols in the following use-cases:
- Enum
- Name Clashes
- Privacy
- Protocols
- Well-known Symbols.


## The iterator interface
The object given to a for/of loop is expected to be iterable. This means it has a method named with the Symbol.iterator symbol.

```js
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// → {value: "O", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}
```

Here is an example by the implementation of a Matrix

```js
class Matrix {
constructor(width, height, element = (x, y) => undefined) {
this.width = width;
this.height = height;
this.content = [];
for (let y = 0; y < height; y++) {
for (let x = 0; x < width; x++) {
this.content[y * width + x] = element(x, y); // set all the default values to undefined.
}
}
}
get(x, y) {
return this.content[y * this.width + x];
}
set(x, y, value) {
this.content[y * this.width + x] = value;
}
}
```

element() is an optional function. If none function is given it will just fill everything up with the value undefined. Here **default parameters** are used.


```js
class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }
    next() {
        if (this.y == this.matrix.height) return {done: true}; //end condition
        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)};
        this.x++;
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}
```

To add this Iterator to our Matrix class, we can now write this code:

```js
Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};
```

By chaining this function to the prototype, the Matrix class is now iterable! Fucking sweet!


## Getters, Setters and Statics

It is fine to include properties with non-function values into an interface. To access these properties, we define getter methods.

```js
let varyingSize = {
get size() {
return Math.floor(Math.random() * 100);
}
};
console.log(varyingSize.size);
// → 73
console.log(varyingSize.size);
// -> 49
```

The same can be done with setter meethods

```js
class Temperature {
    constructor(celsius) {
     this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30
```


### Inheritance
Can be used with the **extends** keyword

```js
class SymmetricMatrix extends Matrix {
constructor(size, element = (x, y) => undefined) {
super(size, size, (x, y) => {
if (x < y) return element(y, x);
else return element(x, y);
});
}
set(x, y, value) {
super.set(x, y, value);
if (x != y) {
super.set(y, x, value);
}
}
}
let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
// → 3,2
```

To know, if an object was derived from a certain class, you could use the **instanceof** Operator.


