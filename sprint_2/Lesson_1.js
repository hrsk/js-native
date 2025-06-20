// const LE = { // лексическое окружение
//     environmentsRecords: {}, // объект куда будут записываться все созданные переменные
//     outer: LE || null, // ссылка на внешнее лексическое окружение
// }
//
// // глобальное лексическое окружение {} -> null
//
// let car // {car: undefined} -> null
//
// car = 'Toyota' // {car: 'Toyota'} -> null
//
// car = 'Ferrari' // {car: 'Ferrari'} -> null


//globalLE {} --> null

let car = 'bmw' // globalLE {car: 'bmw'} --> null объявляем переменную car и присваиваем ей значение 'bmw'
// TODO: ссылка на внешнее лексическое окружение создается в момент создания функции ???
const startEngine = function () { // globalLE {startEngine: function, car: 'bmw'} --> null
    // startEngineLE {} --> globalLE
    const car = 'kia' // startEngineLE {car: 'kia'} --> globalLE
    console.log(`Start ${car}`)
}
const startEngine2 = function () { // globalLE {startEngine: function, car: 'bmw'} --> null
    // startEngineLE {} --> globalLE

    const func = () => {
        // LE {} --> startEngineLE
        console.log(car)
    }
    func()
}
const startEngine3 = function () { // globalLE {startEngine: function, car: 'bmw'} --> null
    // startEngineLE {} --> globalLE

    const func = () => {
        // LE {} --> startEngineLE
        console.log(car = 'honda')
    }
    func()
}
const startEngine4 = function () { // globalLE {startEngine: function, car: 'bmw'} --> null
    // startEngineLE { car: access denied} --> globalLE

    console.log(`Start ${car}`)

    // let car = 'lada' // раскоментировать чтобы пример работал как нужно
}

startEngine2() // bmw
startEngine3() // honda
startEngine4() //  Cannot access 'car' before initialization

startEngine() // kia // bmw

car = 'audi' // globalLE {startEngine: function, car: 'audi'} --> null

startEngine() // kia // audi

// глобальная область видимости --
// блочная область видимости -- область видимости ограниченная фигурными скобками

//объект не создает лексического окружения
//метод объекта создает свое лексическое окружение


const startEngine5 = function () { // globalLE {startEngine: function, car: 'bmw'} --> null
    // startEngineLE { car: lada} --> globalLE
    let car = 'lada'

    function func() {
        console.log(car + `${car} + 1`)
    }

    return func

}

const func = startEngine5()
func() // ladalada + 1
startEngine5()() // ladalada + 1


const startEngine6 = function () { // globalLE {startEngine: function, car: 'bmw'} --> null
    // startEngineLE { car: lada} --> globalLE
    let car = 'lada'

    function func() {
        // {} --> startEngineLE
        console.log(car = `${car} 1`)
    }

    return func

}

let func2 = startEngine6() // lada 1
func2() // lada 1
func2() // lada 1 1
func2() // // lada 1 1 1
func2 = startEngine6() // lada 1
func2() // lada 1
func2() // lada 1 1
func2() // lada 1 1 1

// если на объект нет ссыылки в лексическом окружении или области видимости,
// сборщик мусора удалит такой объект

const counterCreator = () => {
    let count = 0

    return () => {
        console.log(++count)
    }
}

const counter1 = counterCreator()
// const counter2 = counterCreator();
const counter2 = counter1; // 1 2 3 4 5 6

counter1() // 1
counter1() // 2
counter1() // 3
counter2() // 1
counter2() // 2
counter2() // 3

