import { useState } from "react"
import Navbar from "./components/Navbar"
import Inicio from "./pages/Inicio"
import Login from "./pages/Login"
import Registro from "./pages/Registro"
import Detalle from "./pages/Detalle"
import Carrito from "./components/Carrito"
import Confirmacion from "./pages/Confirmacion"
import Exito from "./pages/Exito"
import Footer from "./components/Footer"

function App() {
  const [pagina, setPagina] = useState("inicio")
  const [filtro, setFiltro] = useState("todos")
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)
  const [carrito, setCarrito] = useState([])
  const [carritoAbierto, setCarritoAbierto] = useState(false)
  const [usuario, setUsuario] = useState(null)

  const verDetalle = (producto) => {
    setProductoSeleccionado(producto)
    setPagina("detalle")
  }

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id)
      if (existe) {
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      }
      return [...prev, { ...producto, cantidad: 1 }]
    })
  }

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(item => item.id !== id))
  }

  const cerrarSesion = () => {
    setUsuario(null)
    setCarrito([])
    setPagina("inicio")
  }

  const limpiarCarrito = () => {
    setCarrito([])
  }

  const renderPagina = () => {
    if (pagina === "login") return <Login navegarA={setPagina} setUsuario={setUsuario} />
    if (pagina === "registro") return <Registro navegarA={setPagina} setUsuario={setUsuario} />
    if (pagina === "detalle") return <Detalle producto={productoSeleccionado} navegarA={setPagina} agregarAlCarrito={agregarAlCarrito} />
    if (pagina === "confirmacion") return <Confirmacion navegarA={setPagina} usuario={usuario} carrito={carrito} limpiarCarrito={limpiarCarrito} />
    if (pagina === "exito") return <Exito navegarA={setPagina} usuario={usuario} />
    return <Inicio filtro={filtro} verDetalle={verDetalle} />
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar
        filtro={filtro}
        setFiltro={setFiltro}
        pagina={pagina}
        navegarA={setPagina}
        cantidadCarrito={carrito.reduce((acc, item) => acc + item.cantidad, 0)}
        abrirCarrito={() => setCarritoAbierto(true)}
        usuario={usuario}
        cerrarSesion={cerrarSesion}
      />
      <div style={{ flex: 1 }}>
        {renderPagina()}
      </div>
      {carritoAbierto && (
        <Carrito
          carrito={carrito}
          cerrarCarrito={() => setCarritoAbierto(false)}
          eliminarDelCarrito={eliminarDelCarrito}
          usuario={usuario}
          navegarA={(p) => { setCarritoAbierto(false); setPagina(p) }}
        />
      )}
      <Footer />
    </div>
  )
}

export default App