import type { HTMLProps } from 'react';
import { Icons } from '../icon/Icons';
import style from './styles.module.scss';

const Loader = ({
	error,
	...props
}: { error?: boolean } & HTMLProps<HTMLDivElement>) => {
	return (
		<div className={`${style.loader} ${props.className}`}>
			<Icons iconName='logo' className={style.loader__icon} />
			<div
				className={`${style.loader__sniper} ${error ? style['loader__sniper--error'] : ''}`}
			/>
		</div>
	);
};
export default Loader;
