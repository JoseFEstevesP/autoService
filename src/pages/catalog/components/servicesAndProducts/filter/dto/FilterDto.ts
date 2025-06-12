import { z } from 'zod';
import { Order } from '../../../../../../data';

export const FilterSchema = z.object({
	search: z.string().optional(),
	category: z.string().optional(),
	minPrice: z.coerce.number().min(0).optional(),
	maxPrice: z.coerce.number().min(0).optional(),
	sortOrder: z.nativeEnum(Order).default(Order.Asc).optional(),
	sortBy: z.string().optional(),
	tags: z.string().optional(),
	page: z.coerce.number().min(1).optional(),
	pageSize: z.coerce.number().min(1).optional(),
});

export type FilterType = z.infer<typeof FilterSchema>;
