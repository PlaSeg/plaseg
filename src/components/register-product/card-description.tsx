import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TextareaWithTextDescription } from "./textarea-description"

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
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CardDescription>Dê uma descrição detalhada do seu produto</CardDescription>
      </CardFooter>
    </Card>
  )
}
