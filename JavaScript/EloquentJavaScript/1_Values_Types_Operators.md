# Values, Types and Operators


## Value Types introduction

### Numbers
    - 64 bits to save number => max number = 2^64
    - There are 3 special numbers, that dont behave like normal numbers
        - Infinity 
        - -Infinity
        - NaN
       
       
### Strings
    - You can use single or double quotes => But my convention is to use always single quotes.
    - Backslash for escaping
    - Javascript uses Unicode standard to store strings.
    - If you use ${} in a String it is called a temmplate literal. you can compute things in it.
    
### Unary Operators
    - typeof operator example console.log(typeof 4.5) => number
    

### Boolean Values
    - ternary operator: true ? 1:2 => will return 1
    
### Empty Values
    - null
    - undefined
    
    
### Automatic type conversion
    - If you add different data types together, Javascript will mostly just accept it, but will do some weired things sometimes.
    - This silent conversion is called **type coersion**
    - When comparing values with the same type, use: "=="
    - If you want to omit automatic type coersion use this operator: "===" or "!=="

### Short-Circuting of Logical Operators
    - The || operator will return the value to its left, when that can be converted to true and will return the value on its right otherwise. => This is often used in node
        - example: console.log(null||"user")  -> user
        - console.log("Agnes"|| user) -> Agnes
    - You can use this for fallback versions.
    - The && operator works exactly the other way around (if the first argument is true, it will automatically return the second).
    
    
