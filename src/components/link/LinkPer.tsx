import { Link } from 'react-router-dom';
import { Icons } from '../icon/Icons';
import type { LinkProp } from './interface';
import styles from './styles.module.scss';

const LinkPer = ({ to, text, icon, ...props }: LinkProp) => {
	return (
		<Link {...props} to={to} className={`${styles.link} `}>
			{text && <span className={styles.link__text}>{text}</span>}
			{icon?.iconName && <Icons {...icon} className={styles.link__icon} />}
		</Link>
	);
};
export default LinkPer;
