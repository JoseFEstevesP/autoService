import { useEffect } from 'react';
import type { LayoutProps } from '../types';
import styles from './styles.module.scss';
import Footer from '@/components/ui/footer/Footer';

const LayoutOfMenu = ({ children, title = 'Sae motor pro' }: LayoutProps) => {
	useEffect(() => {
		document.title = title;
	}, [title]);
	return (
		<>
			<main className={styles.layout}>
				{children}
				<Footer className={styles.layout__footer} />
			</main>
		</>
	);
};
export default LayoutOfMenu;
