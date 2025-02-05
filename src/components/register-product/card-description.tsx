import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { TextareaWithTextDescription } from "./textarea-description"
import { Input } from "../ui/input"
import { BrandsSelect } from "./brands-select"

export function CardWithFormDescription() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Detalhes do Produto</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-6">
            <TextareaWithTextDescription/>
            <div className="flex flex-col space-y-1.5">
              <div className="flex gap-4">
                <div className="flex flex-col w-1/2 gap-2">
                  <Label htmlFor="especificacoes">Especificações Detalhadas</Label>
                  <Input placeholder="Digite aqui as especificações do produto"/>
                </div>

                <div className="flex w-1/2 gap-2">
                  <div className="flex flex-col w-1/2 gap-2">
                    <Label htmlFor="preco">Preço Unitário</Label>
                    <Input type="number" placeholder="Digite aqui as especificações do produto"/>
                  </div>
                  <div className="flex flex-col w-1/2 gap-2">
                    <Label htmlFor="qtd_min">Quantidade Mínima de Vendas</Label>
                    <Input type="number" placeholder="Digite aqui as especificações do produto"/>
                  </div>
                </div>
              </div>

              <div className="w-1/2">
                <Label htmlFor="qtd_min">Marcas/Modelos disponíveis</Label>
                <BrandsSelect/>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancelar</Button>
        <Button>Cadastrar</Button>
      </CardFooter>
    </Card>
  )
}
