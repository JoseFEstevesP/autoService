import LinkPer from '../link/LinkPer';
import styles from './styles.module.scss';
import type { CardServicesProps } from './types';

const CardServices = ({
	image,
	to,
	description,
	...props
}: CardServicesProps) => {
	return (
		<section {...props} className={styles.cardServices}>
			<div className={styles.cardServices__contentImage}>
				<img src={image} alt='image' className={styles.cardServices__image} />
				<h2 className={styles.cardServices__title}>{props.title}</h2>
			</div>
			<p className={styles.cardServices__description}>{description}</p>
			<LinkPer
				className={styles.cardServices__link}
				to={to}
				text='Ver detalles'
				icon={{
					iconName: 'arrow',
				}}
			/>
		</section>
	);
};
export default CardServices;
