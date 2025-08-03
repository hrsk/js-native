// .this .call .apply .bind

//TODO: если !"use strict" , то this ==> всегда ссылка на объект
//TODO: а если "use strict" , то this ==> как правило ссылка на объект {} или undefined (null, number, string, все что угодно)


// 1. this in global scope
//2. Function (arrow, simple)
//3. .call .apply .bind
//TODO: это методы, которые нужны для того,
// чтобы подменить контекст вызова на той функции которую вызываем
// call / apply отличаются тем, как принримают дополнительные параметры,
// а bind отличается от этих двух методов, тем, что не вызывает напрямую функцию,
// на которой вызывается данный метод, а возвращает функцию обертку, которую затем нужно вызвать.
//4. function constructor

// 1. this in global scope

/*
в браузере this сслается на объект window, а в среде разработки (Node.js) на объект global
console.log(this)
*/

//2. Function (arrow, function declaration)

// ---- arrow function ----

/*
const foo = () => { // this стрелочной функции определятестя единожды в момент инициализации
    // и берется из первого внешнего контекста за которым этот this может заркепитс
    // и больше никогда не изменяется
    // в данном случае это  будут global или window
    console.log(this)
    // this стрелочной функции ссылается на глобльный объект window

}

foo()
*/

/*
// "use strict"
function bar() { // this определяестя в момент вызова
    // this -- будет контекстом для стрелочной функции
    const foo = () => { // момент инициализации
        console.log(this)
    }
    foo()
}

bar() // if "use strict" ==> undefined  else ==> global / window
*/

//TODO: при обращеннии к примитиву через точку происходит боксинг и он становится объектом

//
// ---- function ----

/*
// "use strict"
function foo() {
    console.log(this)
}

foo() // if "use strict" ==> undefined  else ==> global / window
*/

// ----

// const car = {
//     brand: 'bmw',
//     startEngine: function () {
//         console.log(`Start ${this}`)
//     }
// }
//
// car.startEngine() // Start [object Object]


// car.startEngine() // Start bmw
// так как метод -- обычная функция => this определятся в момент вызова
// слева от точки car => this ссылается на объект car

// ----

const car1 = { // объект НЕ СОЗДАЕТ своего лексического окружения
    brand: 'bmw',
    startEngine: () => { // this определяется в момент инициализации
        console.log(`Start ${this.brand}`)
    }
}

car1.startEngine() // Start undefined
// потому что объект не создает собственного лексического окружения
// => this ссылается на window / global

//TODO: что создает лексического окружение:
// все что имеет фигурные скобки {},
//  единственным исключением явлестя создание объекта

const car2 = {
    brand: 'bmw',
    startEngine: function () {
        const foo = () => { // инициалаизуется в методе который является обычной функцией,
            // объявленной с помощью function declaration
            // => this закрепится за тем, на что будет ссылаться this в этом методе
            console.log(`Start ${this.brand}`)
        }
        foo()
    }
}

car2.startEngine() // Start bmw

//TODO: Class имеет свое собственно лексическое окружение,
// потому что class синтаксический сахар над функцией конструктором,
// однако, this не будет ссылаться на то что слева от точки.

//3. .call .apply .bind
//методы объекта функции  ???
//TODO:  служат для переопределния контекста

const car3 = {
    brand: 'bmw',
    startEngine: function () {
        console.log(`Start ${this.brand}`)
    }
}

const car4 = {
    brand: 'kia',
}


car3.startEngine.call(car4) // Start kia
// startEngine вызывается при помощи метода .call
// который перепресваивает контекст тем, который ему передали =>
// => this будет равен car4.brand

car3.startEngine.apply(car4) // Start kia
//TODO: call / apply отличаются тем, как принимают параметры,
// которые являются аргументами для метода функции
// apply принимает параметры в качестве массива,
// а call через запятую

const car7 = {
    brand: 'bmw',
    startEngine: function (title1, title2) {
        console.log(`Start ${title1 + title2} ${this.brand}`)
    }
}

car7.startEngine.call(car4, 'title1', 'title2') // Start title1title2 kia
car7.startEngine.apply(car4, ['title1', 'title2']) // Start title1title2 kia


/*
const car5 = {
    brand: 'kia',
}

const car6 = {
    brand: 'bmw',
}

car6.startEngine.call(car5) // Cannot read properties of undefined (reading 'call')
*/

// ---- bind ----
// car3.startEngine.bind(car4, ['title1', 'title2']) // в консоль ничего не выведется

car7.startEngine.bind(car4, 'title1', 'title2')() // // Start title1title2 kia


