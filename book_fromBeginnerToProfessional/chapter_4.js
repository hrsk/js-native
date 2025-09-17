/*
// 4.1
const isBoolean = true;
// const isBoolean = false;

console.log(Boolean(isBoolean));


if (isBoolean) {
    console.log('This is true!');
}

if (!isBoolean) {
    console.log('This is false!');
}
*/

// ---------

/*

// 4.2
const age = prompt("Age:", "0");


if (Number(age) >= 21) {
    console.log("Разрешить вход в заведение и покупку алкоголя.")
} else if (Number(age) >= 19) {
    console.log("Разрешить вход в заведение и запретить покупку алкоголя.")
} else {
    console.log("Запретить вход.")
}

4.3
const ID = true;

const message = ID ? "Можно войти" : "Нельзя войти";

console.log(message);

*/

// ---------

/*

// 4.4
const magicNumber = Math.round(Math.random() * 10);

const message = prompt("Message", "");

switch (magicNumber) {
    case 1:
        alert(`${magicNumber}: message`);
        break
    case 2:
        alert(`${magicNumber}: message`);
        break
    case 3:
        alert(`${magicNumber}: message`);
        break
    case 4:
        alert(`${magicNumber}: message`);
        break
    case 5:
        alert(`${magicNumber}: message`);
        break
    default:
        alert(`${magicNumber}: message`);
}
*/

// ---------

/*

// 4.5
const prize = prompt("Введите число от 0 до 10");

const num = Number(prize);

switch (num) {
    case 1:
        console.log('Apple');
        break
    case 2:
        console.log('Orange');
        break
    case 3:
        console.log('Banana');
        break
    case 4:
        console.log('iPad');
        break
    case 5:
        console.log('MX Master 3S');
        break
    default:
        console.log('Pencil');
}
*/

// ---------


// projects

/*
const randomRoulette = Math.round(Math.random() * 10);

const inputRouletteValue = prompt("Pick number", "0");

if (Number(inputRouletteValue) === randomRoulette) {
    alert("You lose!");
} else alert("You win!");


const arr = ["Rock", "Paper", "Scissors"];


const me = Math.round(Math.random() * 3);
const bot = Math.round(Math.random() * 3);

console.log(arr[me])
console.log(arr[bot])
if (arr[me] === arr[bot]) {
    console.log("Ничья!");
} else if (arr[me] === "Scissors" && arr[bot] === "Paper") {
    console.log("Я выиграл");
} else if (arr[me] === "Paper" && arr[bot] === "Rock") {
    console.log("Я выиграл");
} else if (arr[me] === "Rock" && arr[bot] === "Scissors") {
    console.log("Я выиграл");
} else console.log("Бот выиграл");

*/

// ---------


const myArr = ["Rock", "Paper", "Scissors"];
const computer = Math.round(Math.random() * 2);
const player = Math.round(Math.random() * 2);

let message = "player " + myArr[player] + " vs computer " + myArr[computer] + " ";


if (player === computer) {
    message += "it's a tie";
} else if (player > computer) {
    if (computer === 0 && player === 2) {
        message += "Computer Wins";
    } else {
        message += "Player Wins";
    }
} else {
    if (computer === 2 && player === 0) {
        message += "Player Wins";
    } else {
        message += "Computer Wins";
    }
}


console.log(message);