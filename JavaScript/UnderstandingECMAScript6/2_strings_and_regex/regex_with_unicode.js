


// Use the u flag for "unicode"
let text = "𠮷";
console.log(text.length); // 2
console.log(/^.$/.test(text)); // false
console.log(/^.$/u.test(text)); // true


// If you not sure, if currently ES6 is running, just try to run this code
function hasRegExpU() {
    try {
        var pattern = new RegExp(".", "u");
        return true;
    } catch (ex) {
        return false;
    }
}
