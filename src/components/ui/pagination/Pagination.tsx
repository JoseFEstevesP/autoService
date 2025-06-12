import { Button } from '../button/Button';
import style from './styles.module.scss';
import type { PaginationProps } from './types';

const Pagination = ({ pages, currentPage, handleData }: PaginationProps) => {
	const getPageNumbers = () => {
		const pageNumbers: number[] = [];
		const maxButtons = 5;
		let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
		let endPage = startPage + maxButtons - 1;

		if (endPage > pages) {
			endPage = pages;
			startPage = Math.max(1, endPage - maxButtons + 1);
		}

		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(i);
		}
		return pageNumbers;
	};

	const handlePageClick = (pageNumber: number) => {
		if (pageNumber !== currentPage) {
			handleData(pageNumber);
		}
	};

	return (
		<nav className={style.pagination} aria-label='Pagination'>
			<Button
				title='Paginación anterior'
				className={`${style.pagination__button} ${currentPage === 1 ? style['pagination__button--disabled'] : ''}`}
				onClick={() => handlePageClick(currentPage - 1)}
				disabled={currentPage === 1}
				icon={{
					iconName: 'arrowMin',
					className: style.pagination__icon,
				}}
			/>

			{getPageNumbers().map(number => (
				<Button
					title={`Ir a la página ${number}`}
					key={number}
					className={`${style.pagination__button} ${
						number === currentPage ? style['pagination__button--active'] : ''
					}`}
					onClick={() => handlePageClick(number)}
				>
					{number}
				</Button>
			))}

			<Button
				title='Paginación siguiente'
				className={`${style.pagination__button} ${
					currentPage === pages ? style['pagination__button--disabled'] : ''
				}`}
				onClick={() => handlePageClick(currentPage + 1)}
				disabled={currentPage === pages}
				icon={{
					iconName: 'arrowMin',
					className: `${style.pagination__icon} ${style['pagination__icon--right']}`,
				}}
			/>
		</nav>
	);
};

export default Pagination;
