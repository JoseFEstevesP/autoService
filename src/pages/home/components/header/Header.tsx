import InitBar from '@/components/ui/initBar/InitBar';
import Welcome from '../welcome/Welcome';
import styles from './styles.module.scss';
import { menuData } from '@/components/common/Navigation/menuData';

const Header = ({ className }: { className?: string }) => {
	return (
		<header className={`${styles.header} ${className}`}>
			<InitBar className={styles.header__initBar} items={menuData} />
			<Welcome className={styles.header__welcome} />
		</header>
	);
};
export default Header;
