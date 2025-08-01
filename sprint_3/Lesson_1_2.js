// globalLE {startEngine: function(), car: undefined} //  если var
// console.log(car) // undefined , если var
// globalLE {startEngine: function()}
// console.log(car) // ошибка , если let


/*


// globalLE { startEngine: function() }
// в глобальное лексическое окружение попадет только то, что подлежит всплытию,
// поэтому в глобальное лексическое окружени в начале выполнения кода попдет только startEngine
// потому что объявлена с помощью function declaration

let car = 'bmw' // globalLE { startEngine: function(), car: 'bmw' }
// var car = 'bmw'
startEngine() // 'bmw' функция вызвана до того как произошло переприсвоение
function startEngine() {
    // ==> globalLE
    // ссылка на лексическое окружение создается в момент инициализации функции
    // а сам, объект лексического окружения создается только в момент вызова функции

    // после вызова функции создает объект лексического окружения
    // startEngineLE: { } ==> globalLE который ссылается на объект глобального лексического окружения
    console.log(`Start ${car}`)

    // const func = () => {
    //   // ==> startEngineLE
    // }
    // func()
}

car = 'kia' // globalLE { startEngine: function(), car: 'kia' }

startEngine() // kia

*/

// -------
/*

//globalLE: { startEngine: function() }

const car = 'bmw' // globalLE: { startEngine: function(), car: 'bmw' }

function startEngine() {
    // startEngineLE { } ==> globalLE
    const car = 'kia' // startEngine { car: 'kia' } ==> globalLE
    return () => console.log(`Start ${car}`) // funcLE { } ==> startEngineLE
}

const func = startEngine() // globalLE: { startEngine: function(), car: 'bmw', func: () => {} }
func() // kia

*/

// ------

/*

//globalLE: { startEngine: function() }

const car = 'bmw' // globalLE: { startEngine: function(), car: 'bmw' }

function startEngine() {
    // startEngineLE { } ==> globalLE
    return () => console.log(`Start ${car}`) // funcLE { } ==> startEngineLE
}

const func = startEngine() // globalLE: { startEngine: function(), car: 'bmw', func: () => {} }
func() // bmw
*/

// ----

/*
//globalLE: { startEngine: function() }


function startEngine() {
    // startEngineLE { } ==> globalLE
    return () => console.log(`Start ${car}`) // funcLE { } ==> startEngineLE
}

const func = startEngine()
// globalLE: { startEngine: function(), func: () => {} } ==> null
func() // car is not defined

*/


// ----

//globalLE: { }

const car = 'bmw' // globalLE: { car: 'bmw' }

const startEngine = () => { // globalLE: { startEngine: function(), car: 'bmw' }

    // startEngineLE { } ==> globalLE
    return () => console.log(`Start ${car}`) // funcLE { } ==> startEngineLE
}

const func = startEngine()
// globalLE: { startEngine: function(), func: () => {} } ==> null
func() // car is not defined


// ----

//globalLE { func2: function() }

const a = 10 //globalLE { func2: function(), a: 10 }
const b = 20 //globalLE { func2: function(), a: 10, b: 20 }

const func1 = () => { //globalLE { func2: function(), a: 10, b: 20, func1: function() }
    // func1LE { } ==> globalLE
    let a = 30 // func1LE: { a: 30 } ==> globalLE
    let b = 40 // func1LE: { a: 30, b: 40 } ==> globalLE

    console.log(a) // 30
    func2()
}

func1(); // globalLE {  func2: function(), a: 10, b: 20, func1: function() }

function func2() {
    // func2LE { } ==> globalLE
    console.log(b) // 20
}


// -----

/*
const LE = {
    environmentsRecords: {
    //лексическое окружение - это объект, в котором сохраняются все локальные переменные, функции т. д
    },
    outer: LE || null // ссылка на внешнее лексическое окружение
    // у глобального LE нет лексического окружения === null
    // все, что имеет фигурные скобки, кроме объекта Object || {} -- имеет лексическое окружение

    // if () {
    //     // LE
    // }
    //
    // for () {
    //     // LE
    // }
    //
    // function() {
    //     // LE
    // }

}
*/


//TODO: всплытию (hoisting) подлежат функции объявленные с помощью function declaration и переменные объявленные с помощью var


// -------


//TODO: замыкание -- способность функции запоминать свое внешнее лексическое окружение где она была создана


// Recursion

// 2 * 2 * 2 * 2 || 2(4) ==> 2 * 2(3) ==>
// ==> 2 * 2 * 2(2) ==> 2 * 2 * 2 * 2(1)
// У рекурсии обязательно должен быть шаг рекурсии и условие выхода из рекурсии

const pow = (x, n) => {
    if (n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}

console.log(pow(3, 4))

//factorial

const factorial = (x) => {
    if (x === 1) { // условие выхода из рекурсии
        return x
    } else { // шаг рекурсии
        return x * factorial(x - 1)
    }
}

console.log(factorial(5)) // 120

//TODO: stack - структура данных
// для выполнения кода создается только ОДИН stack

/*

const a = () => {

}

const b = () => {
    a()
}

const c = () => {
    b()
}

c()
*/
