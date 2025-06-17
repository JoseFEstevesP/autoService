import { Button } from '@/components/ui/button/Button';
import { ContextCart } from '@/context/cart/CartContext';
import { useCallback, useContext, useState } from 'react';
import Item from './components/item/Item';
import styles from './styles.module.scss';

const Cart = () => {
	const { cart } = useContext(ContextCart);
	const [isActive, setIsActive] = useState(false);

	const toggleActive = useCallback(() => {
		setIsActive(prevState => !prevState);
	}, []);

	const calculateTotal = () => {
		if (!cart || cart.length === 0) return 0;

		return cart.reduce((total, item) => {
			const price = Number(item.price) || 0;
			const quantity = Math.max(1, Number(item.quantity) || 1);
			return total + price * quantity;
		}, 0);
	};

	const total = calculateTotal();

	return (
		<section className={styles.cart}>
			<Button
				icon={{ iconName: 'cart', className: styles.cart__icon }}
				className={styles.cart__button}
				onClick={toggleActive}
			/>

			<div
				className={`${styles.cart__content} ${isActive && styles['cart__content--active']}`}
			>
				{cart?.length ? (
					<>
						{cart.map(item => (
							<Item
								key={item.id}
								id={item.id}
								img={item.image.url}
								title={item.name}
								price={item.price}
								quantity={item.quantity}
							/>
						))}
						<div className={styles.cart__footer}>
							<div className={styles.cart__total}>
								<span>Total:</span>
								<span>${total.toFixed(2)}</span>
							</div>
							<button className={styles.cart__checkout}>Procesar Pago</button>
						</div>
					</>
				) : (
					<p>El carrito está vacío</p>
				)}
			</div>
		</section>
	);
};
export default Cart;
