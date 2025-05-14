import { Link } from 'react-router-dom';
import { Icons } from '../icon/Icons';
import type { LinkProp } from './interface';
import styles from './styles.module.scss';

const LinkPer = ({ to, text, icon, ...props }: LinkProp) => {
	return (
		<Link {...props} to={to} className={`${styles.link} ${props.className}`}>
			{text && <span className={styles.link__text}>{text}</span>}
			{props.children && (
				<span className={styles.link__text}>{props.children}</span>
			)}
			{icon?.iconName && (
				<Icons {...icon} className={`${styles.link__icon} ${icon.className}`} />
			)}
		</Link>
	);
};
export default LinkPer;
