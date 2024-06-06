import styles from './App.module.css';
import React from 'react';
import { useState } from 'react';

export function App() {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');
	const isValueValid = value.length >= 3;

	const [list, setList] = useState([]);

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение:');
		if (promptValue.length < 3) {
			setError('Минимальная длина строки - 3 символа.');
		} else {
			setValue(promptValue);
			setError('');
		}
	};

	const onAddButtonClick = () => {
		if (value.trim() !== '') {
			const id = Date.now();
			const updatedList = [...list, { id, value }];
			setList(updatedList);
			setValue('');
			setError('');
		} else {
			setError('Значение не может быть пустым');
		}
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']} disabled={!isValueValid}>
					{value}
				</output>
				"
			</p>
			<div className={styles.error}>
				{error !== '' && <div className="error">{error}</div>}
			</div>
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button className={styles.button} onClick={onAddButtonClick}>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				<ul className={styles.list}>
					{list.map(item => (<li key={item.id} className={styles['list-item']}>{item.value}</li>))}
				</ul>
			</div>
		</div>
	);
}
