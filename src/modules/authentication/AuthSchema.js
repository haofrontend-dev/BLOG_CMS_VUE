import * as z from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

export const LoginSchema = toTypedSchema(
    z.object({
        email: z.string().email('Vui lòng nhập đúng email'),
        password: z.string().min(8, 'Vui lòng nhập tổi thiểu 8 ký tự.')
    })
);
