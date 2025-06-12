import LinkPer from '@/components/ui/link/LinkPer';
import styles from './styles.module.scss';

const Cite = () => {
	return (
		<section className={styles.cite}>
			<div className={styles.cite__container}>
				<h2 className={styles.cite__title}>
					¿Necesitas una revisión o reparación?
				</h2>
				<p className={styles.cite__description}>
					Reserva una cita ahora y disfruta de nuestros mejores servicios
				</p>
				<LinkPer
					className={styles.cite__link}
					to='/'
					text='Agendar cita'
					icon={{
						iconName: 'calendar',
						className: styles.cite__linkIcon,
					}}
				/>
			</div>
		</section>
	);
};
export default Cite;
