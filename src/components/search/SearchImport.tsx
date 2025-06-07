import { Button } from '../button/Button';
import styles from './styles.module.scss';
import type { SearchInputProps } from './types';

const SearchImport: React.FC<SearchInputProps> = ({ onChange }) => {
	return (
		<>
			<div
				className={`${styles.search__inputContainer} ${styles['search__inputContainer--borderBottom']}`}
				title='Buscar'
			>
				<input
					placeholder='Buscar...'
					type='search'
					className={styles.search__input}
					onChange={e => onChange?.(e.target.value)}
					form={'search'}
				/>
				<Button
					title='Buscar'
					className={styles.search__btn}
					icon={{
						iconName: 'search',
						className: styles.search__icon,
					}}
				/>
			</div>
		</>
	);
};

export default SearchImport;
