// createElement, append, prepend, before, after, remove
//
// insertAdjacentHTML:
// beforebegin - begin
// afterbegin - prepend
// beforeend - append
// afterend - after

const div = document.querySelector('.element');

//TODO: append добавляет элемент внутри тэга в конец
//TODO: prepend добавляет элемент внутри тэга в начало

// div.append('Привет'); // после элемента
// div.append('Привет 2');
// div.prepend('Привет 3'); // перед элементом
// div.prepend('В самое начало');
// div.append('В самый конец');
// div.prepend('В самое начало 2');

// -------

//TODO: before -- добавляет перед элементом в начало
//TODO: before -- добавляет после элемента в конец

// div.before('Перед тэгом див');
// div.after('После тэга див');
// div.before('Перед тэгом див2');
// div.after('После тэга див2');

// -------

const button = document.createElement('button');
button.textContent = 'Наша кнопка';

const button2 = document.createElement('button');
button2.textContent = 'Наша кнопка #2';

// TODO: поменяестя порядок
// div.before(button);
// div.after(button);

// TODO: добавится две кнопки
// div.before(button);
// div.after(button2);



// const ul = document.createElement('ul');
// ul.innerHTML = `
// 	<li>1</li>
// 	<li>2</li>
// `;
//
// div.append(ul);

// TODO: beforeend дабавит ul внутри тэга div в конец
// TODO: beforebegin дабавит ul снаружи тэга div в начало
// TODO: afterbegin дабавит ul внутри тэга div в начало
// TODO: afterend дабавит ul снаружи тэга div в конец
// div.insertAdjacentHTML('afterend', `
// 	<ul>
// 		<li>3</li>
// 		<li>4</li>
// 	</ul>
// `);

// --------

// добавит тэг <p></p> перед <div>
div.insertAdjacentHTML('beforebegin', `
	<p>text</p>
`);


// добавит еще один элемент li в конец списка
const ul = div.querySelector('ul');
ul.insertAdjacentHTML('beforeend', `
	<li>3</li>
`);

//перезатрет элементы списка данным элементом
// ul.innerHTML = '<li>4</li>';
