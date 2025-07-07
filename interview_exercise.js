//Условие:

// Дан массив объектов с информацией о пользователях:

const users = [
    {name: 'Alice', age: 25, score: 85.22},
    {name: 'Bob', age: 25, score: 90},
    {name: 'Charlie', age: 30, score: 70},
    {name: 'David', age: 30, score: 75},
    {name: 'Eve', age: 35, score: 88},
]

// Необходимо сгруппировать пользователей по возрасту (age).
// Для каждой группы подсчиатть средний балл (score).
// Вернуть объект, где ключ -- возраст, значение - объект с двумя свойства:
// users -- массив имен пользователей этого возраста,
// avgScore -- средний балл группы (число с точностью до двух знаков).

//Пример:

// {
//     25: {users: ['Alice', 'Bob'], avgScore: 87.5},
//     30: {users: ['Charlie', 'David'], avgScore: 72.5},
//     35: {users: ['Eve'], avgScore: 88},
// }


//Решение:

const groupByAge = (array) => {

    const groupedUsers = {};

    for (const {name, age, score} of array) {
        // проверяем наличие ключа и если значение по такому ключу не существуеют, создаем новый объект с таким ключом
        if (!groupedUsers[age]) {
            groupedUsers[age] = {users: [], totalScore: 0, count: 0};
        }
        groupedUsers[age].users.push(name); // пушим узеров в созданный массив
        groupedUsers[age].totalScore += score; // сумма количества очков юзеров в массиве
        groupedUsers[age].count += 1; // количество юзеров в массиве
    }

    // 2. Преобразуем в массив, рассчитываем avgScore и сортируем по возрасту
    const sorted = Object.entries(groupedUsers)
        .map(([age, {users, totalScore, count}]) => ({
            age: Number(age),
            users: users,
            avgScore: Math.abs(totalScore / count),
        }))
        .sort((a, b) => a.age - b.age);


    // 3. Выводим результат
    for (const {age, users, avgScore} of sorted) {
        console.log(`${age} : { users: ${JSON.stringify(users)}, avgScore: ${avgScore} }`);
    }

}

groupByAge(users)