//TODO: почему потеряется контекст вызова

/*
const car8 = {
    brand: 'bmw',
    startEngine: function () {
        console.log(`Start ${this.brand}`)
    }
}

setTimeout(car8.startEngine, 1000) // undefined
*/

// function setTimeoutFunction(callback, delay) {
//     delay
//     callback(); () {
//         car1.startEngine()
//     }
// }

//     передаем ссылку на функцию,
// которая вызовется от имени другой функции, а не от car8,
// потому что слева от точки ничего нет

// setTimeout(() => car8.startEngine(), 1000) // Start bmw
// setTimeout(car8.startEngine.bind(car8), 1000) // Start bmw

// setTimeout(car8.startEngine(), 1000) // Start bmw The "callback" argument must be of type function. Received undefined


// -----


const carr1 = {
    brand: 'bmw',
    // startEngine: function () {
    //     return () => console.log(`Start ${this.brand}`)
    //     // => неявный возврат из функции return undefined
    // },
    startEngine: function () {
        return function () {
            console.log(`Start ${this.brand}`)
        }
        // => неявный возврат из функции return undefined
    }
}

const carr2 = {
    brand: 'kia',
}

const carr3 = {
    brand: 'ferrari',
}
const carr4 = {
    brand: 'toyota',
}

//TODO: контекст переопределятеся только единожды
carr1.startEngine.bind(carr2).bind(carr4).call(carr3) // Start kia

carr1.startEngine.bind(carr2).bind(carr4).bind(carr3)() // Start kia

carr1.startEngine.call(carr2).bind(carr4).bind(carr3) // Start kia
// Cannot read properties of undefined (reading 'bind')
//потому что bind вызовется на том, что вернула нам функция,
// а функция неявно возвращает undefined

/*
// если startEngine вовзвращает стрелочную функцию
carr1.startEngine.call(carr2).bind(carr4).call(carr3) // Start kia
*/
// если startEngine вовзвращает function declaration
carr1.startEngine.call(carr2).bind(carr4).call(carr3) // Start toyota


const carr5 = {
    brand: 'bmw',
    startEngine: function () {
        //this => 'bmw'
        const foo = () => {
            console.log(`Start ${this.brand}`)
        }
        // const foo: () => void
        foo.call(carr2) //метод call работает для стрелочной функции,
        // так же как уже для забаиндженой функции,
        // контекст не переопределяют, но вызывает
    }
}

carr5.startEngine() // Start bmw


// ---- function constructors ----

//TODO: функции конструкторы нужны для создания однотипных объектов

function CarCreator(brand, speed) {
    // в оперативной памяти создается новый пустой объект,
    // this является ссылкой на этот новый пустой объект
    // создаем нужные нам свойства и в ним присваиваем нужные нам параметры
    this.brand = brand; // создаем новое свойство brand и присваиваем ему то, что пришло в параметрах функции
    this.speed = speed;
    // неявный return созданного объекта

    //если мы будем возвращаеть примитив, то он проигнорируется
    //если будет вовзращает [] {}, то вернется объект или массив

}

const car11 = CarCreator('bmw', '300') // вызовется как обычная функция и, поскольку не меет return, неявно вернет undefined
console.log(car11) // undefined

const car12 = new CarCreator('bmw', 300);
console.log(car12) // { brand: 'bmw', speed: 300 }


function foo() {

}

//TODO: оператор new делает из любой функции конструктор
console.log(new foo()) // foo {}

// EXAMPLES


function foo2() {
    // this для bar
    const x = 10;
    return {
        x: 20,
        bar: () => { // контекст определяется в момент инициализации
            // и закрепляется за первым внешним, за которым можно закрепиться
            // поскольку объект не создает контекста, он не может закрепиться за х: 20
            // он будет ссылаться на контекста вызова функции,
            // поскольку у нее нет контекста, контекстом станет window / global => undefined
            console.log(this.x)
        },
        baz: function () {
            console.log(this.x)
        },
    };
}

/*
const obj1 = foo2();
obj1.bar() // undefined
obj1.baz() // 20
*/

// -----


/*
const obj2 = foo2.call({x: 30});
const objBind = foo2.bind({x: 30});

obj2.bar() // 30
obj2.baz() // 20
console.log(obj2) // { x: 20, bar: [Function: bar], baz: [Function: baz] }

objBind.bar() // objBind.bar is not a function
*/

// ------

const obj2 = foo2.call({x: 30});
console.log(obj2)


const y = obj2.bar;  //инициализуется в момент вызова foo()
const z = obj2.baz

y() // 30
z() // undefined // потому что baz обычная функция

//



