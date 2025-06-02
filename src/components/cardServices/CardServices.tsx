import { Button } from '../button/Button';
import Stars from '../stars/Stars';
import styles from './styles.module.scss';
import type { CardServicesProps } from './types';

const CardServices = ({
	image,
	handleData,
	price,
	oldPrice,
	rating,
	tags,
	...props
}: CardServicesProps) => {
	return (
		<section {...props} className={styles.cardServices}>
			<div className={styles.cardServices__contentImage}>
				<img
					src={image || '/img/defaultServices.png'}
					alt={`image-${props.title}`}
					className={styles.cardServices__image}
				/>
				<div className={styles.cardServices__header}>
					{Array.isArray(tags) && tags.length > 0 && (
						<div className={styles.cardServices__tags}>
							{tags.map((tag, index) => (
								<span key={index} className={styles.cardServices__tag}>
									{tag.name}
								</span>
							))}
						</div>
					)}
				</div>
			</div>

			<div className={styles.cardServices__content}>
				<Stars rating={rating} className={styles.cardServices__rating} />
				<h2 className={styles.cardServices__title}>{props.title}</h2>

				<div className={styles.cardServices__pricing}>
					<span className={styles.cardServices__price}>
						${price?.toFixed(2)}
					</span>
					{oldPrice && (
						<span className={styles.cardServices__oldPrice}>
							${oldPrice?.toFixed(2)}
						</span>
					)}
				</div>

				<Button
					title={`ver detalles de ${props.title}`}
					onClick={handleData}
					className={styles.cardServices__link}
					text='Ver detalles'
					icon={{
						iconName: 'arrow',
					}}
				/>
			</div>
		</section>
	);
};
export default CardServices;
