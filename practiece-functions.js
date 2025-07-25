/*
const films = [];

function getFilms(title = 'Все фильмы') {

    return {
        title, films: addNewFilm()
    }
}

function addNewFilm(filmName, index) {

    if (index >= 0) {
        return films[index] = filmName
    } else {
        console.log('Фильм не будет добавлен, потому что нет индекса')
    }

    return films
}

addNewFilm('SpiderMan', 0)
addNewFilm('Film2', 1)
addNewFilm('Film3', 2)
addNewFilm('Film4', 3)
addNewFilm('Film4') // Фильм не будет добавлен, потому что нет индекса

const myFilms = getFilms()

console.log(myFilms)
*/

function getFilms(title = 'Все фильмы') {

    return {
        title, films: getFilmsArray()
    }
}

function addNewFilm(films, filmName, index) {
    if (index >= 0) {
        films[index] = filmName
    } else console.log('Фильм не будет добавлен, потому что нет индекса')
}

function getFilmsArray() {

    const films = []

    addNewFilm(films, {film: 'SpiderMan'}, 0)
    addNewFilm(films, {film: 'SpiderMan 2'}, 1)
    addNewFilm(films, {film: 'SpiderMan 3'}, 2)
    addNewFilm(films, {film: 'SpiderMan 4'}, 3)
    addNewFilm(films, {film: 'Какой-то фильм'}) // Фильм не будет добавлен, потому что нет индекса

    return films
}

const myFilms = getFilms()

console.log(myFilms)


function calc(a, b, callback) {
    callback('John')
    return a + b
}

calc(1, 2, function (name) {
    console.log(name, 'I am declaration')
})
calc(1, 2, (name) => {
    console.log(name, 'I am arrow')
})

const DATA = [
    {id: 10, name: 'Alex', money: 1000},
    {id: 11, name: 'John', money: 500},
    {id: 12, name: 'Helen', money: 5500},
]

// getUserMoney({id: 10}, (user) => {
//     console.log(`У ${user.name} ${user.money}`)
// }) // У Alex 1000 $.
// getUserMoney({id: 11}, (user) => {
//     console.log(`${user.name} has ${user.money}`)
// }) // John has 500$.
// getUserMoney({id: 12}, (user) => {
//     console.log(`У ${user.name} -- ${user.money}`)
// }) // У Helen -- 5500$.

// function getUserMoney(userInfo, callback) {
//     const userId = userInfo.id
//
//     let result = null
//
//     for (let i = 0; i < DATA.length; i++) {
//         const user = DATA[i]
//
//         if (user && user.id === userId) {
//             result = user
//         }
//     }
//     return callback(result)
// }

function getUserMoney(userInfo, callback) {
    const userId = userInfo.id

    let result = null

    for (let i = 0; i < DATA.length; i++) {
        const user = DATA[i]

        if (user && user.id === userId) {
            result = user
        }
    }

    return callback(result)

}

//TODO: если у функции getUserMoney не будет явного return,
// то в alexMoney попадет undefined

const alexMoney = getUserMoney({id: 10}, (user) => {
    return `У ${user.name} ${user.money}`;
    // return str

}) // У Alex 1000 $.
getUserMoney({id: 11}, (user) => {
    console.log(`${user.name} has ${user.money}`)
}) // John has 500$.
getUserMoney({id: 12}, (user) => {
    console.log(`У ${user.name} -- ${user.money}`)
}) // У Helen -- 5500$.

console.log(alexMoney)

function getLength(string = '') {
    return string.length
}

console.log(getLength('Hello'))

function getValues(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result / arr.length
}

console.log(getValues([1, 2, 3, 4, 5]))


function getStrings(arr, number) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === number) {
            result.push(arr[i])
        }
    }
    return result

}

const result = getStrings(['hello', 'a', 'b', 'world', 'xzxz'], 4)
console.log(result)
