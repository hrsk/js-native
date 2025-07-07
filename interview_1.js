/*
console.log(1)
for (let i = 0; i < 10; i++) {
    console.log(777)
}
console.log(2)

// ----------
// переписать первую задачу, чтобы вывелось 1, 2, а затем цикл

console.log(1)

setTimeout(() => {
    for (let i = 0; i < 10; i++) {
        console.log(777)
    }
}, 0)
console.log(2)
*/

// ----------


const obj = {
    a: 1,
    b: 2,
}

delete obj["b"]

const newObj = {...obj, obj: {a: 1}}

delete obj.a

console.log(newObj)
console.log(obj)

// ---------

/*const promise = new Promise((resolve, reject) => {
    // resolve(11)
    reject(12)
})

const promise1 = promise.then((response) => {
    console.log(response)
})
const promise2 = promise.catch((error) => {
    console.log(error)
})

console.log(promise1)
console.log(promise2)*/

// ---------

function newPromise () {
    return new Promise(async (resolve, reject) => {

        const responseRes = await resolve('resolve succeeded')
        await reject('some error')

        try {
            return responseRes
        } catch (e) {
            return e
        }
    })
}


console.log(newPromise())