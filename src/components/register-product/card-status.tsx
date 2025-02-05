import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CardWithFormStatus() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Status do Produto</CardTitle>
        <CardDescription>O produto ficará oculto no canal de vendas</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Status do Produto" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Rascunho</SelectItem>
                  <SelectItem value="sveltekit">Ativo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
