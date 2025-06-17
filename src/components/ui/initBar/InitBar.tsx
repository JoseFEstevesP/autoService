import Cart from '@/components/common/Cart/Cart';
import ButtonLogin from '../buttonLogin/ButtonLogin';
import ButtonTheme from '../buttonTheme/ButtonTheme';
import { Icons } from '../icon/Icons';
import { MenuHorizontal } from '../menuHorizontal/MenuHorizontal';
import styles from './styles.module.scss';
import type { InitBarProps } from './types';

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
					<ButtonLogin />
					<Cart />
					<ButtonTheme />
				</footer>
			</aside>
		</>
	);
};
export default InitBar;
