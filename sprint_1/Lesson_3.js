const arr = [1, 2, 3, 4, 5, 6] // создание массива с помощью литерала массива
const obj = {name: 'Bob'} // создание массива с помощью литерала объекта

//TODO: синтаксический сахар -- некоторая конструкция, которая является более удобной для чтения и записи, интуитивно понятная форма записи чего-либо,
// и не содержит в себе каких-либо новых функциональных возможностей.

//создание массива с помощью конструктора

const array = new Array(1, 2, 3, 4, 5, 6)

console.log(arr)
console.log(array)

//создание объекта с помощью констурктора

// object сущность класса Object
const object = new Object();
object.name = 'Bob'

console.log(obj)
console.log(typeof obj)
console.log(object)

// в повседневной жизни, для создания массивов и объектов, мы чаще всего используем создание с помощью литерала
//TODO: под капотом у литерала, при создании объекта или массива, происходит вызов функции конструктора

// функции Array() и Object() -- глобальные и их можно вызвать в любой точке кода


//TODO: коллекции значений
//Map(), Set() так же являются глобальными

const map = new Map()
const set = new Set()

console.log(map)
console.log(set)

//  Функция для создания сущностей -- функции конструкторы => класс
// все массивы сущности одного класса
// все объекты сущности одного класса

// результат вызова => сущность класса

//Классы -- синтаксический сахар над существующим в Javascript механизмом прототипного наследования.
//TODO: class --специальная функция, для создания однотипных сущностей (функций).
//любая функция в Javascript собрана на основании объекта, поэтому
//про любую функцию, можно сказать, что это объект

// TODO: специальные возможности класса состоят в том, что он может задавать методы экземпляра класса, которые содержатся у него в свойстве prototype
class Pet {
    //TODO: когда тебя вызовут, ты создашь какой-то объект, мы не знаем, как он будет назваться,
    // но хотим, опредилить в нем два поля type и voice и определить их значения
    constructor(type, voice) { // функция, которая создает сущности
        // const this = {}
        //this указывает на тот объект который будет создан
        this.type = type
        this.voice = voice
    }

    //TODO: класс позволяет определять методы общие для экземпляров класса
    greeting() { //метод экземпляра класса
        console.log(`Hello! I'm ${this.type}. My voice is ${this.voice}.`)
    }
}

// экземпляры класса Pet (instance -- образец, экземпляр)
const cat = new Pet('cat', 'meow')
const dog = new Pet('dog', 'bark')

// cat.greeting = function () {
//     console.log(`Hello! I'm ${cat.type}. My voice is ${cat.voice}.`)
// }
// dog.greeting = function () {
//     console.log(`Hello! I'm ${dog.type}. My voice is ${dog.voice}.`)
// }
// parrot.greeting = function () {
//     console.log(`Hello! I'm ${parrot.type}. My voice is ${parrot.voice}.`)
// }


console.log(cat)
console.log(dog)
cat.greeting() // cat.greeting => свойства нет => Pet.prototype => greeting => cat.greeting() вызывает
dog.greeting()
console.log(Pet.prototype)
console.log(Pet.prototype.greeting)


function test(params) {
}

test.property = "OK"
console.log(test)


function PetFunc(type, voice) {
    return ({
        type, voice
    })
}

const parrot = PetFunc("parrot", "chirik")

PetFunc.prototype.greeting = function () {
    console.log(`Hi! I'm ${this.type}. My voice is ${this.voice}.`)
    //если нет return то при выводе console.log(parrot.greeting()) выводится сначала строка, а затем undefined
}
//функция не устанавливает свять между своим свойством prototype и сущностью с помощью которой она создана
//prototype отдельно, а parrot отдельно, потому что это обычная функция , а не класс

// console.log(parrot.greeting()) // parrot.greeting is not a function

parrot.__proto__ = PetFunc.prototype // а так будет работать
//TODO: __proto__ -- техническое свойство любого объекта, которое возникает при создании и хранит ссылку на prototype
parrot.greeting()
console.log(parrot.greeting())

//создаем свой метод для массива

Array.prototype.newMethod = function () {
    console.log(`Моя длина равна ${this.length}.`)
}
//все массивы получат доступ к новому методу. Это удобно,
// потому что уменьшает количество функций и облегчает управление и обновление методами экземпляров,
// потому что они хранятся в одном месте

array.newMethod();
[1, 2, 10, 30].newMethod();


//контекст вызова -- тот объект, который стоит перед точкой
//this -- контекст вызова функции, он определятся только в момент вызова функции,
// НЕ в момент объявления функции, а в момент ее ВЫЗОВА!!!

//TODO: стрелочная функция определяет контекст вызова,
// но контекстом вызова для нее всегда будет объект window

Array.prototype.customMap = function (callback) {
    const result = [] // создаем новый массив
//пробегаемся по исходному массиву this
    for (let i = 0; i < this.length; i++) {
        // берем каждый элемент исходного массива и возвращаем результат выполнения того, что придет в callback функции
        const element = callback(this[i])
        //складываем результат выполнения в новый массив
        result.push(element)
    }
    return result
}

// что нужно сделать с каждым элементом массива передаем в качестве callback функции,
// бери каждый элемент и в новй массив клади его квадрат

const callbackFn = (element) => element * element
console.log(array.customMap(callbackFn))
console.log(array.map(el => el * el))
