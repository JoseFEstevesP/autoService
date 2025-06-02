import { Button } from '../button/Button';
import style from './styles.module.scss';
import type { ModalProps } from './types';

const Modal = ({
	className = '',
	children,
	isOpen,
	handleClose,
}: ModalProps) => {
	return (
		<dialog className={`${className} ${style.modal}`} open={isOpen}>
			<section
				className={`${style.modal__content} ${
					isOpen ? style['modal__content--open'] : ''
				}`}
			>
				<Button
					className={style.modal__btn}
					icon={{
						iconName: 'close',
						className: `${style.modal__icon}`,
					}}
					onClick={handleClose}
				/>
				<div className={style.modal__children}>{children}</div>
			</section>
		</dialog>
	);
};
export default Modal;
