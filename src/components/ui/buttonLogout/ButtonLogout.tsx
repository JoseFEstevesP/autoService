import { ContextToken } from '@/context/token/TokenContext';
import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../button/Button';
import styles from './styles.module.scss';

const ButtonLogout = ({ icon }: { icon?: { className: string } }) => {
	const { setToken } = useContext(ContextToken);
	const navigate = useNavigate();

	const handleLogout = useCallback(() => {
		localStorage.removeItem('token');
		setToken(null);
		navigate('/');
	}, [navigate, setToken]);

	return (
		<>
			<Button
				icon={{ iconName: 'logout', className: icon?.className }}
				onClick={handleLogout}
				className={styles.buttonLogout}
			/>
		</>
	);
};
export default ButtonLogout;
