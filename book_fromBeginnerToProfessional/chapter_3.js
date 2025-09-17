//3.1
const grocery = ["Milk", "Bread", "Apples"];

console.log(grocery);
console.log(grocery.length);

grocery[1] = "Banana";
console.log(grocery);


//3.2

const grocery2 = [];

grocery2.push("Milk", "Bread", "Apples");
console.log(grocery2);

grocery2.splice(1, 0, "Bananas", "Eggs");
console.log(grocery2);

const sortResult = grocery2.sort();
console.log(sortResult);

sortResult.splice(1, 0, "Carrots", "Lettuce");
console.log(sortResult);

const newGrocery = ["Juice", "Pop"];
const concatResult = sortResult.concat(newGrocery, newGrocery);
console.log(concatResult);

const lastIndex = concatResult.lastIndexOf("Pop");
console.log(lastIndex);

//3.3

const arr = [1, 2, 3];
const arrOfArrs = [1, 2, 3, arr, arr, arr];
const logSecond = arrOfArrs[5][1];
console.log(logSecond);

//3.4

const myCar = {
    speed: "320",
    model: "bmw",
}

const color = "dark-olive";

const forSale = false;

myCar["color"] = color;
console.log(myCar);

myCar["forSale"] = forSale;
console.log(myCar);

//3.5

const friend_1 = {
    id: 1,
    name: 'name_1',
    secondName: 'secondName_1',
}
const friend_2 = {
    id: 2,
    name: 'name_2',
    secondName: 'secondName_2',
}
const friend_3 = {
    id: 3,
    name: 'name_3',
    secondName: 'secondName_3',
}

const people = {
    friends: [],
}

people.friends.push(friend_1, friend_2, friend_3)

console.log(people.friends)


const myArr1 = [1, 3, 5, 6, 8, 9, 15];
console.log(myArr1.indexOf(0)) // -1
console.log(myArr1.indexOf(3)) // 1

// myArr1[1] = 4;
myArr1.splice(1, 1, 4);
console.log(myArr1);

const myArr2 = [];
myArr2[10] = "test";
console.log(myArr2); // [ <10 empty items>, 'test' ]
console.log(myArr2[2]); // undefined


const myArr3 = [3, 6, 8, 9, 3, 55, 553, 434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3); // []
console.log(myArr3[0]); // undefined

// projects

const theList = ["Laurence", "Svekis", true, 35, null, undefined, {
    test: "one", score: 55
}, ["one", "two"]];

theList.pop();
theList.shift();
theList.unshift("FIRST");
theList[3] = "hello World";
theList[2] = "MIDDLE";
theList.push("LAST");
console.log(theList);

