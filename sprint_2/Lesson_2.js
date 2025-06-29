// cинхронный код
console.log('A')
console.log('B')
console.log('C')

// function greet() {
//     console.log('Hello!')
// }
//
//
// delay(5000) вымышленная функция, по истечении кототрой должна вызваться функция greet
// greet()
// выполнение синхронного кода — строка за строкой.
// То есть пока delay() не выполнится до конца, к следующей строке интерпретатор не перейдёт.

//TODO: операции, которые не дают выполнять ничего кроме них самих,
// пока они не завершатся, называются блокирующими выполнение.

// setTimeout(() => { //колбек будет запущен по истечении 2ух секунд
//     greet()
// }, 2000)

//TODO: Javascript не умеет считать время которое мы передаем в setTimeout()
// поэтому отсчет этого времени берет на себя асинхронный мир.

//TODO: Promise - это специальный объект,
// который имеет три состояния -- pending, fulfilled и rejected.

// за создание объекта промиса отвечает class, который принимается в себя
// функцию callback, в которую сам класс передаст нам две других функции: resolve() и reject()
// которые нужны для изменения состояния промиса.

// const promise = new Promise((resolve, reject) => {})
//
// console.log(promise)

// ----------

// const server = {
//     getData() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('server data')
//             }, 2000)
//         })
//     },
// }
//
// const promise = server.getData()
//
// setTimeout(() => {
//
//     console.log(promise)
// }, 3000)
//
//
// promise.then(res => {
//   console.log('then', res)
// })
//
// promise.catch(err => {
//   console.log('catch', err)
// })

// promise.finally(() => {
//   console.log('do something')
// })

// ----------

const getData = () =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res('some data');
            // rej("some error");
        }, 1000);
    });


getData()
    .then((data) => {
        console.log("then1", data); // в объект data попадет значение которым зарезовился предыдущий промис
        // в консоли увидим 'then1 some data'
        return new Promise((res, rej) => {
            setTimeout(() => {
                // res("some data from request2");
                rej("some error");
            }, 2000);
        });
    })
    .then((data) => {
        console.log("then2", data);
        return 20;
    })
    .catch((data) => {
        console.log("catch1", data); // в объект data попадет значение, которым зареджектился промис,
        // в консоли увидим 'catch1 some error'
        // return null; // если return, то в следующий then попадет возвращаемое значение
    })
    .then((data) => {
        console.log("then3", data); // если catch вернет null, то в консоль выведется then3 null
        return b; // возвращаем не объявленную переменную, следовательно попадаем в catch
    })
    .then((data) => {
        console.log("then4", data);
        return 40;
    })
    .catch((data) => {
        console.log("catch2", data); // так как b не объявлена, то в дату попадает 'b is not defined'
        return 50;
    })
    .finally((data) => {
        console.log("finally", data); //  метод finally не принимает в параметры никакие значение,
        // а только вызывает переданные ему callback, поэтому в консоли увидим finally undefined
        return 60;
    })
    .then((data) => {
        console.log("then5", data); // вернем дату вовзращаемую методом промиса catch,
        // в консоль выведется 'then5 50'
    });



