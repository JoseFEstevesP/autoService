import { useCallback, useEffect, useRef, useState } from 'react';
import { useController, type FieldValues } from 'react-hook-form';
import type { ValueAll } from '../../types';
import { Button } from '../button/Button';
import { Icons } from '../icon/Icons';
import { renderErrorMessage } from '../input/renderErrorMessage';
import SearchImport from '../search/SearchImport';
import style from './styles.module.scss';
import type { SelectProps } from './types';

export const SelectSingle = <T extends FieldValues>({
	name,
	control,
	label,
	placeholder,
	options,
	error,
	className,
	defaultValue,
	disabled = false,
	enableSearch = false,
	iconName,
}: SelectProps<T>) => {
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
			onChange(option.value);
			setIsOpen(false);
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
						iconName: 'arrowMin',
						className: `${style.select__iconAnimated} ${isOpen ? style['select__iconAnimated--active'] : ''}`,
					}}
				>
					<div className={`${style.select__contentValue}`}>
						{value ? (
							<div
								className={`${style.select__value} ${!iconName ? style['select__value--ofIcon'] : ''}`}
							>
								{options.find(opt => opt.value === value)?.label}
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
								aria-selected={value === option.value}
							>
								<span>{option.label}</span>
								<Icons
									iconName={
										value === option.value ? 'checkBoxOn' : 'checkBoxOff'
									}
									className={`${style.select__iconOption}`}
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
