import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { QuienesSomos } from "../views/QuienesSomos"
import { NotFound } from "../views/NotFound"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }