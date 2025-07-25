//Анонимная, IIFE (Самовызывающаяся), рекурсивная

//TODO: IIFE -- Immediately Invoked Function Expression

/*() => {*/
/*    // анонимная*/
/*}*/
/**/
/*(function () {*/
/*    // самовызывающаяся*/
/*})()*/
/**/
/*(() => {*/
/*})() //самовызывающаяся*/

// ----

//TODO: каррирование
const currySum = (a) => {
    return (b) => {
        return a + b
    }
}

const result = currySum(10)(15)
console.log(result) // 25
// console.log(result) // [Function (anonymous)]
// console.log(result()) // NaN

const log = (time) => {
    return (message) => {
        return time + ' - ' + message
    }
}

const logWithTime = log('9:00')

// const logWithTime = (message, time) => {
//     return time + ' - ' + message
// }

// const logWithTime = (time) => {
//     const fullTime = 'Вы вошли на сайт в:' + time;
//     return (message) => {
//         return fullTime + ' - ' + message
//     }
// }

setTimeout(() => {
    const message = logWithTime('Пользователь нажал войти')
    console.log(message)
}, 1000)

setTimeout(() => {
    const message = logWithTime('Пользователь нажал выйти')
    console.log(message)
}, 3000)


// ----

//TODO: рекурсия -- способность  функции вызывать саму себя

/*
let i = 0;
const recursion = () => {
    i++
    console.log('recursion')
    if (i === 10) return // условие выхода из рекурсии
    recursion()
}
recursion()
*/

// -----

/*
function calculate() {
    const a = 10
    const b = 15
    // const result = a + b
    return a + b
}

const resultCalculate = calculate() // запишет в переменную resultCalculate значение возвращаемое функцией calculate
console.log(resultCalculate)
*/

// -----

//TODO: возврат несколько значений из функции
function calculateObj() {
    const a = 10
    const b = 15

    return {sumResult: a + b, subResult: a - b}
}

const resultCalculate = calculateObj()
console.log(resultCalculate) // { sumResult: 25, subResult: -5 }
console.log(typeof resultCalculate) // object
console.log(resultCalculate.sumResult) // 25
console.log(resultCalculate.subResult) // -5

function calculateArr() {
    const a = 10
    const b = 15

    return [a + b, a - b]
}

console.log(typeof calculateArr()) // object
console.log(calculateArr()) // [25, -5]
console.log(calculateArr()[0]) // 25
console.log(calculateArr()[1]) // -5

function calculateUndefined() {
    const a = 10
    const b = 15

    return undefined

    // если функция ничего не возрвщает, она неявно возвращает undefined
}

console.log(calculateUndefined()) // undefined


function calculateWithArgs(a, b) { // a, b -- аргументы передаваемые в функцию
    return {
        sumResult: a + b, subResult: a - b
    }
}

function calculateWithArgsDefaultValue(a = 10, b = 15) { // 10, 15 -- значения по умолчанию
    return {
        sumResult: a + b, subResult: a - b
    }
}

const resultCalculateWithArgs = calculateWithArgs(10, 15)
console.log(resultCalculateWithArgs) // { sumResult: 25, subResult: -5 }
const resultNaN = calculateWithArgs()
console.log(resultNaN) // { sumResult: NaN, subResult: NaN }
const resultCalculateWithArgsDefaultValue = calculateWithArgsDefaultValue()
console.log(resultCalculateWithArgsDefaultValue) // { sumResult: 25, subResult: -5 }

