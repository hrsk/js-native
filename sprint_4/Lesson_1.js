// Programming Patterns, publisher/subscriber

//observer ==> subscriber ==> listener ==> handler ==> watcher ==> handler

/*
store.subscrube(function () {
}) // store changed
button.addEventListener('click', function () {
}) // button was clicked
setTimeout(function () {
}, 1000) // one second passed

app.get('/users', function () {
}) // route was called
fs.watch('text.txt', function () {
}) // file has been modified
websocket.on('message', function () {
}) // message has been sent
*/

// ----

const button = {
    subscribers: {
        click: [],
        focus: [],
    },
    click() {
        console.log('base logic');
        button.subscribers.click.forEach(callback => callback)
    },
    addEventListener(eventName, callback) {
        console.log('add subscriber')
        button.subscribers[eventName].push(callback)
        return () => {
            button.removeEventListener(eventName, callback)
        }
    },
    removeEventListener(eventName, callback) {
        console.log('remove subscriber')
        button.subscribers[eventName] = button.subscribers[eventName].filter(clb => clb !== callback)
    },
}

const sendEmail = function () {
    return console.log('send email subscriber')
}
const openModal = function () {
    return console.log('open modal subscriber')
}

// события добавляются в массив subscribers.click
button.addEventListener('click', sendEmail())
button.addEventListener('click', openModal())

button.click() // вызов события

button.removeEventListener('click', openModal()) // отписка от собыитя
//
button.click() // вызов события

// const unsubscribe = button.addEventListener('click', openModal()) // подписка на событие
// button.click()
// unsubscribe()
// button.click()

//Events


// const smallDiv = document.getElementById('small')
const smallDiv = document.querySelector('#small')
const mediumDiv = document.querySelector('#medium')
const bigDiv = document.querySelector('#big')
const link = document.querySelector('#linkId')
const body = document.querySelector('#bodyId')
const clickMe = document.querySelector('#buttonId')

function eventHandler(event) {
    console.log('click')
    console.log('target:', event.target.id)
    console.log('current target:', event.currentTarget.id)
    //TODO: если у элемнта несколько обработчикв на одно событие,
    // то даже при прекращении всплытия все они будут выполнены.
    // stopPropagation препятсвует продвижению события,
    // но все обработчки события на текущем элементе выполнятся
    //event.stopPropagation()
    // TODO: stopImmediatePropagation не только предотвращает всплытие,
    //  но и останавливает обработку событияй на текущем элементе
    // event.stopImmediatePropagation()
}

function eventHandler2(event) {
    console.log('target handler2:', event.target.id)
    console.log('current target handler2:', event.currentTarget.id)
}


smallDiv.addEventListener('click', eventHandler)
smallDiv.addEventListener('click', eventHandler2)

mediumDiv.addEventListener('click', eventHandler)
bigDiv.addEventListener('click', eventHandler)
body.addEventListener('click', eventHandler)


const blockDefaultBehavior = e => {
    //TODO: отменяет поведение браузера по умолчанию,
    // которое происходит при обработке события.
    e.preventDefault()
}

link.addEventListener('click', blockDefaultBehavior)

function buttonEventHandler() {
    console.log('button clicked')

}

clickMe.addEventListener('click', buttonEventHandler)
