//polyfill functions

//TODO: Функции полифиллы -- это функции, которые добавляют поддержку определённой функциональности в средах, где она отсутствует.
// Обычно речь идёт о старых браузерах или средах выполнения JavaScript, которые не поддерживают современные стандарты.

//TODO: .push() мутабельный метод массива
// мутирует исходный массив, добавляет один или несколько элементов в конец массива и возвращает новую длину массива.
//
// const numbers = [1, 2, 3, 4, 5, 6]
//
// const newNumbers = numbers.push(7, 8, 9)
//
// console.log(numbers)
// console.log(newNumbers)


const numbers = [1, 2, 3, 4, 5, 6]

function polyPush(nums, ...addedNums) {
//TODO: ...addedNums -- rest оператор, упаковывает все параметры функции кроме первого в массив

    for (let i = 0; i < addedNums.length; i++) {
        // создаем дополнительную ячейку в исходном массиве nums и кладем(присваиваем) в нее по порядку приходящие значения,
        // пока не закончится массив addedNums
        nums[nums.length] = addedNums[i]
        console.log(nums[nums.length]) //undefined -- создается дополнительная ячейка массива
    }

    //TODO: с помощью for...of
    // for (let el of addedNums) {
    //     nums[nums.length] = el
    // }

    return nums.length

}

// console.log(polyPush(numbers, 7, 8, 9))
// console.log(numbers)


function polyPop(nums) {
    if (nums.length) {
        const lastElement = nums[nums.length - 1]

        nums.length = nums.length - 1

        return lastElement

    }
    //TODO: если у функции нет return, функция возвращает undefined, но
    // явное, всегда лучше неявного
    return undefined
}

console.log(polyPop(numbers))
console.log(polyPop([]))
console.log(numbers)


//.indexOf -- возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.

const numbersForPolyIndexOf = [1, 2, 3, 4, 5, 6]

function polyIndexOf(array, element, fromIndex = 0) {

    if (fromIndex < array.length) {
        // если fromIndex > 0 , то мы его оставляем таким как есть,
        // а если fromIndex < 0 , то мы должны взять длину массива и отнять от него значение fromIndex
        // и начать не с нуля, а с полученного значения индекса
        fromIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex

        for (let i = fromIndex; i < array.length; i++) {
            if (array[i] === element) {
                return i
            }
        }
    }
    return -1
}

console.log(polyIndexOf(numbersForPolyIndexOf, 6)) // 5
console.log(polyIndexOf(numbersForPolyIndexOf, 6, -1)) // 5
console.log(polyIndexOf(numbersForPolyIndexOf, 10)) // -1
console.log(polyIndexOf(numbersForPolyIndexOf, 3, 10)) // -1
console.log(polyIndexOf(numbersForPolyIndexOf, 5, -1)) // -1
console.log(polyIndexOf(numbersForPolyIndexOf, 5, -2)) // 4


//.reverse() на месте обращает порядок следования элементов массива.
// Первый элемент массива становится последним, а последний первым.
// Возвращае ссылку на новй массив.

const numbersForPolyReverse = [1, 2, 3, 4, 5, 6]

function polyReverse(array) {

    // делим на 2 для того что цикл остановился после выполнения, иначе он перевернет его снова и мы увидим не измененный массив
    for (let i = 0; i < array.length / 2; i++) {
        // создаем временную переменную
        // записываем значение array[i] во временую переменную
        let temp = array[i]
        // записываем вместо 1 => 6
        // i = 0 -- последний элемент, i = 1 -- предпоследний и т.д
        array[i] = array[array.length - 1 - i]
        // а вместо 6 => 1, 5 => 2, 4 => 3
        array[array.length - 1 - i] = temp
    }
    return array
}

console.log(polyReverse(numbersForPolyReverse))

//иммутабельный метод массива
//.slice() возвращает новый массива, содержащий копию части исходного массива

const animals = ["ant", "bison", "camel", "duck", "elephant"];

