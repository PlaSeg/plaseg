import { z } from "zod";

export const addCategorySchema = z.object({
    name: z.string().min(1, "O Nome é obrigatório"),
    code: z.number().min(1, "O Código é obrigatório"),
    updatedAt: z.string().min(1, "A Data de Atualização obrigatória"),
    createdAt: z.string().min(1, "A Data de Criação é obrigatória"),
    subCategories: z.array(
        z.object({
          name: z.string().min(1, "O Nome é obrigatório"),
          code: z.number().min(1, "O Código deve ser maior que 0"),
          updatedAt: z.string().min(1, "A Data de Atualização obrigatória"),
          createdAt: z.string().min(1, "A Data de Criação é obrigatória"),
          subSubCategories: z.array(
              z.object({
              name: z.string().min(1, "O Nome é obrigatório"),
              code: z.number().min(1, "O Código deve ser maior que 0"),
              updatedAt: z.string().min(1, "A Data de Atualização obrigatória"),
              createdAt: z.string().min(1, "A Data de Criação é obrigatória"),
            })
          )
        })
      )
    
});

export type AddCategoryRequestBody = z.infer<typeof addCategorySchema>;
