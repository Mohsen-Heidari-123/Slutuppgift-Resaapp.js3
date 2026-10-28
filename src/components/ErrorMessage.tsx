import { Button } from "@/components/ui/button"

type Props = {
  message: string
  onRetry: () => void
}

export default function ErrorMessage({ message, onRetry }: Props) {
  return (
    <div role="alert" className="grid justify-items-start gap-2 rounded-lg border border-red-300 p-4">
      <p>{message}</p>
      <Button type="button" variant="outline" onClick={onRetry}>
        Försök igen
      </Button>
    </div>
  )
}