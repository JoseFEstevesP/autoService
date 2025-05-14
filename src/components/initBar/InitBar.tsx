import { Icons } from '../icon/Icons';
import { MenuHorizontal } from '../menu/menuHorizontal/MenuHorizontal';
import type { InitBarProps } from './interface';
import styles from './styles.module.scss';

const InitBar = ({ items, ...props }: InitBarProps) => {
	return (
		<>
			<aside {...props} className={`${styles.initBar}  ${props.className}`}>
				<header>
					<Icons iconName='logo' className={`${styles.initBar__logo}`} />
				</header>
				<main className={styles.initBar__contentMenu}>
					<MenuHorizontal items={items} />
				</main>
				<footer className={styles.initBar__footer}>
					<Icons iconName='user' className={styles.initBar__icon} />
				</footer>
			</aside>
		</>
	);
};
export default InitBar;
