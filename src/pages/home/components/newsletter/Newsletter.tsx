import FormEmail from './component/formEmail/FormEmail';
import styles from './styles.module.scss';

const Newsletter = () => {
	return (
		<section className={styles.newsletter} id='newsletter'>
			<h2 className={styles.newsletter__title}>Suscríbete a Nuestro Boletín</h2>
			<p className={styles.newsletter__description}>
				Recibe las últimas novedades, ofertas exclusivas y contenido especial
				directamente en tu correo.
			</p>
			<FormEmail />
			<p className={styles.newsletter__description}>
				Al suscribirte, aceptas recibir correos electrónicos de marketing de
				nuestra empresa. Puedes darte de baja en cualquier momento.
			</p>
		</section>
	);
};
export default Newsletter;