function polySlice(array, start = 0, end = array.length) {

    const result = []

    start = start < 0 ? array.length + start : start
    end = end < 0 ? array.length + end : end

    for (let i = start; i < end; i++) {
        // достаем элементы array[i] со 2го по 6ой и кладем в массив result
        // если параметры не указаны, то берутся параметры по умолчанию и возвращается полная копия массива
        if (array[i]) {
            // проверка нужна для того, чтобы если передано значение больше чем end, не добавлялись undefined в конец массива
            polyPush(result, array[i])
        }
    }

    return result
}

// console.log(polySlice(animals, 2)) // ["camel", "duck", "elephant"]
// console.log(polySlice(animals, 2, 4)) // ["camel", "duck"]
// console.log(polySlice(animals, 1, 5)) // ["bison", "camel", "duck", "elephant"]
// console.log(polySlice(animals, -2)) // ["duck", "elephant"]
// console.log(polySlice(animals, 2, -1)) // ["camel", "duck"]

//вернется копия исходного массива
console.log(polySlice(animals)) // ["ant", "bison", "camel", "duck", "elephant"]

// push() - метод массива, который добавляет один или более элементов в конец массива
// и возвращает новую длину массива (данный метод массива мутирует исходный массив).

const names = ['Alex', 'Bob', 'Ivan', 'Sasha']
const afterPush = names.push('Nina')

console.log('names', names) // [ 'Alex', 'Bob', 'Ivan', 'Sasha', 'Nina' ]
console.log('afterPush', afterPush) // 5

// pop() - метод массива, который удаляет последний элемент массива
// и возвращает его значение (данный метод массива мутирует исходный массив).
const names1 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const afterPop = names1.pop()

console.log('names', names1) // [ 'Alex', 'Bob', 'Ivan' ]
console.log('afterPop', afterPop) // ”Sasha”

//shift() - удаляет первый элемент из массива и возвращает его значение.
// Этот метод изменяет длину массива.
// Метод shift удаляет элемент по нулевому индексу, сдвигает значения по последовательным индексам вниз,
// а затем возвращает удалённое значение. Если свойство length массива равно 0,
// вернётся значение undefined (данный метод массива мутирует исходный массив).

const names2 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const afterShift = names.shift()

console.log('names', names2) //[ 'Bob', 'Ivan', 'Sasha' ]
console.log('afterShift', afterShift) //”Alex”

// кейс в котором shift() возвращает undefined:
const names3 = []
const shifted = names3.shift()

console.log('names', names3)
console.log('shiftedArr', shifted) // undefined

// unshift() - добавляет один или более элементов в начало массива
// и возвращает новую длину массива (данный метод массива мутирует исходный массив).

const names4 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const afterUnshift = names4.unshift('Nina', 'Vasia')

console.log('names', names4) //[ 'Nina', 'Vasia', 'Alex', 'Bob', 'Ivan', 'Sasha' ]
console.log('afterUnshift', afterUnshift) // 6

//reverse() - метод массива, которыйменяет порядок элементов в массиве на обратный
// (данный метод массива мутирует исходный массив).

const names5 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const afterReverse = names5.reverse()

console.log('names', names5) // reverse мутировал исходный массив и мы
// получили: [ 'Sasha', 'Ivan', 'Bob', 'Alex' ]
console.log('afterReverse', afterReverse) // [ 'Sasha', 'Ivan', 'Bob', 'Alex' ]

//split() - разбивает строки в массив по указанному в первом параметре разделителю.
// Если он не задан - вернется вся строка. Если он задан как пустые кавычки,
// то каждый символ строки попадает в отдельный элемент массива.
// Вторым необязательным параметром можно указать максимальное количество элементов в результирующем массиве.

const str = 'ab-cd-ef'
const arr = str.split('-')

console.log('str', str) // "ab-cd-ef"
console.log('arr', arr) // [ 'ab', 'cd', 'ef' ]

// каждый символ строки запишем в отдельный элемент массива:
console.log(str.split("")) // [ 'a', 'b', '-', 'c', 'd', '-', 'e', 'f' ]

// Вторым параметром укажем максимальное количество элементов в результирующем массиве, например, 2.
// В этом случае в массив запишется только 2 элемента:
const str1 = 'ab-cd-ef'
const arr1 = str1.split('-', 2)

console.log('str', str1) // "ab-cd-ef"
console.log('arr', arr1) // [ 'ab', 'cd' ]

// Если ничего не передавать:
const str2 = 'ab-cd'
const arr2 = str2.split()

