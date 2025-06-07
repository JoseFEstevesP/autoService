import { z } from 'zod';

export const SearchDTOSchema = z.object({
	search: z
		.string()
		.regex(/^[a-zA-Z0-9]*$/, { message: 'Caracteres inválidos.' }),
});

export type SearchDTOSchemaType = z.infer<typeof SearchDTOSchema>;
