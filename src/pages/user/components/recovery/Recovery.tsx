import { useState } from 'react';
import EmailForm from './component/emailForm/EmailForm';
import NewPassword from './component/newPassword/NewPassword';
import styles from './styles.module.scss';

const Recovery = () => {
	const [renderForm, setRenderForm] = useState(false);

	return (
		<section className={styles.recovery}>
			{!renderForm && <EmailForm setRenderForm={setRenderForm} />}
			{renderForm && <NewPassword setRenderForm={setRenderForm} />}
		</section>
	);
};
export default Recovery;
