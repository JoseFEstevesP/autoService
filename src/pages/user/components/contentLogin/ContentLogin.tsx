import { Login } from '@/components/common/login/Login';
import styles from './styles.module.scss';

const ContentLogin = () => {
	return (
		<section className={styles.contentLogin}>
			<Login to='/' />
		</section>
	);
};
export default ContentLogin;
