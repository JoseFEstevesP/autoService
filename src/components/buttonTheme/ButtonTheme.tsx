import { useCallback, useEffect, useState } from 'react';
import { Button } from '../button/Button';
import styles from './styles.module.scss';

const ButtonTheme = () => {
	const [theme, setTheme] = useState(() => {
		const systemPrefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)',
		).matches;
		return (
			localStorage.getItem('theme') || (systemPrefersDark ? 'dark' : 'light')
		);
	});

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = useCallback(() => {
		document.documentElement.setAttribute('data-theme-transition', 'true');
		setTheme(prevTheme => {
			const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
			setTimeout(() => {
				document.documentElement.removeAttribute('data-theme-transition');
			}, 400);
			return newTheme;
		});
	}, []);

	return (
		<Button
			icon={{
				iconName: theme === 'dark' ? 'sun' : 'moon',
				className: styles.themeButton__icon,
			}}
			title={`Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`}
			onClick={toggleTheme}
			className={styles.themeButton}
			aria-label={`Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`}
			data-theme={theme}
		/>
	);
};

export default ButtonTheme;
