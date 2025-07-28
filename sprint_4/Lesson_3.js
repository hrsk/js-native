// Class, private fields, set/get, static methods

//TODO: class -- синтаксический сахар над функцией контсруктором

// const car1 = {
//     brand: 'bmw',
//     maxSpeed: 320,
// }
// const car2 = {
//     brand: 'kia',
//     maxSpeed: 220,
// }
// const car2 = {
//     brand: 'audi',
//     maxSpeed: 200,
// }

function carCreator(brand, maxSpeed) { // фабричная функция
    // имеет место для создания тупых объектов, которые не имееют никаких методов
    return {
        brand,
        maxSpeed,
        startEngine: function () { //создается для каждого объекта своя функция
            console.log(`Start ${this.brand}`)
        }
    }
}

// const car1 = carCreator('bmw', 320)
// const car2 = carCreator('kia', 220)
// const car3 = carCreator('audi', 250)

// console.log(car1)
// console.log(car2)
// console.log(car3)
// car1.startEngine() // метод объекта
// car2.startEngine()
// car3.startEngine()

// -----

// function CarCreator(brand, maxSpeed) {
//     this.brand = brand
//     this.maxSpeed = maxSpeed
//     this.startEngine = function () { //создается для каждого объекта новая функция
//         console.log(`Start ${this.brand}`)
//     }
// }

// const car1 = new CarCreator('bmw', 320)
// const car2 = new CarCreator('kia', 220)
// const car3 = new CarCreator('audi', 250)
//
// console.log(car1)
// console.log(car2)
// console.log(car3)
//
// console.log(car1.startEngine === car2.startEngine) // false

// -----

// function CarCreator(brand, maxSpeed) {
//     this.brand = brand
//     this.maxSpeed = maxSpeed
// }
//
// CarCreator.prototype.startEngine = function () { //создается одна функция для всех объектов
//     console.log(`Start ${this.brand}`)
// }
//
//
// const car1 = new CarCreator('bmw', 320)
// const car2 = new CarCreator('kia', 220)
// const car3 = new CarCreator('audi', 250)
//
// console.log(car1)
// console.log(car2)
// console.log(car3)
//
// console.log(car1.startEngine === car2.startEngine) // true

// -----

// class Car {
//     constructor(brand, maxSpeed) {
//         this.brand = brand
//         this.maxSpeed = maxSpeed
//     }
//     startEngine () {
//         console.log(`Start ${this.brand}`)
//     }
//     stopEngine () {
//         console.log(`Stop ${this.brand}`)
//     }
//
//     // stopEngine = () => { // НЕЛЬЗЯ ТАК ПИСАТЬ
//     //     //создается для каждого объекта потому НЕ попадает в prototype
//     //     console.log(`Stop ${this.brand}`)
//     // }
// }
//
//
// const car1 = new Car('bmw', 320)
// const car2 = new Car('kia', 220)
// const car3 = new Car('audi', 250)
//
// console.log(car1)
// console.log(car2)
// console.log(car3)
//
// car1.startEngine()
// car2.startEngine()
// car3.startEngine()
//
// console.log(car1.startEngine === car2.startEngine) // true
//
// console.log(Car.prototype)

// -----


// class Car {
//     constructor(brand, maxSpeed) {
//         this._brand = brand
//         this.maxSpeed = maxSpeed
//     }
//     startEngine () {
//         console.log(`Start ${this._brand}`)
//     }
//
// }
//
//
// const car1 = new Car('bmw', 320);
// car1._brand = 'audi'
// console.log(car1._brand)

// -----

function compareCars(car1, car2) {
  car1.maxSpeed > car2.maxSpeed
    ? console.log(`${car1.brand} is faster than ${car2.brand}`)
    : console.log(`${car2.brand} is faster than ${car1.brand}`);
}

class Car {
    #brand;

    constructor(brand, maxSpeed) {
        this.#brand = brand
        this.maxSpeed = maxSpeed
    }

    startEngine() {
        console.log(`Start ${this.#brand}`)
    }

    // getBrand() {
    //     return this.#brand
    // }
    //
    // setBrand(newValue) {
    //     if (newValue.length < 3) {
    //         console.log('new value for brand is too short')
    //         return
    //     }
    //     this.#brand = newValue
    // }

    get brand() {
        return this.#brand
    }

    set brand(newValue) {
        if (newValue.length < 3) {
            console.log('new value for brand is too short')
            return
        }
        this.#brand = newValue
    }

    compareCars(car) { // метод prototype
        this.maxSpeed > car.maxSpeed
            ? console.log(`${this.brand} is faster than ${car.brand}`)
            : console.log(`${car.brand} is faster than ${this.brand}`);
    }

    static compareCars(car1, car2) { // метод класса
        car1.maxSpeed > car2.maxSpeed
            ? console.log(`${car1.brand} is faster than ${car2.brand}`)
            : console.log(`${car2.brand} is faster than ${car1.brand}`);
    }
}


// const car1 = new Car('bmw', 320);
// car1.#brand = 'audi' // SyntaxError: Private field '#brand' must be declared in an enclosing class
// console.log(car1.#brand)


// const car1 = new Car('bmw', 320);
// car1.setBrand('audi')
// console.log(car1.getBrand())


const car1 = new Car('bmw', 320);
const car2 = new Car('audi', 250);
console.log(car1.brand) // get brand

// car1.brand = 'audi' // set brand

car1.startEngine()

Car.compareCars = function () { //перезапишет и выведся hi
    console.log("hi");
};

car1.compareCars(car2); // использование метода compareCars из prototype

Car.compareCars(car1, car2)


//TODO: static -- создает метод для Class, а не для prototype


// -------

// class Car {
//     constructor(brand, maxSpeed) {
//         this.brand = brand;
//         this.maxSpeed = maxSpeed;
//     }
//     startEngine() {
//         console.log(`Start ${this.brand}`);
//     }
//     static compareCars(car1, car2) {
//         car1.maxSpeed > car2.maxSpeed
//             ? console.log(`${car1.brand} is faster than ${car2.brand}`)
//             : console.log(`${car2.brand} is faster than ${car1.brand}`);
//     }
// }
//
// const bmw = new Car("bmw", 250);
//
// class SuperCar extends Car {
//     constructor(brand, maxSpeed, fly) {
//         super(brand, maxSpeed);
//         this.fly = fly;
//     }
//     flying() {
//         console.log(`${this.brand} is flying`);
//     }
// }
//
// const superBmw = new SuperCar("superBmw", 400, true);
// const superKia = new SuperCar("superKia", 440, true);
//
// superBmw.flying();
// superBmw.startEngine();
//
// SuperCar.compareCars(superBmw, superKia);

//TODO: наследуются как прототипные методы, так и статические
