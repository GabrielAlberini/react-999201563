import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { QuienesSomos } from "../views/QuienesSomos"
import { NotFound } from "../views/NotFound"

// host -> anfitrion
// http://localhost
// port: 5173

// host: http://localhost:5173
// path: /

// host: http://localhost:5173
// path: /quienes-somos

// host: http://localhost:5173
// path: /asdasdasdasd

// host en la nube: https://mipagina.com/quienes-somos


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