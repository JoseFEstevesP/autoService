import Footer from '@/components/ui/footer/Footer';
import InitBar from '@/components/ui/initBar/InitBar';
import { useEffect } from 'react';
import { menuData } from '../../Navigation/menuData';
import type { LayoutProps } from '../types';
import styles from './styles.module.scss';

const LayoutD = ({ children, title = 'Sae motor pro' }: LayoutProps) => {
	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<>
			<main className={styles.layout}>
				<header className={styles.layout__header}>
					<InitBar items={menuData} />
				</header>
				<main className={styles.layout__main}>{children}</main>
				<Footer className={styles.layout__footer} />
			</main>
		</>
	);
};
export default LayoutD;
