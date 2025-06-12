import type { HTMLProps } from 'react';
import { Icons } from '../icon/Icons';
import style from './styles.module.scss';

const Loader = ({
	error,
	warning,
	...props
}: { error?: boolean; warning?: boolean } & HTMLProps<HTMLDivElement>) => {
	return (
		<div className={`${style.loader} ${props.className}`}>
			<Icons
				iconName='logo'
				className={`${style.loader__icon} ${error ? style['loader__icon--error'] : ''} ${warning ? style['loader__icon--warning'] : ''}`}
			/>
			<div
				className={`${style.loader__sniper} ${error ? style['loader__sniper--error'] : ''} ${warning ? style['loader__sniper--warning'] : ''}`}
			/>
		</div>
	);
};
export default Loader;
