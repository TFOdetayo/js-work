// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

// function logDairy () {
//     for (var dair of dairy) {
//         console.log(dair);
//     }
// }

// logDairy()

// const animal = {
//     canJump: true
//     };
//     const bird = Object.create(animal);
//     bird.canFly = true;
//     bird.hasFeathers = true;

//     function birdCan() {
//         for (key of Object.keys(bird)) {
//             console.log(key, ": ", bird[key])
//         }
//     }

//     function animalCan() {
//         for (let key in bird) {
//             console.log(key, ": ", bird[key])
//         }
//     }

// birdCan()
// animalCan()
// function consoleStyler(color, background, fontSize, txt) {
//     var message = "%c" + txt;
//     var style;
//     var style = `color: ${color};`
//     style += `background: ${background};`
//     style += `font-size: ${fontSize};`
//     console.log(message);
//     console.log(style);
// }

// function celebrateStyler(reason) {
//     var fontStyle = "color: tomato; font-size: 50px";
//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontStyle);
//     } else if (reason == "champions") {
//         console.log(`%cCongrats on the title!`, fontStyle);
//     } else {
//         console.log(message, style);
//     }
// }

// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
// celebrateStyler('birthday')

// function styleAndCelebrate(color, background, fontSize, txt, reason) {
//     consoleStyler(color, background, fontSize, txt);
//     celebrateStyler(reason);
// }

// styleAndCelebrate('#ef7c8e', '#fae8e0', '30px', 'You made it!', 'champions')

class Person {
    constructor (name, age, energy) {
        this.name = name
        this.age = age
        this.energy = energy
        name = "Tom"
        age = 20
        energy = 100
    }

    sleep() {
        this.energy += 10
    }

    doSomethingFun() {
        this.energy -= 10
    }
}

class Worker extends Person {
    constructor(name, age, energy, xp, hourlyWage) {
        super(name, age, energy)
        this.xp = xp
        this.hourlyWage = hourlyWage
        xp = 0
        hourlyWage = 10
    }

    goToWork() {
        this.xp = this.xp + 10
    }
}

var intern = new Worker('Bob', 21, 110, 0, 10);
intern.goToWork();
var manager = new Worker('Alice', 30, 120, 100, 30)
manager.doSomethingFun();
return manager;

const intern = {
    name: "Bob",
    age: 21,
    energy: 110,
    xp: 0,
    hourlyWage: 10
}

intern.goToWork();
return intern

