import { msg } from '@/pages/user/msg';
import { z } from 'zod';

export const NewPasswordDTOSchema = z.object({
	code: z.string(),
	newPassword: z
		.string()
		.min(8, msg.password.minLength)
		.max(20, msg.password.maxLength)
		.regex(/[A-Z]/, msg.password.uppercase)
		.regex(/[a-z]/, msg.password.lowercase)
		.regex(/\d/, msg.password.number)
		.regex(/[!@#$%^&*()-_,.?":{}|<>]/, msg.password.symbol),
});

export type NewPasswordDTOSchemaType = z.infer<typeof NewPasswordDTOSchema>;
