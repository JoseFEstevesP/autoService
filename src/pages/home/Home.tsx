import Header from './components/header/Header';
import Product from './components/product/Product';
import Services from './components/services/Services';
import styles from './styles.module.scss';
const Home = () => {
	return (
		<main className={styles.home}>
			<Header className={styles.home__header} />
			<main className={styles.home__main}>
				<Services />
				<Product />
			</main>
		</main>
	);
};
export default Home;
