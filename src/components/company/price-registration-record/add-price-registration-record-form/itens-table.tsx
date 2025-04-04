import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '@/components/ui/table';

  

  interface Product {
    productID: string;
    unit: string;
    quantityAvailable: number;
    currency: string;
    unitPriceSourceCurrency: number;
    totalValueCurrency: number;
    conversionRate: number;
   
    unitPriceBrl?: number;
    totalValueBrl?: number;
    conversionRateDate?: Date | string;
    minimumQtyForMembership?: number;
    maximumQtyForMembership?: number;
  }
  
  interface ItensTableProps {
    items: Product[];
    onDelete?: (index: number) => void;
    onEdit?: (item: Product, index: number) => void;
  }
  
  export const ItensTable = ({ items }: ItensTableProps) => {
  
    const formatCurrency = (value: number, currency: string) => {
      const currencySymbol = {
        'USD': '$',
        'EUR': '€',
        'BRL': 'R$'
      }[currency] || '';
      
      return `${currencySymbol} ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };
  
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Unidade</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Moeda</TableHead>
              <TableHead>Valor unitário</TableHead>
              <TableHead>Valor total</TableHead>
              <TableHead>Taxa de conversão</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  Nenhum item adicionado
                </TableCell>
              </TableRow>
            ) : (
              items.map((item, index) => (
                <TableRow key={`${item.productID}-${index}`}>
                  <TableCell>{item.productID}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell>{item.quantityAvailable}</TableCell>
                  <TableCell>{item.currency}</TableCell>
                  <TableCell>{formatCurrency(item.unitPriceSourceCurrency, item.currency)}</TableCell>
                  <TableCell>{formatCurrency(item.totalValueCurrency, item.currency)}</TableCell>
                  <TableCell>{item.conversionRate.toFixed(4)}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    );
  };