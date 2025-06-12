import type { HTMLAttributes } from 'react';
import { Icons } from '../icon/Icons';
import styles from './styles.module.scss';

const Stars = ({
	rating,
	...props
}: { rating: number } & HTMLAttributes<HTMLDivElement>) => {
	return (
		<div {...props} className={`${styles.stars} ${props.className}`}>
			{Array.from({ length: rating ?? 0 }).map((_, i) => (
				<Icons key={i} iconName='star' className={styles.stars__icons} />
			))}
			{Array.from({ length: 5 - (rating ?? 0) }).map((_, i) => (
				<Icons key={i} iconName='starEmpty' className={styles.stars__icons} />
			))}
		</div>
	);
};
export default Stars;
