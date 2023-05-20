function Icecream(flavour) {
    this.flavour = flavour;
    this.meltIt = function() {
        console.log(`The ${this.flavour} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream;
appleIcecream;

var scope = "global scope";
function checkscope() {
    var scope = "localscope";
    function nested () {
        var scope = "nested scope";
        return scope;
    }
    return nested();
}
checkscope()
console.log(checkscope());

function test(o) {
    var i = 0;
    if (typeof o == "object") {
        var j = 0;
        for(var k = 0; k < 10; k++){
            console.log(k);
        }
        console.log(k);
    }
    console.log(k);
}

test("just")

var scope = "global";
function f() {
    console.log(scope); // Prints "undefined", not "global"
    var scope = "local"; // Variable initialized here, but defined everywhere
    console.log(scope); // Prints "local"
}

f()

function hypotenuse(x, y) {
    return Math.sqrt(x*x + y*y);
}

function factorial (n) {    // A recursive function
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

if (!address) { // to check whether there is an address, and if there isn't, send a message to the user to enter an address
    address = "";
    message = "Please specify a mailing address.";
}

if (n==1) {
    console.log("You have a new message.");
} else {
    console.group("You have " + n + " new messages.");
}

switch (n) {
    case 1:
    // Execute code block #1.
        break;
    // Stop here
    case 2:         // start from here if n == 2
    // Execute code block #2.
        break;
    case 3: // Start here if n == 3
    // execute code block #3.
        break;
    default:
        // Execute code block 4#
        break;
}

function convert(x) {
    switch(typeof x) {
        case 'number':
            returnx.toString(16); // Convert the number to hexadecimal number
        case 'string':
            return '"' + x + '"'; // Return the string enclosed in quotes
        default:
            return String(x); // Convert any other type in the usual way
    }
}

var count = 0;
while (count < 0) {
    console.log(count);
    count++;
}

function printArray(a) {
    var len = a.length, i = 0;
    if (len == 0) {
        console.log("Empty Array");
    } else {
        do {
            console.log(a[i]);
        } while (++i < len);
    }

}

for (initialize; test; increment) {
    statement
}

initialize;
while (test) {
    statement;
    increment;
}

for (var count = 0; count < 10; count++) {
    console.log(count);
}

var i, j;
for (i = 0, j = 10; i < 10; i++, j--) {
    sum += i * j;
}

function tail(o) {
    for(; o.next; o = o.next)
    return o;
}

// For/In
for (variable in object) {
    statement
}

for (var i = 0; i < a.length; i++) { // Assign array indexes to variable i
    console.log(a[i]); // Print the value of each array element

}

for (var p in o) { // Assign property names of o to variable p
    console.log(o[p]) // Print the value of each property
}

for (var i = 0; i < a .lenght; i++) {
    if (a[i] == target)
    break;
}