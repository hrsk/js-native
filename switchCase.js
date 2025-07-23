const name = 'alex'


switch (name) {
    case "john":
        console.log(`Hello, ${name}!`)
        break //прерывание выполнения и выход из кейса
    case "alex": {
        console.log(`Hello, Alex!`)
        //выполнится следующий кейс
    }
    case "kate": {
        console.log(`Hello, Kate!`)
        //выполнится следующий кейс
    }
    default:
        //и этот кейс выполнися,
        // если в кейса выше не будет break или return
        console.log('Hello')
}

const x = 6;
switch (true) {
    case x > 5 && x < 10:
        console.log('x > 5 && x < 10');
        break;
    case x >= 10:
        console.log('x >= 10');
        break;
    case x <= 5 :
        console.log('x <= 5');
        break;
}
