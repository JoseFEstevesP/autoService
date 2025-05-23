import { Button } from '../button/Button';
import styles from './styles.module.scss';
import type { CardProductProps } from './types';

const CardProduct = ({
	image,
	price,
	title,
	tag,
	oldPrice,
	handleClick,
	...props
}: CardProductProps) => {
	return (
		<section {...props} className={`${styles.cardProduct} ${props.className}`}>
			<div className={styles.cardProduct__contentImage}>
				<img src={image} alt={title} className={styles.cardProduct__image} />
				{tag && <span className={styles.cardProduct__tag}>{tag}</span>}
			</div>
			<div className={styles.cardProduct__content}>
				<h2 className={styles.cardProduct__title}>{title}</h2>
				<div className={styles.cardProduct__pricing}>
					<p className={styles.cardProduct__price}>{price}</p>
					{oldPrice && (
						<p className={styles.cardProduct__oldPrice}>{oldPrice}</p>
					)}
				</div>
				<div className={styles.cardProduct__buttons}>
					<Button
						text='Comprar '
						className={`${Button.styles['button--default']} ${styles.cardProduct__button}`}
						onClick={handleClick?.buy}
					/>
					<Button
						icon={{ iconName: 'car' }}
						aria-label='Añadir al carrito'
						className={`${Button.styles['button--default']} ${styles.cardProduct__button}`}
						onClick={handleClick?.addToCart}
					/>
				</div>
			</div>
		</section>
	);
};
export default CardProduct;
