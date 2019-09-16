


function is32Bit(c) {
    return c.codePointAt(0) > 0xFFFF;
}
console.log(is32Bit("𠮷")); // true
console.log(is32Bit("a")); // false
