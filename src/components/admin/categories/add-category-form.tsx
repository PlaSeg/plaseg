import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/form/form-input";
import { useAddCategory } from "@/hooks/admin/categories/use-add-category";
import { categoriesMock } from "@/mocks/admin/categories/categories"; 
import { LoaderCircle } from "lucide-react";
import {
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormSelect } from "@/components/form/form-select";
import { FormCheckbox } from "@/components/form/form-checkbox";


export function AddCategoryForm() {
 
  const categories =  categoriesMock.map(category => ({
    label: category.name,
    value: category.id
  }));

  
  const { form, isAddingCategory } = useAddCategory();
  const hasParentCategory = form.watch("hasParentCategory");

  return (
    <Form {...form}>
      <div className="shadow-none border-muted my-6 bg-white p-6 rounded-lg flex flex-col gap-6">
        <form onSubmit={form.handleSubmitForm} className="space-y-6">
          <DialogHeader>
            <DialogTitle>Nova Categoria</DialogTitle>
          </DialogHeader>

          <div className="space-y-8">
            <FormInput
              form={form}
              entity="name"
              label="Nome"
              placeholder="Digite o nome da categoria"
            />


            <FormCheckbox
              form={form}
              entity="hasParentCategory"
              label="Possui categoria pai?"
            />

            
             { hasParentCategory && (
              <FormSelect
                form={form}
                entity="parentCategory"
                label="Categoria Pai Associada"
                placeholder="Selecione a Categoria associada"
                options={categories}
              />
            )}

          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="submit" disabled={isAddingCategory}>
              {isAddingCategory && (
                <LoaderCircle className="mr-2 animate-spin" />
              )}
              {!isAddingCategory && "Adicionar categoria"}
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
}
