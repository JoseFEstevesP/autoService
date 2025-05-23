import InitBar from '../../../../components/initBar/InitBar';
import { menuData } from '../../../../routes/default/menuData';
import Welcome from '../welcome/Welcome';
import styles from './styles.module.scss';

const Header = ({ className }: { className?: string }) => {
	return (
		<header className={`${styles.header} ${className}`}>
			<InitBar className={styles.header__initBar} items={menuData} />
			<Welcome className={styles.header__welcome} />
		</header>
	);
};
export default Header;
