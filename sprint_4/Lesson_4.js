//this
//.this -- ключевое слово, которое ссылается на объект


//Global scope
//если не строгий режим !== "use strict"
console.log(this) //.this будет ссылаться на глобальный объект window, если в браузере или global, если nodeJS

//если "use strict"
//то this либо объект, либо undefined

// Function --> arrow function || simple function

const a = () => { //инициализациия функции
    //стрелочная функция не имеет своего this (контекста вызова) и она выходи наверх
    //и она закрепится за первым поповшимся this
    //this для стрелочной функции присваивается в момент ее инициализации
    console.log(this) // this будет ссылаться на объект window
}
a()

function func() { // this для обычной функции определятся в момент ее вызова
    //this === window
    const a = () => {
        console.log(this)
    }
    a()
}

func() // window.foo ||TODO: ЗДЕСЬ ОПРЕДЕЛЯЕТСЯ this для func

const user = { // объект не создает своего лексического окружения
    firstName: "Artem",
    showName: () => {
        console.log("name: ", this.firstName) // this === firstName
        // firstName нет в объеке window
        //
    }
}

user.showName() //  undefined

const user2 = { // объект не создает своего лексического окружения
    firstName: "Artem",
    showName: function () {
        console.log("name: ", this.firstName)
    }
}

user2.showName() //  Artem


const user3 = { // объект не создает своего лексического окружения
    firstName: "Artem",
    // this === user
    showName() {
        user3.firstName = 'Nastya'
        const a = () => {
            console.log("name: ", this.firstName)
        }
        a()
    }
}

user3.showName() //  Artem


const user4 = { // объект не создает своего лексического окружения
    firstName: "Artem",
    // this === user
    showName() {
        const a = function () {
            // this === window
            console.log("name: ", this.firstName)
        }
        a() // window.a()
    }
}

user4.showName() // undefined

const user5 = { // объект не создает своего лексического окружения
    firstName: "Artem",
    // this === user
    showName: () => { // this === window
        const a = function () {
            // this === window
            console.log("name: ", this.firstName)
        }
        a() // window.a()
    }
}

user5.showName() // undefined

function func2() {
    const user = {
        firstName: "Artem",
        showName: function () {
            // this === user
            const a = function () {
                console.log(this.firstName)
            }
            a()
        }
    }
    return user
}

const res = func2()
res.showName() // undefined

function func3() {
    const user = {
        firstName: "Artem",
        showName() {
            // this === user
            const a = () => {
                console.log(this.firstName)
            }
            a()
        }
    }
    return user
}

const res3 = func3()
res3.showName() // Artem


function startEngine() {
    console.log(`start ${this.brand}`)
}

const startEngine2 = () => {
    console.log(`start ${this.brand}`)
}
const car1 = {
    brand: 'bmw',
}

const car2 = {
    brand: 'kia',
}

car1.func = startEngine
car2.func = startEngine

car1.func() // bmw
car2.func() // kia
startEngine() // undefined

car1.func = startEngine2
car2.func = startEngine2

car1.func() // undefined
car2.func() // undefined
startEngine2() // undefined

const car3 = {
    color: 'black',
    showColor() {
        // this === car3
        (
            () => {
                console.log(this.color)
            }
        )()
    }
}

car3.showColor() // black

const car4 = {
    color: 'black',
    showColor: () => {
        // this === window
        (
            () => {
                // this === window
                console.log(this.color)
            }
        )()
    }
}

car4.showColor() // undefined

//функции для переопределния контекста функции
//call

const car10 = {
    color: 'red',
    showColor() {
        console.log(this.color)
    }
}

const car11 = {
    color: 'black'
}
//параметры передаются через запятую
car10.showColor.call(car11) // black

//apply

const car12 = {
    color: 'red',
    showColor() {
        console.log(this.color)
    }
}

const car13 = {
    color: 'black'
}
//параметры передаются в массиве
car12.showColor.apply(car13) // black

//bind

const func12 = car12.showColor.bind(car13) // возьми ссылку на функцию и привяжи ей контекст к функции car13
func12()
// контекст можно переопределить только один раз

const car = {
    brand: 'bmw',
    speed: 200,
    showMaxSpeed() { // если объявить как стрелочную функцию, то в setTimeout будет возвращаться undefined
        console.log(this.speed)
    }
}

setTimeout(car.showMaxSpeed, 1000) // undefined потеря контекста

setTimeout(car.showMaxSpeed.bind(car), 1000) // 200
setTimeout(() => car.showMaxSpeed(), 1000) // 200

// Function constructor -- конструирует новый объект

function CarCreator(brand) {
    // общепринятое правильно называть функции конструкторы с большой буквы
    // {}
    // this = {}
    this.brand = brand

    // return this
}

const car100 = new CarCreator('bmw') //создание функции конструктора
const car101 = CarCreator('bmw')

console.log(car100) // bmw
console.log(car101) // undefined