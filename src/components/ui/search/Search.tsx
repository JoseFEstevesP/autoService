import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../button/Button';
import { renderErrorMessage } from '../input/renderErrorMessage';
import { SearchDTOSchema, type SearchDTOSchemaType } from './dto/search.dto';
import styles from './styles.module.scss';
import type { SearchProps } from './types';

const Search = ({ handleData, classNames }: SearchProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<SearchDTOSchemaType>({
		resolver: zodResolver(SearchDTOSchema),
	});

	const submit = useCallback(
		(data: SearchDTOSchemaType) => {
			handleData({ search: data.search.trim() });
			reset();
		},
		[handleData, reset],
	);

	return (
		<form
			role='search'
			className={`${styles.search} ${classNames}`}
			onSubmit={handleSubmit(submit)}
		>
			<div className={`${styles.search__inputContainer} `} title='Buscar'>
				<input
					placeholder={'Buscar...'}
					type='search'
					{...register('search')}
					className={styles.search__input}
					aria-invalid={!!errors.search}
					aria-describedby={errors.search ? 'search-error' : undefined}
				/>
				<Button
					title={'Buscar'}
					type={'submit'}
					className={styles.search__btn}
					icon={{
						iconName: 'search',
						className: styles.search__icon,
					}}
				/>
			</div>
			{errors.search && (
				<span className={styles.search__containerError}>
					{errors.search && renderErrorMessage(errors.search.message || '')}
				</span>
			)}
		</form>
	);
};

export default Search;
