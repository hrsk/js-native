//TODO: Типы данных JS:
// Примитивы -- это типы данных, которые хранят одно значение,
// примитивы хранятся в стеке -- фиксированный размер памяти который равен 1МБ.
// Ссылочные типы данных -- хранятся в куче
// Куча — это область памяти, где данные могут выделяться динамически
// во время выполнения программы.
// данные в куче остаются, пока не будут явно удалены.
// Если объекты не удаляются, когда они больше не нужны,
// это может привести к утечке памяти.

//TODO: примитивы
//string, number, boolean, null, undefined, BigInt
// переменная которая содержит строку, может хранить только одну строку let a = 'string values'

//TODO: ссылочный тип данных
//object, array, function, Class, Set, Map

// Особенности объектов:
// - Более сложная структура (например, вложенные друг в друга объект, вложенные массивы)
// - Имеют свойства и методы
// - Ссылочный тип данных

//TODO: Создание объекта с помощью литерала объекта
// const user = {} литерал объекта

//Литерал объекта - это набор символов(печатных символов),
//чтение которых интерпретатором приводит к созданию в оперативной памяти браузера объекта.
//а фигурные скобки {} -- это команда для интерпретатора, чтобы он создал объект.

//TODO: литерал это не объект, а из способов создания объекта.

//TODO: Создание объекта с помощью конструктора Object

const person = new Object();
person.name = 'John';
person.age = 30;
console.log('person obj:', person)

//TODO: C помощью функций конструкторов
//TODO: С помощью классов

// объекты и массивы хранятся в отдельной области памяти, а в той области памяти, где хранятся переменные
// хранятся ссылки на эти объекты


// функция де-факто является объектом, имеет свои свойства и методы,
// но функция не используется как структура для хранения данных

// методы функции .call(), .bind(), .apply()

let a = {'объект 123': 'пустая строка'} // ссылка #123

let b = a // ссылка на #123

console.log(b)
console.log(a)
console.log(a === b) // true потому что ссылка на один и тот же объект

//TODO: иммутабельная работа с данными
//CRUD -- create read update delete
// создаем копию => вносим изменения => используем копию в дальнейшем


const user = {
    name: 'Bob',
    age: 32,
    isStudent: true
}

const copyUser1 = {
    name: user.name,
    age: user.age,
    isStudent: user.isStudent,
}

console.log(user === copyUser1)

let user1 = {
    name: 'Bob',
    age: 32,
    isStudent: false,
}

const user1Copy = { ...user1 }
user1Copy.name = 'Alex'
console.log(user1.name) // Bob
console.log(user1Copy.name) // Alex
console.log(user1 === user1Copy) // false

//TODO: ... -- spread operator
// spread оператором мы говорим -- при создании нового объекта, положи все пары ключ-значение как в user.
const copyUser = {...user, age: 34}

console.log(copyUser)
console.log(copyUser === user) // false так как разные ссылки на ячейки памяти

const arr = [1, 2, 3, 4, 5]
const newArr = [...arr, 6]
console.log(newArr)

const arr2 = [7, 8, 9, 10]

const newArr2 = [...arr, ...arr2]
console.log(newArr2)

//TODO: для создания копии используются литерал объекта или массива,
// или spread оператор

//TODO: новый объект можно создавать следующими способами:
// с помощью констуруктора, Object.assign

//TODO: новый массив можно создавать с помощью цикла for...in,
// или с помощью методов .slice, .concat


const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true
    }
]

//add new user

const newUser = {
    id: 5,
    name: 'Helen',
    isStudent: true
}

const resultAddUser = [...users, newUser]
console.log(resultAddUser)

// remove user with id = 3
const resultRemoveUser = users.filter(user => user.id !== 3)
console.log(resultRemoveUser)
console.log(resultRemoveUser === users) // false разные массивы => разные ссылки на массивы

// change name with id = 2 on John

const resultChangeNameUser = users.map(user => user.id === 2
    ? {...user, name: 'John'}
    : user)

console.log(resultChangeNameUser)

//TODO: поверхностное копирование (shallow copy)

const shallowCopyUsers = [...users]
console.log(shallowCopyUsers)

//TODO: глубокое копирование (deep copy)

const deepCopyUsers = users.map(user => ({...user}))
console.log(deepCopyUsers)

const deepCopyWithStructuredClone = structuredClone(users)
console.log(deepCopyWithStructuredClone)

// при мутабельном изменении данных
users.pop() // удаляем последнего студента
//TODO: React сравнивает поверхностно, и если ссылка не изменилась,
// React будет считать, что никаких изменений не произошло.

//TODO: const newArr = [...users] -- создается новый массив, а следовательно новая ссылка в памяти,
// для создания нового объекта, соответсвенно, React понимает что что-то изменилось и сделает перерисовку.

//TODO: делаем копию => вносим изменения в копию => используем копию с изменениями
const usersCopy = [...users].pop()
console.log(usersCopy)

