let todolists = [
    {
        id: 1,
        title: 'what to learn',
        filter: 'all',
        tasks: [
            {id: 1, title: 'JS', isDone: true},
            {id: 2, title: 'HTML/CSS', isDone: true},
            {id: 3, title: 'React', isDone: false},
        ]
    },
    {
        id: 2,
        title: 'what to buy',
        filter: 'all',
        tasks: [
            {id: 11, title: 'Milk', isDone: false},
            {id: 22, title: 'Bread', isDone: false},
            {id: 33, title: 'meat', isDone: false},
        ]
    },
]

//TODO: обработка массива в массиве имеет квадратичную сложность
//TODO: обрабока массива имеет линейную сложность 2n

// let tasks = [
//     {id: 1, todolistId: 1,title: 'JS', isDone: true},
//     {id: 2, todolistId: 1,title: 'HTML/CSS', isDone: true},
//     {id: 3, todolistId: 1,title: 'React', isDone: false},
//     {id: 11, todolistId: 2,title: 'Milk', isDone: false},
//     {id: 22, todolistId: 2,title: 'Bread', isDone: false},
//     {id: 33, todolistId: 2,title: 'meat', isDone: false},
// ]
//
// let tasks = {
//     1: [
//         {id: 1, title: 'JS', isDone: true},
//         {id: 2, title: 'HTML/CSS', isDone: true},
//         {id: 3, title: 'React', isDone: false},
//     ],
//     2: [
//         {id: 11, title: 'Milk', isDone: false},
//         {id: 22, title: 'Bread', isDone: false},
//         {id: 33, title: 'meat', isDone: false},
//     ]
// }

const todolistId_1 = crypto.randomUUID()
const todolistId_2 = crypto.randomUUID()

let todolistsWithKeys = [
    {
        id: todolistId_1,
        title: 'what to learn',
        filter: 'all',
    },
    {
        id: todolistId_2,
        title: 'what to buy',
        filter: 'all',
    },
]

const getKey = (name) => `${name}_name`

let tasksWithTodoKeys = {
    [todolistId_1]: [
        {id: 1, title: 'JS', isDone: true},
        {id: 2, title: 'HTML/CSS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ],
    [todolistId_2]: [ //
        {id: 11, title: 'Milk', isDone: false},
        {id: 22, title: 'Bread', isDone: false},
        {id: 33, title: 'meat', isDone: false},
    ],
    [10 + 30]: [], // 10 + 30 = 40 => "40"
    [getKey("Alex")]: [], // Alex_name
    "user name": "Bob", // невалидный ключ, поскольку есть пробел, поэтому , данный ключ заключается в кавычки
}

console.log(tasksWithTodoKeys)

// чтобы обратиться к невалидному ключу, нужно обращение по ключу заключить в квадратные скобки
console.log(tasksWithTodoKeys["user name"])

// обращаемся в фигурный скобках, поскольку это переменная, в которую записывается сгенерированный id
console.log(tasksWithTodoKeys[todolistId_1])

//ключами в объекте могут быть только строки

// [todolistsWithKeys[0].id] --синтаксис вычисляемых свойств объекта
// результат вычисления должен возвращать строку, либо то, что может быть интерпретировано как строка


// коллекция Map()
//особенности:
// - набор собственных методов для работ с коллекцией
// - в качестве ключа могут использоваться любые значения

const collectionMap = new Map()

collectionMap.set(true, "Bob")
collectionMap.set('undefined', [3])
collectionMap.set([1, 2, 3], 3)
console.log(collectionMap)

function createTodolist(title) {
    const newTodolistId = crypto.randomUUID()
    // todolistsWithKeys.push({id: newTodolistId, title: title, filter: 'all'})
    todolistsWithKeys = [...todolistsWithKeys, {id: newTodolistId, title: title, filter: 'all'}]
    tasksWithTodoKeys = {...tasksWithTodoKeys, [newTodolistId]: []}
}

createTodolist('xzxzx')
console.log(todolistsWithKeys)
console.log(tasksWithTodoKeys)

function removeTodolist(todolistId) {
    todolistsWithKeys = todolistsWithKeys.filter(td => td.id !== todolistId)
    // const copyTasks = {...tasksWithTodoKeys}
    delete tasksWithTodoKeys[todolistId]
    tasksWithTodoKeys = {...tasksWithTodoKeys}
}

function createTask(todolistId, title) {
    const newTask = {id: crypto.randomUUID(), title: title, isDone: false}

    tasksWithTodoKeys = {...tasksWithTodoKeys, [todolistId]: [...tasksWithTodoKeys[todolistId], newTask]}
}
