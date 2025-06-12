import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../../../../components/button/Button';
import useRenderInputs from '../../../../../hooks/useRenderInputs/useRenderInputs';
import { FilterSchema, type FilterType } from './dto/FilterDto';
import styles from './styles.module.scss';
import type { FiltersProps } from './types';

const Filters = ({
	onFilter,
	initialValues,
	resetFilter,
	data,
	disabled,
}: FiltersProps) => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FilterType>({
		resolver: zodResolver(FilterSchema),
		defaultValues: initialValues,
	});

	const { renderInput, renderSelect } = useRenderInputs<FilterType>({
		register,
		errors,
		control,
	});

	const handleResetFilter = useCallback(() => {
		resetFilter(reset);
	}, [reset, resetFilter]);

	return (
		<form
			onSubmit={handleSubmit(onFilter)}
			className={styles.filters}
			aria-disabled={disabled}
		>
			<div className={styles.filters__grid}>
				{renderInput({
					name: 'search',
					placeholder: 'Buscar servicios...',
					iconName: 'search',
					className: styles.filters__search,
					disabled: disabled,
				})}
				<div className={styles.filters__field}>
					{renderSelect({
						name: 'category',
						placeholder: 'Todas las categorías',
						options: [
							{ value: '', label: 'Todas las categorías' },
							...data.categories.map(cat => ({
								value: cat.value,
								label: cat.label,
							})),
						],
						className: styles.filters__select,
						disabled: disabled,
					})}

					{renderSelect({
						name: 'tags',
						placeholder: 'Todas las etiquetas',
						options: [
							{ value: '', label: 'Todas las etiquetas' },
							...(data.tags || []).map(tag => ({
								value: tag.value,
								label: tag.label,
							})),
						],
						className: styles.filters__select,
						disabled: disabled,
					})}
				</div>

				<div className={styles.filters__contentField}>
					<label className={styles.filters__label}>Rango de precio</label>
					<div className={styles.filters__field}>
						{renderInput({
							name: 'minPrice',
							placeholder: 'Mínimo',
							type: 'number',
							className: styles.filters__priceInput,
							disabled: disabled,
						})}
						{renderInput({
							name: 'maxPrice',
							placeholder: 'Máximo',
							type: 'number',
							className: styles.filters__priceInput,
							disabled: disabled,
						})}
					</div>
				</div>

				<div className={styles.filters__contentField}>
					<label className={styles.filters__label}>Ordenar por</label>
					<div className={styles.filters__field}>
						{renderSelect({
							name: 'sortBy',
							placeholder: 'Seleccione campo',
							options: data.sortBy,
							className: styles.filters__sortSelect,
							disabled: disabled,
						})}
						{renderSelect({
							name: 'sortOrder',
							placeholder: 'Orden',
							options: data.sortOrder,
							className: styles.filters__sortSelect,
							disabled: disabled,
						})}
					</div>
				</div>
			</div>

			<div className={styles.filters__actions}>
				<Button
					onClick={handleResetFilter}
					icon={{
						iconName: 'refresh',
					}}
					text='Limpiar'
					className={styles.filters__button}
					disabled={disabled}
				/>

				<Button
					type='submit'
					text='Aplicar filtros'
					icon={{ iconName: 'filter' }}
					className={styles.filters__button}
					disabled={disabled}
				/>
			</div>
		</form>
	);
};

export default Filters;
