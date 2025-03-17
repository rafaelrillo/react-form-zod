import { z } from 'zod'

export const schema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  email: z.string().email('Correo invalido.').min(1, 'El correo es obligatorio'),
  password: z.string().min(5, 'la contraseña tiene que tener un minimo de 6 caracteres'),
  confirmPassword: z.string().min(5, 'La confirmacion tiene que tener al menos 6 caracteres.')
}).refine(data => data.password === data.confirmPassword, {
  message: 'Las contraseñas no son iguales',
  path: ['confirmPassword']
})

export type FormValues = z.infer<typeof schema>;