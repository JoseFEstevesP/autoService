import type { ReactNode } from 'react';
import Footer from '../components/footer/Footer';
import InitBar from '../components/initBar/InitBar';
import { menuData } from '../routes/default/menuData';
import styles from './styles.module.scss';

const LayoutD = ({ children }: { children: ReactNode }) => {
	return (
		<main className={styles.layout}>
			<header className={styles.layout__header}>
				<InitBar items={menuData} />
			</header>
			<main className={styles.layout__main}>{children}</main>
			<Footer className={styles.layout__footer} />
		</main>
	);
};
export default LayoutD;
