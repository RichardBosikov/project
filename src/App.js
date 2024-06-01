import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

// export function App() { // Декларативный стиль
// 	const now = new Date().getFullYear(); // Декларативный стиль

// 	return ( // Императивный стиль в строке img
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />

// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer" // Декларативный стиль
// 				>
// 					Learn React
// 				</a>
// 				<p>&copy; {now}</p>
// 			</header>
// 		</div>
// 	);
// }


export function App() {
	const now = new Date().getFullYear();

	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			createElement(
				'p',
				null,
				'Edit ',
				createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('p', null, '\u00A9 ', now),
		),
	);
}


// export default App;

// export function App() {
// 	const now = new Date().getFullYear();

// 	const app = createElement('div')
// 	app.classList.add('App')

// 	const header = createElement('header')
// 	header.classList.add('App-header')
// 	app.append.add(header)

// 	const img = createElement('img')
// 	img.src = logo
// 	img.classList.add('App-logo')
// 	img.alt = 'logo'
// 	header.append.add(img)

// 	const p = createElement('p')
// 	p.innerHTML = 'Edit <code>src/App.js</code> and save to reload.'
// 	header.append.add(p)

// 	const a = createElement('a')

// // 				<a
// // 					className="App-link"
// // 					href="https://reactjs.org"
// // 					target="_blank"
// // 					rel="noopener noreferrer" // Декларативный стиль
// // 				>
// // 					Learn React
// // 				</a>
// // 				<p>&copy; {now}</p>

// }
