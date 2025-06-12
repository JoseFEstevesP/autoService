import type { ValueAll } from '@/types/types';

export interface FiltersProps {
	onFilter: (filters: FilterType) => void;
	initialValues?: Partial<FilterType>;
	resetFilter: (resetInputs: () => void) => void;
	data: {
		sortOrder: ValueAll[];
		sortBy: ValueAll[];
		categories: ValueAll[];
		tags: ValueAll[];
	};
	disabled?: boolean;
}
