import { Outlet } from "react-router-dom"
import Navbar from "@/components/Navbar"

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl p-4">
        <Outlet />
      </main>
    </>
  )
}