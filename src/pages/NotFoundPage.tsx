import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <div className="grid justify-items-start gap-4">
      <h1 className="text-2xl font-bold">Sidan hittades inte</h1>
      <p>Adressen du försökte öppna finns inte.</p>
      <Link to="/" className="underline">
        Till startsidan
      </Link>
    </div>
  )
}