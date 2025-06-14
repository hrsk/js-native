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



