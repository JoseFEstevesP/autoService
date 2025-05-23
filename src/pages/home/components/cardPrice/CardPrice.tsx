import { Icons } from '../../../../components/icon/Icons';
import styles from './styles.module.scss';
import type { CardPriceProps } from './types';

const CardPrice = ({ description, iconName, ...props }: CardPriceProps) => {
	return (
		<section {...props} className={`${styles.cardPrice} ${props.className}`}>
			<div className={styles.cardPrice__content}>
				<h2 className={styles.cardPrice__title}>{props.title}</h2>
				<p className={styles.cardPrice__description}>{description}</p>
			</div>
			<Icons iconName={iconName} className={styles.cardPrice__icon} />
		</section>
	);
};
export default CardPrice;
