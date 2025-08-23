
const cssText = `
  border-radius: 16px;
  background: transparent;
  padding: 4px 8px;
  border: 1px solid black;
`;


const subscribe = '<button id="sub" style="' + cssText + '">Subscribe</button>'
const unsubscribe = '<button id="unsub" style="' + cssText + '">Usubscribe</button>'

document.body.insertAdjacentHTML('afterbegin', subscribe)
document.body.insertAdjacentHTML('afterbegin', unsubscribe)

const sub = document.querySelector('#sub')
const unsub = document.querySelector('#unsub')


const abortController = new AbortController()
const signal = abortController.signal

signal.addEventListener('abort', () => {
    console.log('Операция отменена')
})

sub.addEventListener('click', () => console.log('Подписка активна'), {
    signal: abortController.signal
})

unsub.addEventListener('click', () => abortController.abort())

// Вызываем, когда захотим отписаться:
// abortController.abort()