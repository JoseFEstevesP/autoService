import LinkPer from '@/components/ui/link/LinkPer';
import styles from './styles.module.scss';

const Welcome = ({ className }: { className?: string }) => {
	return (
		<>
			<div className={`${styles.welcome} ${className}`}>
				<h1 className={styles.welcome__title}>
					Cuidamos tu vehículo como si fuera nuestro
				</h1>
				<p className={styles.welcome__description}>
					Servicios de calidad, atención personalizada y los mejores precios
					para mantener tu coche en perfectas condiciones.
				</p>
				<div className={styles.welcome__socialBar}>
					<LinkPer
						target='_blank'
						to='https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop'
						icon={{ iconName: 'instagram', className: styles.welcome__link }}
					/>
					<LinkPer
						target='_blank'
						to='https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop'
						icon={{ iconName: 'facebook', className: styles.welcome__link }}
					/>
					<LinkPer
						target='_blank'
						to='https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop'
						icon={{ iconName: 'x', className: styles.welcome__link }}
					/>
				</div>
				<div className={styles.welcome__buttons}>
					<LinkPer
						icon={{
							iconName: 'arrow',
							className: styles.welcome__buttonIcon,
						}}
						text='Ver servicios'
						to='/services'
						className={styles.welcome__button}
					/>
					<LinkPer
						icon={{
							iconName: 'calendar',
							className: styles.welcome__buttonIcon,
						}}
						text='Agendar cita'
						to='/schedule'
						className={styles.welcome__button}
					/>
				</div>
			</div>
		</>
	);
};
export default Welcome;
