import { Separator } from "@/components/ui/separator"
import { MessageCircle, Star, ThumbsUp } from "lucide-react"

export function SeparatorTitle() {
  return (
    <div>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">
        18 de Fervereiro de 2025 · 3 min de leitura
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <ThumbsUp color="#6b7280"/>
        <Separator orientation="vertical" />
        <MessageCircle color="#6b7280"/>
        <Separator orientation="vertical" />
        <Star color="#6b7280"/>
      </div>
      <Separator className="my-4"/>
    </div>
  )
}
