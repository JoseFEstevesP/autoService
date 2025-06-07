import { NavLink, Outlet } from 'react-router-dom';
import styles from './styles.module.scss';

const Catalog = () => {
	return (
		<main className={styles.catalog}>
			<h1 className={styles.catalog__title}>Catálogo</h1>
			<p className={styles.catalog__description}>
				Explora nuestra amplia gama de servicios y productos para mantener tu
				vehículo en perfectas condiciones
			</p>
			<div className={styles.catalog__links}>
				<NavLink
					title='Servicios'
					to='services'
					className={({ isActive }: { isActive: boolean }) =>
						`${styles.catalog__link} ${
							isActive ? styles['catalog__link--active'] : ''
						}`
					}
					end
				>
					Servicios
				</NavLink>
				<NavLink
					title='Productos'
					to='products'
					end
					className={({ isActive }: { isActive: boolean }) =>
						`${styles.catalog__link} ${
							isActive ? styles['catalog__link--active'] : ''
						}`
					}
				>
					Productos
				</NavLink>
			</div>
			<Outlet />
		</main>
	);
};

export default Catalog;
