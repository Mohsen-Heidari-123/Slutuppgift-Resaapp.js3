import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-5xl items-center p-4">
        <Link to="/" className="text-lg font-bold">
         ✈️ Reseappen
        </Link>
      </nav>
    </header>
  )
}