import { useId } from "react"

import { Input } from "@/components/ui/input"

export default function PhoneInput({...field}) {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <div className="flex rounded-md shadow-xs">
        <span className="border-input bg-background text-muted-foreground -z-10 inline-flex items-center rounded-s-md border px-3 text-sm">
          +880
        </span>
        <Input
          id={id}
          className="-ms-px rounded-s-none shadow-none"
          placeholder="1177718348"
          type="text"
          {...field}
        />
      </div>
    </div>
  )
}
