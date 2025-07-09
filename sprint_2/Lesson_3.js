//TODO: Promise — специальный объект JavaScript, который используется для написания и обработки асинхронного кода.
// Promise имеет шесть статических методов класса.
//Promise.all(promises) – ожидает выполнения всех промисов и возвращает массив с результатами.
//Если любой из указанных промисов вернёт ошибку, то результатом работы Promise.all будет эта ошибка, результаты остальных промисов будут игнорироваться.

//Promise.allSettled(promises) (добавлен недавно) – ждёт, пока все промисы завершатся и возвращает их результаты в виде массива с объектами, у каждого объекта два свойства:
// status: "fulfilled", если выполнен успешно или "rejected", если ошибка,
// value – результат, если успешно или reason – ошибка, если нет.

// Promise.race(promises) – ожидает первый выполненный промис, который становится его результатом, остальные игнорируются.

// Promise.any(promises) (добавлен недавно) – ожидает первый успешно выполненный промис, который становится его результатом, остальные игнорируются. Если все переданные промисы отклонены, AggregateError становится ошибкой Promise.any.

// Promise.resolve(value) – возвращает успешно выполнившийся промис с результатом value.

// Promise.reject(error) – возвращает промис с ошибкой error.


//Промис может находиться в одном из трёх состояний:
//
// pending — стартовое состояние, операция стартовала;
// fulfilled — выполнен успешно, получен результат;
// rejected — выполнен с ошибкой.

//TODO: Поменять состояние Promise можно только один раз: перейти из pending либо в fulfilled, либо в rejected


//Методы промиса
// then()
// catch()
// finally()
// выполняют код при смене состояния.

//TODO: Промис создаётся с помощью конструктора.

/*
function promise() {
    new Promise((resolve, _) => {
        // Делаем асинхронную операцию:
        // Запрос текущего местоположения устройства.
        // В случае успешного выполнения запроса
        // колбэк-функция получит данные о местоположении.
        const data = fetch('https://bing.com/?query=js')
        // Переводим промис в состояние fulfilled.
        // Результат выполнения — объект data
        return resolve(data)
    }).then((data) => {
        console.log(data.url)
    })
}


function errorPromise() {
    new Promise((_, reject) => {
        // Переводим промис в состояние rejected.
        // Результат выполнения — объект Error
        return reject(new Error('some error'))
    }).catch((error) => {
        console.log(error.message)
    })
}

promise()
errorPromise()
*/

// ----

//После создания, промис находится в состоянии ожидания pending.
// После завершения асинхронной операции, функция переводит промис в состояние успеха fulfilled или ошибки rejected.
// С помощью методов then(), catch() и finally() мы подписываемся на изменение состояния промиса
// и используем результат его выполнения.


//TODO: .then() принимает в качестве аргумента две функции-колбэка.
// Если промис в состоянии fulfilled, выполнится первая функция. Если в состоянии rejected — вторая.
// Однако, хорошей практикой считается не использовать второй аргумент метода then(),
// а обрабатывать ошибки при помощи метода catch().


/*
function func() {
    fetch("https://swapi.info/api")
        .then((res) => res.json())
        .then((json) => console.log(json['films']))
        .catch((error) => console.error(error.message))
}

func()

*/

// асинхронная функция fetch() возвращает промис,
// на который мы подписываемся с помощью метода .then().
// При его выполнении в консоль выведтся 'https://swapi.info/api/films'.

// Метод .catch() используются, для выполнения кода в случае возникновеия ошибки при выполнении асинхронной операции.
// принимает в качестве аргумента функцию-колбэк,
// которая выполняется сразу после того, как промис поменял состояние на rejected.

// Метод finally() используют, чтобы выполнить код при завершении асинхронной операции.
// Он будет выполнен вне зависимости от того, была ли операция успешной или завершилась ошибкой.
// Самый частый сценарий использования finally() — работа с индикаторами загрузки.


// ----

// Методы then(), catch() и finally() часто объединяют в цепочки вызовов:
// При успешном завершении выполнится код из .then(), а ошибке — код из .catch().
// Затем выполнится код из finally().
// Цепочки методов — очень гибкий подход, который позволяет создавать зависимые асинхронные операции.


// если подписаться с помощью .then на await,
// то await будет дожиться результата выполнения последнего .then в цепочке

//await подписывается только на resolve promise, а если promise rejected , то мы попадаем в .catch()


// методы фабрики, используются в основном при написании тестов
//TODO: Promise.reject() статический метод создания нового промиса с состоянием reject
//TODO: Promise.resolve() статический метод создания нового промиса с состоянием resolve

// 6 статитических матодов промиса
// 2 метода фабрики

/*
try {

} catch (e) {

} finally {
    нельзя ничего возврщать, поскольку возвращаемый результат перезатрет возвратщаемый результат из then
}
*/

// fetch('https://yahoo.com/?query=js')
// console.log(yahooData.url)
// fetch('https://bing.com/?query=js')
// console.log(bingData.url)
// fetch('https://google.com/?query=js')
// console.log(googleData.url)

// ----

/*
fetch('https://yahoo.com/?query=js')
    .then(yahooData => {
        console.log(yahooData.url)
        return fetch('https://bing.com/?query=js')
    })
    .then(bingData => {
        console.log(bingData.url)
        return fetch('https://google.com/?query=js')
    })
    .then(googleData => {
        console.log(googleData.url)
    })
*/

// ----

