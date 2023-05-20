// function getTotal (a, b) {
//     return a + b
// }

// var num1 = 2; 
// var num2 = 3;

// var total = getTotal(num1, num2);
// console.log(total);

// function addTwoNums (a, b) {
//     console.log(a +b)
// }

// function randomNum() {
//     return Math.floor((Math.random() * 10) + 1)
// }

// function specificNum() { return 42 };

// var useRandom = true;
// var getNumber;

// if (useRandom) {
//     getNumber = randomNum
// } else {
//     getNumber = specificNum
// }

// addTwoNums(getNumber(), specificNum())

// class Train {
//     constructor(color, lightsOn) {
//         this.color = color;
//         this.lightsOn = lightsOn
//     }

//     toggleLights() {
//         this.lightsOn = !this.lightsOn;
//     }
//     lightsStatus() {
//         console.log('Lights on?', this.lightsOn);
//     }
//     getSelf() {
//         console.log(this)
//     }
//     getPrototype() {
//         var proto = Object.getPrototypeOf(this);
//         console.log(proto);
//     }
// }

// class HighSpeedTrain extends Train {
//     constructor(passengers, highSpeedsOn, color, lightsOn) {
//         super(color, lightsOn);
//         this.passengers = passengers;
//         this.highSpeedOn = highSpeedsOn;
//     }
//     toggleHighSpeed() {
//         this.highSpeedOn = !this.highSpeedOn;
//         console.log('High speed status:', this.highSpeedOn);
//     }
//     toggleLights() {
//         super.toggleLights();
//         super.lightsStatus();
//         console.log('Lights are 100% operational.');
//     }
// }

// var myFirstTrain = new Train('red', false);
// console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
// var mySecondTrain = new Train('blue', false);
// var myThirdTrain = new Train('blue', false);

// var train4 = new Train('red', false);
// train4.toggleLights();
// train4.lightsStatus();
// train4.getSelf();
// train4.getPrototype();

// var train5 = new Train('blue', false);
// var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

// train5.toggleLights();
// train5.lightsStatus();
// highSpeed1.toggleLights();

// // var keys = Object.keys(o);  // Get an array of property names for object o
// // var values = [] // Store matching property values in this array
// // for(var i = 0; i < keys.length; i++) { // For each index in the array
// //     var key = keys[i]; // Get the key at that index
// //     values[i] = o[key]; // Store the value in the values array
// // }

// var table = new Array(10); // 10 rows of the table
// for(var i = 0; i < table.length; i++)
//     table[i] = new Array(10);

//     var a = [1, 2, 3]; // Create a new array with these three elements
//     a.join(); // => "1,2,3"
//     a.join(" "); // => "1 2 3"
//     a.join(""); // => "123"
//     var b = new Array(10); // An array of length 10 with no elements
//     b.join('-') // => '---------': a string of 9 hyphens

//     var a = [1,2,3];
// a.reverse().join() // => "3,2,1" and a is now [3,2,1]s

// var a = new Array("banana", "cherry", "apple");
// a.sort();
// var s = a.join(", "); // s == "apple, banana, cherry"

// var a = [33, 4, 1111, 222];
// a.sort(); // Alphabetical order: 1111, 222, 33, 4
// a.sort(function(a,b) { // Numerical order: 4, 33, 222, 1111
//     return a-b; // Returns &lt; 0, 0, or &gt; 0, depending on order
//  });
// var d = a.sort(function(a,b) {return b-a}); // Reverse numerical order

// console.log(d)

// a = [1, 2, 3];
// b = a.map(function(x) { 
//     return x*x;
// }); // b is [1, 4, 9]

// a = [5, 4, 3, 2, 1];
// smallvalues = a.filter(function(x) {
//     return x < 3
// }); // [2, 1]
// everyother = a.filter(function(x,i) {
//     return i%2 == 0
// }); // [5, 3, 1]

// console.log(everyother)

