// string concatenation
// document без window
// firstElementChild, lastElementChild, children
// parentNode, nextElementSibling, previousElementSibling - sibling
// innerHTML, textContent


// Concatenation:

// const value = 2;
// const value2 = true;
// const value3 = 'Строка';
//
// console.log('Привет' + value + ' мир');
// console.log(`Привет ${value} мир`);
// console.log(`${value}-${value2}:${value3}`)

// --------

const div = document.querySelector('div');

for (let i = 0; i < div.children.length; i++) {
    const element = div.children[i];

    console.log(element.tagName); // UL SPAN !!В ВЕРХНЕМ РЕГИСТРЕ

    if (element.tagName === 'UL') {
        element.innerHTML = `
			<ul>
				<li>Первый</li>
				<li>Второй</li>
				<li>Третий</li>
			</ul>
		`;
    } else if (element.tagName === 'SPAN') {
        element.textContent = 'Привет из JS';
    }
}

// Добавляет как HTML tag:
// div.innerHTML = '<button>Привет мир</button>';

// Добавляет как текст:
// div.textContent = '<button>Привет мир</button>';

console.log(div);

// const firstChildren = div.lastElementChild
// console.log(firstChildren)
// const lastChildren = div.firstElementChild
// console.log(lastChildren)
// const allChildren = div.children
// console.log(allChildren)

// ------------

const parentNode = div.parentNode
console.log(parentNode) // <body></body>

const nextElementSibling = div.nextElementSibling
console.log(nextElementSibling) // <script></script>

const previousElementSibling = div.previousElementSibling
console.log(previousElementSibling) // <img/>

const button = document.querySelector('button')

const buttonParentNode = button.parentNode
const buttonNextElementSibling = button.nextElementSibling
const buttonPreviousElementSibling = button.previousElementSibling

console.log(buttonParentNode) // <div></div>
console.log(buttonPreviousElementSibling) // <span></span>
console.log(buttonNextElementSibling) // <span></span>


