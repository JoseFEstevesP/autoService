import InitBar from '../../../../components/initBar/InitBar';
import Welcome from '../welcome/Welcome';
import styles from './styles.module.scss';

const Header = ({ className }: { className?: string }) => {
	return (
		<header className={`${styles.header} ${className}`}>
			<InitBar
				className={styles.header__initBar}
				items={[
					{
						text: 'Inicio',
						to: '/',
					},
					{
						text: 'Acerca de nosotros',
						to: '/about',
					},
					{
						text: 'Catalogo',
						to: '/catalog',
					},
					{
						text: 'Citas',
						to: '/schedule',
					},
					{
						text: 'Pagos',
						to: '/payments',
					},
					{
						text: 'Boletin',
						to: '/newsletter',
					},
				]}
			/>
			<Welcome className={styles.header__welcome} />
		</header>
	);
};
export default Header;
