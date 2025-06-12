import { useCallback, useContext, useEffect } from 'react';
import { Button } from '../button/Button';
import style from './styles.module.scss';
import { ContextMsg } from '@/context/msg/MsgContext';

const classType = {
	default: style['msg--default'],
	error: style['msg--error'],
	warning: style['msg--warning'],
};

const Msg = () => {
	const { msg, setMsg } = useContext(ContextMsg);

	const handleClose = useCallback(() => {
		setMsg({ type: 'default', msg: '' });
	}, [setMsg]);

	useEffect(() => {
		if (msg.msg !== '') {
			const timer = setTimeout(() => {
				setMsg({ type: 'default', msg: '' });
			}, 5000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [msg, setMsg]);

	return (
		<div
			className={`${style.msg} ${classType[msg.type]} ${msg.msg !== '' ? style['msg--visible'] : ''}`}
		>
			<div className={style.msg__content}>
				{msg.msg}
				<Button
					title='Cerrar mensaje'
					onClick={handleClose}
					className={`${style.msg__btn} ${classType[msg.type]}`}
					icon={{
						iconName: 'close',
						className: style.msg__icon,
					}}
				/>
			</div>
		</div>
	);
};

export default Msg;
