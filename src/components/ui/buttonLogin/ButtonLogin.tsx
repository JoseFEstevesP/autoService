import { Login } from '@/components/common/login/Login';
import { Button } from '../button/Button';
import Modal from '../modal/Modal';
import useModal from '../modal/hooks/useModal';
import styles from './styles.module.scss';

const ButtonLogin = () => {
	const { handleOpen, handleClose, isOpen } = useModal({});

	return (
		<>
			<Modal handleClose={handleClose} isOpen={isOpen}>
				{isOpen && <Login to='/' />}
			</Modal>
			<Button
				className={styles.buttonLogin}
				icon={{ iconName: 'user', className: styles.buttonLogin__icon }}
				title='iniciar sesion'
				onClick={handleOpen}
			/>
		</>
	);
};
export default ButtonLogin;