console.log('str', str2) // "ab-cd"
console.log('arr', arr2) // [ 'ab-cd' ]

// join() - объединяет элементы массива в строку с указанным разделителем (он будет вставлен между элементами массива).
// Разделитель задается в параметрах метода и не является обязательным.
// Если он не задан - по умолчанию в качестве разделителя возьмется запятая.

const names6 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const afterJoin = names6.join('-')

console.log('names', names6) // [ 'Alex', 'Bob', 'Ivan', 'Sasha' ]
console.log('afterJoin', afterJoin) // Alex-Bob-Ivan-Sasha

// Если не указать разделитель, то, по умолчанию, разделителем станет запятая:
// (пробелов после запятой не будет)

const names7 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const afterJoinWithoutParam = names7.join()

console.log('names', names7) // [ 'Alex', 'Bob', 'Ivan', 'Sasha' ]
console.log('afterJoinWithoutParam', afterJoinWithoutParam) // Alex,Bob,Ivan,Sasha

// Если передать в качестве разделителя пустую строку, то элементы массива будут слиты
// без какого-либо разделителя
const names8 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const afterJoinWithEmptyString = names8.join('')

console.log('names', names) // [ 'Alex', 'Bob', 'Ivan', 'Sasha' ]
console.log('afterJoinWithEmptyString', afterJoinWithEmptyString) // AlexBobIvanSasha

const telephoneNumber = '123456789'
const splitBySymbol = telephoneNumber.split('')
console.log('splitBySumbol', splitBySymbol) // ['1', '2', '3','4', '5', '6','7', '8', '9']
const reverseTelefonSymbols = splitBySymbol.reverse()
console.log('reverseTelephoneNumber', reverseTelefonSymbols) // ['9', '8', '7','6', '5', '4','3', '2', '1']
const joinInOneString = reverseTelefonSymbols.join('')
console.log('join', joinInOneString) // 987654321

//более сокращенная версия
const telephoneNumber1 = '123456789'
const result = telephoneNumber1.split('').reverse().join('')

console.log('result', result) // 987654321

// concat() - сливает указанные массивы в один общий массив.
// Метод применяется к одному из массивов, а в параметрах метода передаются остальные массивы для слияния.
// Метод concat() не изменяет исходный массив, а возвращает новый.

const arr3 = [1, 2]
const arr4 = [3, 4]
const arr5 = [5, 6]
const res = arr3.concat(arr4, arr5)

console.log('result', res) // [ 1, 2, 3, 4, 5, 6 ]

const arr6 = [1, 2]
const arr7 = [3, 4]
const res1 = arr6.concat(arr7, [5, 6])

console.log('result', res1) // [ 1, 2, 3, 4, 5, 6 ]

// Пример со вложенными массивами:

const arr8 = [1, 2]
const arr9 = [3, 4]

const nestedArr = [[5, 6], [7, 8],]

const result2 = arr8.concat(arr9, nestedArr)

console.log(result2) // [ 1, 2, 3, 4, [ 5, 6 ], [ 7, 8 ] ]

// Для того чтобы получить одномерный массив, нужно использовать метод flat().
// Infinity в качестве параметра означает, что все уровни вложенности должны быть сплющены.

const arr10 = [1, 2]
const arr11 = [3, 4]

const nestedArr10 = [
    [5, 6],
    [7, 8, [9, 10, 11]],
]

const result3 = arr10.concat(arr11, nestedArr10)
const afterFlat = result3.flat(Infinity)

console.log(result3) // [ 1, 2, 3, 4, [ 5, 6 ], [ 7, 8, [ 9, 10, 11 ] ] ]
console.log(afterFlat) // [ 1, 2, 3, 4, 5, 6 , 7, 8 ]

// forEach() - позволяет последовательно перебрать все элементы массива.
// Метод в параметре получает функцию, которая выполнится для каждого элемента массива.

let arr21 = [0, 10, 22]
arr21.forEach(function (element, index, array) {
    // код, который выполнится для всех элементов
});

const arr22 = [1, 2, 3, 4, 5]
let sum = 0

arr22.forEach(function (elem) {
    sum += elem // sum = sum + elem;
})

