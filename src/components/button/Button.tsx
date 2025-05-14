import { Icons } from '../icon/Icons';
import type { BtnProps } from './interface';
import styles from './styles.module.scss';

export const Button = ({ icon, title, text, children, ...props }: BtnProps) => {
	const { type = 'button', className, disabled } = props;

	return (
		<button
			{...props}
			title={title}
			type={type}
			className={`${styles.button} ${
				disabled ? styles['button--disabled'] : ''
			} ${className}`}
			disabled={disabled}
			aria-disabled={disabled}
			aria-label={title}
			aria-hidden={disabled}
			{...(disabled && { tabIndex: -1 })}
		>
			{text || children}
			{icon?.iconName && (
				<Icons
					{...icon}
					className={`${icon?.className ? icon.className : ''} ${
						styles.button__icon
					}`}
				/>
			)}
			{disabled && (
				<Icons
					{...icon}
					iconName='padlock'
					className={styles.button__iconDisabled}
				/>
			)}
		</button>
	);
};

Button.styles = styles;