//TODO: spread оператор у нас копирует поверхностно. Это означает, что сам объект копируется,
// но его вложенные объекты/массивы остаются ссылками на исходные объекты/массивы,
// а не создаются их глубокие копии.

const superUser = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
            lat: '-38.2386',
            lng: '57.2232',
        },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
    },
}

const superUserCopy = { ...superUser }
superUserCopy.address.city = 'London'
console.log('superUserCopy', superUserCopy.address.city) // London
console.log('superUser', superUser.address.city) // London

//TODO: При работе с вложенными массивами и объектами, нам нужно копировать каждый уровень вложенности

const superUser2= {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
            lat: '-38.2386',
            lng: '57.2232',
        },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
    },
}

const superUserCopy2 = {
    ...superUser2,
    address: {
        ...superUser2.address, //копируем первый уровень вложенности
        street: 'Kattie',
        geo: { ...superUser2.address.geo, lng: '60', lat: '60' }, // копируем второй уровень вложенности
    },
}

superUserCopy2.address.city = 'London'
console.log('superUserCopy2', superUserCopy2.address.city) // London
console.log('superUser', superUser2.address.city) // Lebsackbury

//Деструктуризация массивов

// function calcValues(a, b) {
//     return [a + b, a - b]
// }

function calcValues(a, b) {
    return [a + b, a - b, a * b, a / b]
}

console.log(calcValues(5, 3))

// const result = calcValues(5, 3)
// const sum = result[0];
// const sub = result[1];
// const [sum, sub] = result // так как работаем с массивом, пишем -- [],
//поочередно перечисляем названия переменных, которые будут принимать значения нужных индексов.


//Можем не писать переменную result, а сразу написать следующим образом:
// const [sum, sub] = calcValues(5, 3)

// console.log(sum, sub)


// const [sum, , mult] = calcValues(5, 3)
// запятая говорит о том, что мы пропускаем один
// индекс и не создаем лишнюю переменную
// console.log(sum, mult)


function calcValuesWithSpread(a, b) {
    return [a + b, a - b, a * b, a / b]
}
//TODO: спред оператор, если хотим получить все значения и собрать все в массив other
// const [sum, , mult, ...other] = calcValuesWithSpread(5, 3)
// console.log(sum, mult, other)

// or
// const [...other] = calcValuesWithSpread(5, 3)
// console.log(other)

//TODO: При работе с деструктуризацией можно задавать значения по умолчанию,
// т.е. если значения не определены задается дефолтное значение
function calcValuesWithDefaultValue(a, b) {
    return [a + b, undefined, a * b, a / b]
}

const [sum, sub = 'Вычитания нет', mult, ...other] = calcValuesWithDefaultValue(5, 3)

console.log(sum, sub, mult, other)

//Деструктуризация с объектами

const person2 = {
    name: 'Kirill',
    age: 24,
    address: {
        country: 'Poland',
        city: 'Warsaw',
    },
}

// const { name, age } = person2
// Эквивалентно const name = person.name; const age = person.age;
// console.log(name, age)

const personWithoutCarValue = {
    name: 'Kirill',
    age: 24,
    adress: {
        country: 'Poland',
        city: 'Warsaw',
    },
}
// Если мы собираем ключи которых нет в объекте, то по умолчанию будет undefined.
// const { name, age, car } = personWithoutCarValue
// console.log(name, age, car) //Kirill 24 undefined

const personWithDefaultValue = {
    name: 'Kirill',
    age: 24,
    adress: {
        country: 'Poland',
        city: 'Warsaw',
    },
}
// задаем дефолтное значение:
// const { name, age, car = 'Машины нет' } = personWithDefaultValue
// console.log(name, age, car)

const person3 = {
    name: 'Kirill',
    age: 24,
    address: {
        country: 'Poland',
        city: 'Warsaw',
    },
}

// Деструктуризация объекта, с использованием собственных имен переменных
const { name: newName, age, car = 'Машины нет' } = person3

// newName - новое имя переменной для свойства name
// age - используется без изменений
// car - используется со значением по умолчанию 'Машины нет',
// если свойство car отсутствует в объекте person

console.log(newName, age, car)

//TODO: деструктуризация в JavaScript предоставляет удобный способ извлечения значений из объектов
// или массивов и присваивания их переменным.

//TODO: Без деструктуризации
// const person = { name: 'John', age: 30 }
// const name = person.name
// const age = person.age

//TODO: С деструктуризацией
// const { name, age } = { name: 'John', age: 30 }

//TODO: работа с аргументами функции
// Функция принимает объект в качестве аргумента
function printPersonInfo({ name, age, city }) {
    console.log(`${name}, ${age} years old, from ${city}`)
}

const person4 = { name: 'Eva', age: 35, city: 'Paris' }

// Вызов функции с передачей объекта
printPersonInfo(person4)