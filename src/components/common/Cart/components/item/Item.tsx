import { Button } from '@/components/ui/button/Button';
import { ContextCart } from '@/context/cart/CartContext';
import { useContext } from 'react';
import styles from './styles.module.scss';

const Item = ({
	id,
	img,
	title,
	price,
	quantity,
}: {
	id: number;
	img: string;
	title: string;
	price: number;
	quantity: number;
}) => {
	const { updateItemQuantity, removeFromCart } = useContext(ContextCart);

	const handleIncrease = () => updateItemQuantity(String(id), quantity + 1);
	const handleDecrease = () => updateItemQuantity(String(id), quantity - 1);
	const handleRemove = () => removeFromCart(String(id));

	return (
		<section className={styles.item}>
			<div className={styles.item__contentImg}>
				<img src={img} alt={title} className={styles.item__image} />
			</div>
			<div className={styles.item__contentText}>
				<h2 className={styles.item__title}>{title}</h2>
				<p className={styles.item__price}>${price.toFixed(2)}</p>
			</div>
			<div className={styles.item__contentButtons}>
				<div className={styles.item__quantityControls}>
					<button
						className={styles.item__quantityButton}
						onClick={handleDecrease}
						disabled={quantity <= 1}
					>
						-
					</button>
					<span className={styles.item__quantity}>{quantity}</span>
					<button
						className={styles.item__quantityButton}
						onClick={handleIncrease}
					>
						+
					</button>
				</div>
				<Button
					icon={{ iconName: 'close', className: styles.item__buttonCloseIcon }}
					className={styles.item__button}
					onClick={handleRemove}
				/>
			</div>
		</section>
	);
};
export default Item;
