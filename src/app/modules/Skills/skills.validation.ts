import { z } from 'zod';
import { Category } from './skills.constant';

export const createSkillsValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    category: z.enum([...Category] as [string, ...string[]]),
    progress: z.number(),
    img: z.string().optional(),
  }),
});

export const skillsValidations = {
  createSkillsValidationSchema
};