console.log(sum) // 15

const numbers22 = [1, 2, 3]
numbers22.forEach((num, index, array) => {
    array[index] = num * 2
})

console.log('numbers', numbers22) // [ 2, 4, 6 ]


// indexOf() - поиск элемента в массиве по индексу.
// В первом параметре указывается значение искомого элемента.
// Метод возвращает номер первого найденного элемента, либо -1, если такого элемента нет.
// Второй необязательный параметр метода задает позицию, с которой следует начинать поиск.

const arrIndexOf = [1, 2, 3, 3, 3, 4, 5]
const resIndexOf = arrIndexOf.indexOf(3)

console.log(resIndexOf) // 2

//поиск начнется с пятого индекса массива
const arrIndexOf1 = [1, 2, 3, 4, 5, 3]
const resIndexOf1 = arrIndexOf1.indexOf(3, 5)
// именно заданный индекс и имеет значение === 3
console.log(resIndexOf1) // 5

// если в качестве второго параметра передать отрицательное значение,
// то отсчет позиции для начала поиска произойдет с конца массива
const arrIndexOf2 = [1, 2, 3, 4, 5, 3]
const resIndexOf2 = arrIndexOf2.indexOf(3, -1)
const resIndexOf3 = arrIndexOf2.indexOf(3, -4)

console.log(resIndexOf2) // 5
console.log(resIndexOf3) // 2

// lastIndexOf() -- осуществляет поиск элемента в массиве.
// Возвращает номер последнего найденного элемента, либо -1, если такого элемента нет.
// Первым параметром мы указываем номер элемента, вторым (необязательным) - позицию,
// с которой следует начинать поиск. Поиск ведется с конца массива в начало.

let arrLastIndexOf = [1, 2, 10, 3, 3, 4, 5, 3]
let resLastIndexOf = arrLastIndexOf.lastIndexOf(10, 4)
let resLastIndexOf2 = arrLastIndexOf.lastIndexOf(1, 4)
let resLastIndexOf3 = arrLastIndexOf.lastIndexOf(3, 6)
let resLastIndexOf4 = arrLastIndexOf.lastIndexOf(3)

console.log(resLastIndexOf) // 2
console.log(resLastIndexOf2) // 0
console.log(resLastIndexOf3) // 4
console.log(resLastIndexOf4) // 7

// find() - находит первый элемент в массиве согласно переданному в параметре коллбэку.
// Если элемента нет, то возвращается undefined.

const arrFind = ['abc', 'defg', 'kl', 'mn']

const resFind = arrFind.find((element) => element.length === 2)

console.log(resFind) //"kl"

// findIndex() -- находит индекс первого элемента согласно переданному в параметре коллбэку.
// Если элемент не найден, то возвращается -1.

const arrFindIndex = [1, 2, 3, 4, 5]

const resFindIndex = arrFindIndex.findIndex(function (elem) {
    return elem % 2 === 0
})

console.log(resFindIndex) // 1

// findLastIndex() - находит индекс первого элемента с конца массива,
// соответствующего условию переданному в параметре коллбэку.
// Если элемента нет, то возвращается -1.

const arrFindLastIndex = ['a', 'b', 'c', 'd']

const resFindLastIndex = arrFindLastIndex.findLastIndex(function (elem) {
    return elem === 'f'
})

console.log(resFindLastIndex) // -1

// includes() - проверяет наличие элемента в массиве. В качестве параметра принимает значение для поиска.
// Если такой элемент есть в массиве, то метод возвращает true, а если нет, то false.

const arrIncludes = [1, 2, 3, 4, 5]
const resIncludes = arrIncludes.includes(3)

console.log(resIncludes) // true


// filter() - позволяет отфильтровать элементы массива, оставив только элементы,
// которые удовлетворяют условию переданной callback функции.
// В качестве параметра принимает функцию, которая выполнится для каждого элемента массива.
// Возврщает новый массив, в который войдут только те значения, для которых переданная функции вернет true.

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present']

const resultFilter = words.filter(word => word.length > 6)
console.log(resultFilter) // [ 'exuberant', 'destruction', 'present' ]

//исходный массив не изменился
console.log(words) // ['spray', 'elite', 'exuberant', 'destruction', 'present']
