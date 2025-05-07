import { addCategorySchema } from "@/@schemas/category";
import { useFormMutation } from "@/hooks/use-form-mutation"
import { addCategory } from "@/api/admin/categories/add-category"; 
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/services/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export function useAddCategory() {
    const navigate = useNavigate();

    const form = useFormMutation({
        schema: addCategorySchema,
        defaultValues: {
            code: 0,
            name: "",
            updatedAt: "",
            createdAt: "",
            subCategories:[{
                name:"",
                code:0,
                updatedAt:"",
                createdAt:"",
                subSubCategories:[
                    {
                     name:"",
                     code:0,
                     updatedAt:"",
                     createdAt:"",
                    }
                ]
            }]
        },
        onSubmit: (data) => {
            addCategoryFn({
                ...data,
                updatedAt: data.updatedAt.replace(".000Z", ""),
                createdAt: data.createdAt.replace(".000Z", ""),
            });
        },
    });

    const { mutate: addCategoryFn, isPending: isAddingCategory } =
        useMutation({
            mutationKey: ["add-category"],
            mutationFn: addCategory,
            onSuccess: (response) => {
                if (response.success) {
                    queryClient.invalidateQueries({
                        queryKey: ["categories"],
                    });
                    navigate("/admin/categorias");
                    return;
                }

                response.errors.forEach((error) => {
                    toast.error(error);
                });
            },
        });

    return {
        form,
        isAddingCategory,
    };
}
