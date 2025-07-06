const itemsInCart = [
    { product: 'Носки', quantity: 3 },
    { product: 'Штаны', quantity: 1 },
    { product: 'Кепка', quantity: 1 },
]

const clonedCart = [...itemsInCart]

console.log(clonedCart)

clonedCart[1].quantity = 5

console.log(clonedCart)
// [
//    { product: 'Носки', quantity: 3 },
//    { product: 'Штаны', quantity: 5 },
//    { product: 'Кепка', quantity: 1 },
// ]

console.log(itemsInCart)
// [
//    { product: 'Носки', quantity: 3 },
//    { product: 'Штаны', quantity: 5 },
//    { product: 'Кепка', quantity: 1 },
// ]

//TODO: Массивы и объекты хранятся по ссылке. Так как копирование происходит только на один уровень вглубь,
// то при копировании массива происходит копирование ссылок на старые объекты в новый массив.

// разные массивы ссылаются на одни и те же объекты в памяти
console.log(itemsInCart[1] === clonedCart[1])
// true

// В JavaScript есть функция structuredClone() для глубокого копирования массивов или объектов. Она доступна в NodeJS, начиная с версии 17.0.0.
const deepCopy = structuredClone(itemsInCart)
console.log(itemsInCart[1] === deepCopy[1])
// false

// Можно написать функцию глубокого копирования вручную.
// Скорее всего она будет рекурсивной, и будет работать только для конкретных данных — написать универсальную функцию не так-то просто.

// Проще воспользоваться готовыми решениями, например, методом .cloneDeep() из библиотеки Lodash.
// Он надёжен и используется в десятках тысяч проектов каждый день.


// Ещё один способ глубокого копирования звучит достаточно глупо — нужно сериализовать копируемый объект в JSON и тут же распарсить его.
// В результате появится полная копия объекта:

const deepCopyWithJSON = JSON.parse(JSON.stringify(itemsInCart))
console.log(itemsInCart[1] === deepCopyWithJSON[1])
// false

// У этого метода есть ограничение — копируемые данные должны быть сериализуемы.
//TODO: примеры несериализуемых данных: примитив undefined, функция, symbol - при вызове JSON.stringify получаем undefined
// Массивы и объекты - сериализуемы. НО, если у них в качестве ключа или значения будут несериализуемые данные
// для массивов: такие значения будут превращены в null;
// для объектов: такие значения будут опущены, а если symbol является ключом объекта, то он будет проигнорирован, даже при использовании функции replacer.

const arr = [
    undefined,
    function() { console.log('aaa') },
    Symbol("foo"),
]
const copyArr = JSON.parse(JSON.stringify(arr))

console.log(copyArr)
// [null, null, null]

const obj = {
    a: undefined,
    method: () => {},
    [Symbol("foo")]: "foo",
}
const copyObj = JSON.parse(JSON.stringify(obj), function(k, v) {
    if (typeof k === 'symbol') {
        return 'символ';
    }

    return v;
})

console.log(copyObj)
// {}