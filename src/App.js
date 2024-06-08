import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

	const clickBack = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		}
	};

	const clickForward = () => {
		if (activeIndex < steps.length - 1) {
			setActiveIndex(activeIndex + 1);
		}
	};

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => (
							<li
								key={index}
								className={`${styles['steps-item']} ${
									index < activeIndex ? styles.done : ''
								} ${index === activeIndex ? styles.active : ''}`}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(index)}
								>
									{index + 1}
								</button>
								{step.title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={clickBack}
							disabled={activeIndex === 0}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={
								activeIndex === steps.length - 1
									? () => setActiveIndex(0)
									: clickForward
							}
						>
							{activeIndex === steps.length - 1
								? 'Начать сначала'
								: 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
