export interface PaginationProps {
	pages: number;
	currentPage: number;
	handleData: (value: number) => void;
}
