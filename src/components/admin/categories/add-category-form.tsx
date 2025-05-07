import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/form/form-input";
import { FormDatePicker } from "@/components/form/form-date-picker";
import { useAddCategory } from "@/hooks/admin/categories/use-add-category";
import { LoaderCircle, Plus, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AddCategoryForm() {
  const { form, isAddingCategory } = useAddCategory();

  const subcategories = form.watch("subCategories") || [];

  const addSubcategory = () => {
    form.setValue("subCategories", [
      ...subcategories,
      { 
        name: "", 
        code: 0,
        updatedAt:"",
        createdAt:"",
        subSubCategories: [] 
      },
    ]);
  };

  const removeSubcategory = (index: number) => {
    const updated = [...subcategories];
    updated.splice(index, 1);
    form.setValue("subCategories", updated);
  };

  const addSubsubcategory = (subcategoryIndex: number) => {
    const updated = [...subcategories];
    updated[subcategoryIndex].subSubCategories = [
      ...(updated[subcategoryIndex].subSubCategories || []),
      { name: "", code: 0 ,updatedAt:"",createdAt:""}
    ];
    form.setValue("subCategories", updated);
  };

  const removeSubsubcategory = (subcategoryIndex: number, subsubcategoryIndex: number) => {
    const updated = [...subcategories];
    updated[subcategoryIndex].subSubCategories.splice(subsubcategoryIndex, 1);
    form.setValue("subCategories", updated);
  };

  return (
    
        <Form {...form}>
          <form onSubmit={form.handleSubmitForm} className="space-y-6">
            <DialogHeader>
              <DialogTitle>Nova Categoria</DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-3 gap-6">
              <FormInput
                form={form}
                entity="name"
                label="Nome"
                placeholder="Digite o nome da categoria"
              />

              <FormInput
                form={form}
                entity="code"
                label="Código"
                placeholder="Digite o código da categoria"
              />

              <FormDatePicker
                form={form}
                entity="createdAt"
                label="Data de Criação"
              />

              <FormDatePicker
                form={form}
                entity="updatedAt"
                label="Data de Atualização"
              />
            </div>

            {/* Subcategories Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Subcategorias</h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addSubcategory}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Subcategoria
                </Button>
              </div>

              {subcategories.map((subcategory, subcategoryIndex) => (
                <div key={subcategoryIndex} className="space-y-4 p-4 border rounded-lg">
                  <div className="grid grid-cols-3 gap-4 items-end">
                    <FormInput
                      form={form}
                      entity={`subCategories.${subcategoryIndex}.name`}
                      label="Nome da Subcategoria"
                      placeholder="Nome da subcategoria"
                    />
                    <FormInput
                      form={form}
                      entity={`subCategories.${subcategoryIndex}.code`}
                      label="Código da Subcategoria"
                      placeholder="Código da subcategoria"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeSubcategory(subcategoryIndex)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Subsubcategories Section */}
                  <div className="pl-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">Subsubcategorias</h4>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => addSubsubcategory(subcategoryIndex)}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Adicionar Subsubcategoria
                      </Button>
                    </div>

                    {(subcategory.subSubCategories || []).map((_, subsubcategoryIndex) => (
                      <div key={subsubcategoryIndex} className="grid grid-cols-3 gap-4 items-end">
                        <FormInput
                          form={form}
                          entity={`subCategories.${subcategoryIndex}.subSubCategories.${subsubcategoryIndex}.name`}
                          label="Nome"
                          placeholder="Nome da subsubcategoria"
                        />
                        <FormInput
                          form={form}
                          entity={`subCategories.${subcategoryIndex}.subSubCategories.${subsubcategoryIndex}.code`}
                          label="Código"
                          placeholder="Código da subsubcategoria"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeSubsubcategory(subcategoryIndex, subsubcategoryIndex)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button type="button" variant="outline">
                Cancelar
              </Button>
              <Button type="submit" disabled={isAddingCategory}>
                {isAddingCategory && (
                  <LoaderCircle className="mr-2 animate-spin" />
                )}
                {!isAddingCategory && "Salvar"}
              </Button>
            </div>
          </form>
        </Form>
  );
}