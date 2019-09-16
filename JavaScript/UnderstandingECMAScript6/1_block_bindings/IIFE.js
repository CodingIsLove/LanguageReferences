
// This is an example of an Immediatelli invoked function expression


/// This is the problematic code. It would only print "10" 10 times
var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}
funcs.forEach(function(func) {
    func();// outputs the number "10" ten times
});



    // Here the Problem was solved by using IIFE
var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push((function(value) {
        return function() {
            console.log(value);
        }
    }(i))); // Here the i was used
}
funcs.forEach(function(func) {
    func(); // outputs 0, then 1, then 2, up to 9
});