// var data = [1,2,3,4,5]; // An array to sum
// // Compute the sum of the array elements
// var sum = 0; // Start at 0
// data.forEach(function(value) {
//     sum += value;
// }); // Add each value to sum
// sum // => 15
// // Now increment each array element
// data.forEach(function(v, i, a) { a[i] = v + 1; });
// data // => [2,3,4,5,6]

// const colors = ['red', 'orange', 'yellow']
// for (var color of colors) {
//     console.log(color);
// }

// const car2 = {
//     speed: 200,
//     color: "red"
// }

// console.log(Object.keys(car2)); // ['speed', 'color']

// const car3 = {
//     speed: 300,
//     color: "yellow"
// }
// console.log(Object.values(car3));

// const car4 = {
//     speed: 400,
//     color: "magenta"
// }
// console.log(Object.entries(car4));

// var clothingItem = {
//     price: 50,
//     color: 'beige',
//     material: 'cotton',
//     season: 'autumn'
// }

// for ( key of Object.keys(clothingItem) ) {
//     console.log(key, ":", clothingItem[key])
// }

// function testBracketsDynamicAccess() {
//     var dynamicKey;
//     if (Math.random() > 0.5) {
//         dynamicKey = "speed";
//     } else {
//         dynamicKey = "color";
//     }
//         var drone = {
//             speed: 15,
//             color: "orange"
//         }

//         console.log(drone[dynamicKey]);
// }

// testBracketsDynamicAccess();

// let greet = "Hello";
// let place = "World";
// console.log(`${greet} ${place}!`) // Template literal
// console.log(greet + " " + place + "!");
// console.log(greet, place, "!");

// Performing arithmetic operations inside a template literal
// console.log(`${1 + 1 + 1 + 1 + 1} stars!`)

// const fruits = ['kiwi', 'mango', 'apple', 'pear'];
// function appendIndex(fruit, index) {
//     console.log(`${index}. ${fruit}`)
// }

// fruits.forEach(appendIndex);

// const veggies = ['onion', 'garlic', 'potato'];
// veggies.forEach( function(veggie, index) {
//     console.log(`${index}. ${veggie}`);
// });

// const nums = [0, 10, 20, 30, 40, 50];
// var filt = nums.filter(function(num) {
//     return num > 10;
// })

// console.log(nums)
// console.log(filt)

// var divByTen = [0, 10, 20, 30, 40, 50].map( function(num) {
//     return num / 10
// })

// console.log(divByTen)

// const result = [];
// const drone = {
//     speed: 100,
//     color: 'yellow'
// }
// const droneKeys = Object.keys(drone);
// droneKeys.forEach( function(key) {
//     result.push(key, drone[key])
// })
// console.log(result)

// let bestBoxers = new Map();
// bestBoxers.set(1, "The Champion");
// bestBoxers.set(2, "The Runner-up");
// bestBoxers.set(3, "The third place");

// console.log(bestBoxers);

// bestBoxers.get(1);

// const fruits = ['apple', 'pear', 'plum']
// const berries = ['blueberry', 'strawberry']
// const fruitsAndBerries = [...fruits, ...berries] //concatenate using the spread operator
// console.log(fruitsAndBerries)

// //Join objects

// const flying = { wings: 2 }
// const car = { wheels: 4 }
// const flyingCar = {...flying, ...car}
// console.log(flyingCar)

// // Add new members to the array

// let veggies = ['onion', 'parsley'];
// veggies = [...veggies, 'carrot', 'beetroot'];
// console.log(veggies);

// const greeting = "Hello";
// const arrayOfChars = [...greeting];
// console.log(arrayOfChars);

// const car1 = {
//     speed: 200,
//     color: 'yellow'
// }
// const car2 = {...car1}

// car1.speed = 201

// console.log(car1.speed, car2.speed)

// const fruits1 = ['apples', 'pears']
// const fruits2 = [...fruits1]
// fruits1.pop()
// console.log(fruits1, "not", fruits2)