import Cite from './components/cite/Cite';
import Header from './components/header/Header';
import Newsletter from './components/newsletter/Newsletter';
import Price from './components/price/Price';
import HomeProduct from './components/product/HomeProduct';
import HomeServices from './components/services/HomeServices';
import styles from './styles.module.scss';
const Home = () => {
	return (
		<main className={styles.home}>
			<Header className={styles.home__header} />
			<main className={styles.home__main}>
				<HomeServices />
				<HomeProduct />
				<Cite />
				<Price />
				<Newsletter />
			</main>
		</main>
	);
};
export default Home;
