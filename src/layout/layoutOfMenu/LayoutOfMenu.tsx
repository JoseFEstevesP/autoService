import Footer from '../../components/footer/Footer';
import type { LayoutProps } from '../types';
import styles from './styles.module.scss';

const LayoutOfMenu = ({ children, title = 'Sae motor pro' }: LayoutProps) => {
	return (
		<>
			<title>Sae motor pro - {title}</title>
			<main className={styles.layout}>
				{children}
				<Footer className={styles.layout__footer} />
			</main>
		</>
	);
};
export default LayoutOfMenu;
