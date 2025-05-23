import Footer from '../../components/footer/Footer';
import type { LayoutProps } from '../types';
import styles from './styles.module.scss';

const LayoutOfMenu = ({ children, title = 'Autoservice' }: LayoutProps) => {
	return (
		<>
			<title>{title}</title>
			<main className={styles.layout}>
				{children}
				<Footer className={styles.layout__footer} />
			</main>
		</>
	);
};
export default LayoutOfMenu;
