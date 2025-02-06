import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function TextareaWithTextDescription() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Descrição Técnica do Produto</Label>
      <Textarea placeholder="Digite a descrição do produto aqui." id="message-2" />
    </div>
  )
}
