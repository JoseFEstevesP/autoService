import React, { useState } from 'react';
import { Icons } from '../icon/Icons';
import type { InputProps } from '../input/types';
import { renderErrorMessage } from './renderErrorMessage';
import styles from './styles.module.scss';

export const InputFile = ({
	name,
	placeholder,
	error,
	className,
	type = 'file',
	register,
	label,
	disabled = false,
	iconName,
}: InputProps) => {
	const [fileName, setFileName] = useState<string | null>(null);
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setFileName(file.name);

			if (file.type.startsWith('image/')) {
				const url = URL.createObjectURL(file);
				setPreviewUrl(url);
			} else {
				setPreviewUrl('/img/default.png');
			}
		} else {
			setFileName(null);
			setPreviewUrl(null);
		}
	};

	return (
		<div className={`${styles.inputFile} ${className ? className : ''} `}>
			{label && (
				<label htmlFor={name} className={styles.inputFile__label}>
					{label}
				</label>
			)}
			<div
				className={`${styles.inputFile__container} ${
					error ? styles.inputFile__error : ''
				} ${disabled ? styles['inputFile__container--disabled'] : ''}`}
			>
				{iconName && (
					<div className={styles.inputFile__contentIcon}>
						<Icons
							iconName={iconName}
							className={`${styles.inputFile__icon} ${
								error ? styles['inputFile__icon--error'] : ''
							}`}
						/>
					</div>
				)}
				<div className={styles.inputFile__styleFile}>
					<input
						id={name}
						type={type}
						{...register(name)}
						className={styles.inputFile__input}
						disabled={disabled}
						aria-invalid={error ? 'true' : 'false'}
						aria-describedby={`${name}-error`}
						list={`${name}-list`}
						onChange={handleFileChange}
					/>
					{fileName && (
						<div className={styles.inputFile__preview}>
							{previewUrl ? (
								<img
									src={previewUrl}
									alt='Vista previa'
									className={styles.inputFile__previewImage}
								/>
							) : (
								<img
									src='/img/default.png'
									alt='Archivo por defecto'
									className={styles.inputFile__previewImage}
								/>
							)}
						</div>
					)}
					<div className={styles['inputFile__styleFile-title']}>
						<span>{fileName || placeholder}</span>
						<Icons
							iconName='add'
							className={styles['inputFile__styleFile-icon']}
						/>
					</div>
				</div>
				{disabled && (
					<Icons
						iconName='padlock'
						className={styles.inputFile__iconDisabled}
					/>
				)}
			</div>
			{error && (
				<span className={styles.inputFile__containerError}>
					{renderErrorMessage(error?.message)}
				</span>
			)}
		</div>
	);
};
