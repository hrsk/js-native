// while / do-while / for

const arr = [1, 0, 55, 10, 123, 12, 13]

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])

/*
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 55) {
        break; // Выход из цикла
        // в консоль выведется только 1, 0
    }

    if (arr[i] === 55) {
        continue; // Пропустить итерацию
        // в консоль выведется все, кроме 55
    }
    console.log(arr[i])
}
*/

// ----

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]) // 1 0 55 10 123 12 13
}

// ----

/*
let i = 0;
for (; ;) { // бесконечный цикл,
    // нет условия начала цикла и выхода из цикла
    if (i > 5) {
        break;
    }
    console.log('Hello!') // Hello! x6
    i++;
}
*/

// -----

/*
let i = 0;

while (i < arr.length) {
    // break;
    // continue;
    console.log(arr[i])
    i++;
}
*/

let i = 0

while (i < 0) {
    // сначала проверяет условие,
    // а после выполняет код внутри
    console.log('1')
}

do {
    // сначачала выволняется,
    // а затем проверяет условие
    console.log('2')
} while (i < 0)
