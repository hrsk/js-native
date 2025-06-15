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


