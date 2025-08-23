// setAttribute, hasAttribute, getAttribute, removeAttribute
// data-* атрибуты
// style (background-color -> backgroundColor)
// cssText
// className
// classList (add, remove, toggle, contains)


// const a = document.querySelector('a');
// a.setAttribute('href', 'http://google.com');
// a.removeAttribute('href');
// console.log(a.hasAttribute('href'));
// console.log(a.hasAttribute('href3'));
// a.setAttribute('data-test_attr', 'link');

// const input = document.querySelector('input');
// input.setAttribute('data-test_attr', 'input');
// input.setAttribute('data-test_attr2', 'input');
// input.setAttribute('data-test_attr3', 'input');
// console.log(input.dataset);

// --------

const a = document.querySelector('a');

// a.style.color = 'red';
// a.style['background-color'] = 'yellow';
// a.style.backgroundColor = 'green';

// a.style.cssText = `
// 	color: yellow;
// 	background-color: black;
// `;

// a.className = 'link';
// a.className += ' link2';

// console.log(a.classList.contains('link'));

// a.classList.remove('link');
// console.log(a.classList.contains('link'));
// a.classList.add('link5');
//
// console.log(a.classList);

// TODO: если элемент имеет class с таким названием, то он удалится, а если нет -- добавится
// a.classList.toggle('active');

// a.setAttribute('class', 'active');

// ----------

// const button = document.createElement('button');
// button.textContent = 'Button';

const cssText = `
  border-radius: 16px;
  background: transparent;
  padding: 4px 8px;
  border: 1px solid black;
`;

// document.body.append(button);
const button = '<button style="' + cssText + '">Button</button>'

document.body.insertAdjacentHTML('afterbegin', button)

const element = document.querySelector('button')
const buttonClick = (event) => {
    console.log('button clicked', event)
}

// element.addEventListener('click', buttonClick )
// element.addEventListener('click', () => {
//     console.log('button clicked')
// })


