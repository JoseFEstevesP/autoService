import { msg } from '@/pages/user/msg';
import { z } from 'zod';

export const RecoveryDTOSchema = z.object({
	email: z.string().email(msg.email.invalid),
});

export type RecoveryDTOSchemaType = z.infer<typeof RecoveryDTOSchema>;
