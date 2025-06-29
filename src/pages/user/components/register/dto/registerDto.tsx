import { msg } from '@/pages/user/msg';
import { z } from 'zod';

export const RegisterDTOSchema = z.object({
	username: z
		.string()
		.min(3, msg.username.minLength)
		.max(20, msg.username.maxLength)
		.regex(/^[a-zA-Z0-9_]+$/, msg.username.invalid),

	name: z.string().min(1, msg.name.minLength).max(50, msg.name.maxLength),

	dni: z
		.string()
		.min(8, msg.dni.minLength)
		.max(12, msg.dni.maxLength)
		.regex(/^\d+$/, msg.dni.invalid),

	phone: z
		.string()
		.min(10, msg.phone.minLength)
		.max(15, msg.phone.maxLength)
		.regex(/^\d+$/, msg.phone.invalid),

	email: z.string().email(msg.email.invalid),

	password: z
		.string()
		.min(8, msg.password.minLength)
		.max(20, msg.password.maxLength)
		.regex(/[A-Z]/, msg.password.uppercase)
		.regex(/[a-z]/, msg.password.lowercase)
		.regex(/\d/, msg.password.number)
		.regex(/[!@#$%^&*()-_,.?":{}|<>]/, msg.password.symbol),
});

export type RegisterDTOSchemaType = z.infer<typeof RegisterDTOSchema>;
