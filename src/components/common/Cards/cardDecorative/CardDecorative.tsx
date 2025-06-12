import { Icons } from '@/components/ui/icon/Icons';
import styles from './styles.module.scss';
import type { CardDecorativeProps } from './types';

const CardDecorative = ({
	description,
	iconName,
	...props
}: CardDecorativeProps) => {
	return (
		<section
			{...props}
			className={`${styles.cardDecorative} ${props.className}`}
		>
			<div className={styles.cardDecorative__content}>
				<h2 className={styles.cardDecorative__title}>{props.title}</h2>
				<p className={styles.cardDecorative__description}>{description}</p>
			</div>
			<Icons iconName={iconName} className={styles.cardDecorative__icon} />
		</section>
	);
};
export default CardDecorative;
