import { Link } from 'react-router-dom';
import { Icons } from '../icon/Icons';
import styles from './styles.module.scss';
import type { LinkProp } from './types';

const LinkPer = ({ to, text, icon, ...props }: LinkProp) => {
	const relativeTo = to.startsWith('/') ? to : `./${to}`;

	return (
		<Link
			{...props}
			to={relativeTo}
			className={`${styles.link} ${props.className}`}
		>
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