/*
const run = async () => {
    const yahooData = await fetch('https://yahoo.com/?query=js')
    console.log(yahooData.url)
    const bingData = await fetch('https://bing.com/?query=js')
    console.log(bingData.url)
    const googleData = await fetch('https://google.com/?query=js')
    console.log(googleData.url)
}

run()
*/

// ----

//TODO: ключевое слово async добавляется перед функцие и гарантирует, что функция вернет Promise,
// независимо от того, какого формата данные она возвращает.
// В любом случае, они будут обернуты в промис.

/*
async function getSomething() {
    return 'Hello!'
}

console.log(getSomething())

getSomething()
    .then((some) => {
        console.log(some)
    })
*/

// ----

//TODO: ключевое слово await нужно для того, чтобы заставить Javascript код,
// дождаться выполнения промиса, а только затем продолжить работу

/*
function getSomethingWithAsyncAwait() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello!')
        }, 3000)
    }).then(res => {
        console.log(res)
    })
}

const temp = async () => {
    console.log('Start')
    await getSomethingWithAsyncAwait()
    console.log('Finish')
}

console.log(temp()) // start hello! finish
*/

// ----

async function getSomethingWithAsyncAwait2() {
    //TODO: await приостанавливает выполнение ТОЛЬКО внутри функции, но не снаружи.
    const promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello!')
        }, 3000)
    }).then(res => {
        console.log(res)
    })
    console.log('After Hello')
    return promise

}

console.log('Start')
// TODO: выводит ещё не завершённый промис, не дожидаясь его результата.
console.log(getSomethingWithAsyncAwait2()) // start <pending> finish hello!
console.log('Finish')

// ----

/*
const run = async () => {
    try {
        const yahooData = await fetch('https://yahoo.com/?query=js')
        console.log(yahooData.url)
        const bingData = await fetch('https://bing.com/?query=js')
        console.log(bingData.url)
        const googleData = await fetch('ht tps://google.com/?query=js')
        console.log(googleData.url)
    } catch (error) {
        console.log(error.message)
    }
    finally {
        console.log(`I'm finally`)
    }
}

run()
*/

// ----

//TODO: Метод Promise.all() принимает массив промисов и возвращает новый промис.
// Новый промис завершится, когда завершится весь переданный список промисов, а результатом его выполнения будет массив результатов переанных промисов,
// а порядок элементов массива в точности соответствовать порядку исходных промисов.
// Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, немедленно завершится с этой ошибкой.

/*
const promiseAll = Promise.all([
    fetch('https://google.com/?query=js'),
    fetch('https://yahoo.com/?query=js'),
    fetch('https://bing.com/?query=js'),
    // fetch('ht tps://bing.com/?query=js'), // если промис завершится с ошибкой, то Promise.all() вернет новый промис содержащий в себе это ошибку
])

promiseAll
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log('CATCH ERROR', err.message)
    })
*/

// ----

//TODO: Метод Promise.race() ожидает только первый выполненный промис,
// который завершится, когда будет получен первый результат ИЛИ ошибка от переданных промисов.
// Результаты или ошибки остальных промисов будут проигнорированы.
// из которого берёт результат (или ошибку), после чего, все остальные промисы игнорируются.

/*
const promiseRace = Promise.race([
    fetch('https://google.com/?query=js'),
    fetch('https://yahoo.com/?query=js'),
    fetch('https://bing.com/?query=js'),
])

promiseRace
    .then(data => {
        console.log(data.url)
    })
    .catch((error) => {
        console.log(error.message)
    })
*/

// ----

//TODO: Метод Promise.any() похож на Promise.race(),
// но возвращает промис, который завершится, когда получен первый (самый быстрый) результат (без ошибки) из всех переданных промисов.
// Если ни один из переданных промисов не завершится успешно,
// тогда возвращённый объект Promise будет отклонён с помощью AggregateError – специального объекта ошибок,
// который хранит все ошибки промисов в своём свойстве errors.

/*
const promiseAny = Promise.any([
    fetch('ht tps://google.com/?query=js'),
    fetch('ht tps://yahoo.com/?query=js'),
    fetch('ht tps://bing.com/?query=js'),
])

promiseAny
    .then(data => {
        console.log(data.url)
    })
    .catch(err => {
        console.log(err)
    })
*/

// ----

//TODO: Метод .allSettled() возвращает промис, который никогда не зареджектится,
// соответственно никогда не отработает catch().
// У данного метода всегда будет отрабатывать метод .then() с таким массивом елементов:
// {status:"fulfilled", value:результат} для успешных завершений,
// {status:"rejected", reason:ошибка} для ошибок.
// Метод применяется для запросов к API. Особенно удобен, когда запросы независимы
// и ошибка в одном не влияет на другие, так как Promise.allSettled() дождётся завершения всех запросов.
// Если же запросы зависимы, то лучше использовать метод Promise.all().

/*
const promises = [
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject('error'), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
]

Promise.allSettled(promises)
    .then(([response1, response2, response3]) => {
        console.log(response1)
        // { status: 'fulfilled', value: 1 }
        console.log(response2)
        // { status: 'rejected', reason: 'error' }
        console.log(response3)
        // { status: 'fulfilled', value: 3 }
    })
*/

/*
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.org/i_need_an_error',
]
const arrayFetchData = urls.map(url => fetch(url).then(res => res.json()))

Promise.allSettled(arrayFetchData)
    .then((res) => {
        // res — массив результатов выполнения промисов
        res.forEach(item => {
            console.log(item)
        })
    })
*/

// { status: 'fulfilled', value: { userId: 1, id: 1, ... } }
// { status: 'rejected', reason: 'TypeError: fetch failed...' }


