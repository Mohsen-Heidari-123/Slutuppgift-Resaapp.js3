import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "@/components/Layout"
import HomePage from "@/Pages/HomePage"
import CountryPage from "@/Pages/CountryPage"
import NotFoundPage from "@/Pages/NotFoundPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:code" element={<CountryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App