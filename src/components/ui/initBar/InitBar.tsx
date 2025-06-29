import Cart from '@/components/common/Cart/Cart';
import { ContextToken } from '@/context/token/TokenContext';
import { useContext } from 'react';
import ButtonLogout from '../buttonLogout/ButtonLogout';
import ButtonTheme from '../buttonTheme/ButtonTheme';
import { Icons } from '../icon/Icons';
import LinkPer from '../link/LinkPer';
import { MenuHorizontal } from '../menuHorizontal/MenuHorizontal';
import styles from './styles.module.scss';
import type { InitBarProps } from './types';

const InitBar = ({ items, ...props }: InitBarProps) => {
	const { token } = useContext(ContextToken);
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
					<LinkPer
						to={token ? '/profile' : '/login'}
						className={styles.initBar__links}
						icon={{ iconName: 'user', className: styles.initBar__icon }}
					/>
					<Cart />
					<ButtonTheme />
					{token && <ButtonLogout icon={{ className: styles.initBar__icon }} />}
				</footer>
			</aside>
		</>
	);
};
export default InitBar;
