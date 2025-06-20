const sqr = (num) => {
    console.log('call')
    return num * num
}

const memoizedSqr = memoize(sqr);

// написать функцию мемозации memoize, которая принимает функцию вызов которой нужно замемоизировать.
// Если функция которую мы мемоизируем вызывается повторно с одним и тем же аргументом,
// то вычисление не происходит, а возвращается результат (из кэша)

console.log(memoizedSqr(5)) //calculation
console.log(memoizedSqr(5)) // from cache
console.log(memoizedSqr(6)) //calculation
