import { useCallback, useEffect, useRef, useState } from 'react';
import { type FieldValues, useController } from 'react-hook-form';
import { Button } from '../button/Button';
import { Icons } from '../icon/Icons';
import style from './styles.module.scss';
import type { SelectMultipleProps } from './types';
import SearchImport from '../search/SearchImport';
import { renderErrorMessage } from '../input/renderErrorMessage';
import type { ValueAll } from '@/types/types';

export const SelectMultiple = <T extends FieldValues>({
	name,
	control,
	label,
	placeholder,
	options,
	error,
	className,
	defaultValue = [],
	disabled = false,
	enableSearch = false,
	iconName,
}: SelectMultipleProps<T>) => {
	const [isOpen, setIsOpen] = useState(false);
	const [search, setSearch] = useState('');
	const dropdownRef = useRef<HTMLDivElement>(null);
	const {
		field: { value = defaultValue, onChange },
	} = useController({ name, control });

	const handleToggle = useCallback(() => {
		if (!disabled) setIsOpen(prev => !prev);
	}, [disabled]);

	const filteredOptions = options.filter(option =>
		option.label?.toLowerCase().includes(search.toLowerCase()),
	);

	const handleOptionClick = (option: ValueAll) => {
		if (!disabled) {
			const currentValue = Array.isArray(value) ? value : [];
			const newValue = currentValue.includes(option.value)
				? currentValue.filter(val => val !== option.value)
				: [...currentValue, option.value];
			onChange(newValue);
		}
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<section className={`${style.select} ${className}`} ref={dropdownRef}>
			{label && <h2 className={style.select__label}>{label}</h2>}
			<div
				className={`${style.select__container} ${error ? style['select__container--error'] : ''}`}
			>
				{iconName && (
					<div className={style.select__contentIcon}>
						<Icons
							iconName={iconName}
							className={`${style.select__icon} ${error ? style['select__icon--error'] : ''} ${disabled ? style['select__icon--disabled'] : ''}`}
						/>
					</div>
				)}
				<Button
					onClick={handleToggle}
					className={style.select__btn}
					aria-haspopup='listbox'
					aria-expanded={isOpen}
					aria-labelledby={name}
					disabled={disabled}
					icon={{
						iconName: 'arrow',
						className: `${style.select__iconAnimated} ${isOpen ? style['select__iconAnimated--active'] : ''}`,
					}}
				>
					<div className={`${style.select__contentValue}`}>
						{Array.isArray(value) && value.length > 0 ? (
							<div
								className={`${style.select__value} ${!iconName ? style['select__value--ofIcon'] : ''}`}
							>
								{value
									.map(val => options.find(opt => opt.value === val)?.label)
									.join(', ')}
							</div>
						) : (
							<div
								className={`${style.select__value} ${style['select__value--placeholder']} ${!iconName ? style['select__value--ofIcon'] : ''}`}
							>
								{placeholder}
							</div>
						)}
					</div>
				</Button>
			</div>
			<div
				role='listbox'
				className={`${style.select__contentData} ${isOpen ? style['select__contentData--active'] : ''}`}
			>
				{enableSearch && <SearchImport onChange={setSearch} />}

				<ul className={style.select__menu}>
					{filteredOptions.length > 0 ? (
						filteredOptions.map(option => (
							<li
								tabIndex={0}
								key={option.value}
								onClick={() => handleOptionClick(option)}
								onKeyDown={event =>
									event.key === 'Enter' && handleOptionClick(option)
								}
								className={style.select__li}
								role='option'
								aria-selected={
									Array.isArray(value) && value.includes(option.value)
								}
							>
								<span>{option.label}</span>
								<Icons
									iconName={
										Array.isArray(value) && value.includes(option.value)
											? 'checkBoxOn'
											: 'checkBoxOff'
									}
									className={`${style.select__iconOption} ${style['select__iconOption--multiple']}`}
								/>
							</li>
						))
					) : (
						<li className={style.select__li} aria-disabled='true'>
							<span>No se encontraron resultados</span>
						</li>
					)}
				</ul>
			</div>

			{error && (
				<span className={style.select__containerError}>
					{renderErrorMessage(error?.message)}
				</span>
			)}
		</section>
	);
};
