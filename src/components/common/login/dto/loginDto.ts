import { msg } from '@/pages/user/msg';
import { z } from 'zod';

export const LoginDTOSchema = z.object({
	identifier: z
		.string()
		.min(3, msg.identifier.minLength)
		.max(20, msg.identifier.maxLength)
		.regex(/^[a-zA-Z0-9_]+$/, msg.identifier.invalid),

	password: z
		.string()
		.min(8, msg.password.minLength)
		.max(20, msg.password.maxLength)
		.regex(/[A-Z]/, msg.password.uppercase)
		.regex(/[a-z]/, msg.password.lowercase)
		.regex(/\d/, msg.password.number)
		.regex(/[!@#$%^&*()-_,.?":{}|<>]/, msg.password.symbol),
});

export type LoginDTOSchemaType = z.infer<typeof LoginDTOSchema>;
