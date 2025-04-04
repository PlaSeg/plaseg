import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from '@/components/ui/dialog';
  import {Form,} from '@/components/ui/form';

  import { Button } from '@/components/ui/button';
  import { usePriceAgreement } from "@/hooks/use-price-agreement";
  import { FormInput } from "@/components/form/form-input";
  import { FormDatePicker } from "@/components/form/form-date-picker";
  import { FormMultiSelect } from "@/components/form/form-multi-select-input";
import { currencies } from '@/mocks/company/currencies';
  
  interface AddItemDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }
  
  export const AddItemDialog = ({
    open,
    onOpenChange
  }: AddItemDialogProps) => {
    const { form } = usePriceAgreement();
    

    const onSubmit = () => { 
      form.reset();
      onOpenChange(false);
    };
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Adicionar item</DialogTitle>
            <DialogDescription>
              Preencha os dados do item a ser adicionado.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <FormInput
                        form={form}
                        entity="products.0.productID"
                        label="Código do produto"
                        placeholder="Digite o código do produto"
                        type="text"
                />

                <FormInput
                    form={form}
                    entity="products.0.unit"
                    label="Unidade"
                    placeholder="Digite a unidade"
                    type="text"
                />

                <FormInput
                    form={form}
                    entity="products.0.quantityAvailable"
                    label="Quantidade disponível"
                    placeholder="Digite a quantidade disponível"
                    type="text"
                />
                
                <FormMultiSelect
                    form={form}
                    entity="products.0.currency"
                    label="Moeda"
                    placeholder="Selecione a moeda"
                    options={currencies}
                    maxCount={2}
                />

                <FormInput
                    form={form}
                    entity="products.0.unitPriceSourceCurrency"
                    label="Valor unitário na moeda"
                    placeholder="Ex: 500.00"
                    type="number"
                />

                <FormInput
                    form={form}
                    entity="products.0.totalValueCurrency"
                    label="Valor total na moeda"
                    placeholder="Ex: 5000.00"
                    type="number"
                />

                <FormInput
                    form={form}
                    entity="products.0.unitPriceBrl"
                    label="Valor unitário em real"
                    placeholder="Ex: 1000.00"
                    type="number"
                />

                <FormInput
                    form={form}
                    entity="products.0.totalValueBrl"
                    label="Valor total em real"
                    placeholder="Ex: 10000.00"
                    type="number"
                />

                <FormInput
                    form={form}
                    entity="products.0.conversionRate"
                    label="Taxa de conversão"
                    placeholder="Digite a taxa de conversão"
                    type="number"
                />

                <FormDatePicker
					form={form}
					label="Data da taxa de conversão"
					placeholder=""
					entity="products.0.conversionRateDate"
				/>

                <FormInput
                    form={form}
                    entity="products.0.minimumQtyForMembership"
                    label="Quantidade mínima para adesão"
                    placeholder="0"
                    type="number"
                />

                <FormInput
                    form={form}
                    entity="products.0.maximumQtyForMembership"
                    label="Quantidade máxima para adesão"
                    placeholder="0"
                    type="number"
                />

                <FormInput
                    form={form}
                    entity="products.0.totalQuantity"
                    label="Quantidade total"
                    placeholder="Digite a quantidade total"
                    type="number"
                />


                
        
              
                
                
              
                
                
              
                
               
                
               
              </div>
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                  Cancelar
                </Button>
                <Button type="submit">Adicionar Item</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  };