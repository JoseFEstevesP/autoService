import { z } from 'zod';
import msg from '../msg';

export const NewsletterEmailSchema = z.object({
	email: z
		.string({
			required_error: msg.from.email.error.required,
		})
		.email({
			message: msg.from.email.error.email,
		}),
});

export type NewsletterEmailSchemaType = z.infer<typeof NewsletterEmailSchema>;
