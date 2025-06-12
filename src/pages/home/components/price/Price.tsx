import CardDecorative from '@/components/common/Cards/cardDecorative/CardDecorative';
import { methodsPayment } from './data';
import styles from './styles.module.scss';

const Price = () => {
	return (
		<section className={styles.price} id='price'>
			<h2 className={styles.price__title}>Métodos de pagos</h2>
			<p className={styles.price__description}>
				Diversas opciones de pago para que tu compra sea fácil y segura.
			</p>
			<div className={styles.price__cards}>
				{methodsPayment.map((method, index) => (
					<CardDecorative
						key={index}
						title={method.title}
						description={method.description}
						iconName={method.iconName}
					/>
				))}
			</div>
		</section>
	);
};
export default Price;
