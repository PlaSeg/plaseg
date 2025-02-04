import { Checkbox } from "@/components/ui/checkbox"
 
interface TextProps {
    text: string;
}

export function CheckboxDemo(props: TextProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {props.text}
      </label>
    </div>
  )
}