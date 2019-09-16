

# 2 Strings and Regular expressions

- ES6 Enforces UTF-16 => For double pairs (like chinese letters)
- There is a normalize() function, to compare different strings. Just remember, that the strings must be in the same form.
- Unicode is super important, when working with an international application.


### Provided Methods
- codePointAt()
- String.fromCodePoint()
- normalize()

##### String changes
- includes()
- startsWith()
- endsWith()
- repeat()

##### [Regex](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp) changes

- y flag is standardized => sticky flag
- Get the flags and sources directly from the regex

```js 
  let re = /ab/g;
console.log(re.source); // "ab"
console.log(re.flags); // "g" 
```

##### Template Literals
- Provide Syntax for Domain specific language
- Helps with
    - Multiline strings
    - Basic string formatting
    - HTML escaping
- Use Backticks for template strings
- Template literals are sensitive on indents
- You can use it to insert values or compute things in the template string
- Tagged Templates => function, that is called with the processed template literal data. The tag receives data about the template literal as individual pieces annd must combine the pieces to crate the result.
- You can work with raw strings by using String.raw()
- 
