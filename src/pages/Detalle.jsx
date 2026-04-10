import { useState } from "react"

function Detalle({ producto, navegarA, agregarAlCarrito }) {
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null)
  const [error, setError] = useState("")

  if (!producto) return null

  const handleAgregar = () => {
    if (!tallaSeleccionada) {
      setError("Por favor selecciona una talla antes de agregar al carrito")
      return
    }
    agregarAlCarrito({ ...producto, talla: tallaSeleccionada })
    navegarA("inicio")
  }

  return (
    <div style={styles.fondo}>
      <div style={styles.contenedor}>

        <button style={styles.btnVolver} onClick={() => navegarA("inicio")}>
          Volver a la tienda
        </button>

        <div style={styles.tarjeta}>
          <img src={producto.imagen} alt={producto.nombre} style={styles.imagen} />

          <div style={styles.info}>
            <span style={styles.categoria}>{producto.categoria.toUpperCase()}</span>
            <h2 style={styles.nombre}>{producto.nombre}</h2>
            <p style={styles.descripcion}>{producto.descripcion}</p>

            <div style={styles.separador} />

            <p style={styles.precioLabel}>Precio</p>
            <p style={styles.precio}>${producto.precio.toLocaleString("es-CO")}</p>

            <div style={styles.separador} />

            <p style={styles.tallaLabel}>Selecciona tu talla</p>
            <div style={styles.tallas}>
              {["XS", "S", "M", "L", "XL", "XXL"].map(talla => (
                <button
                  key={talla}
                  style={{
                    ...styles.btnTalla,
                    backgroundColor: tallaSeleccionada === talla ? "#1a1a2e" : "transparent",
                    color: tallaSeleccionada === talla ? "#e0c97f" : "#333",
                    borderColor: tallaSeleccionada === talla ? "#1a1a2e" : "#ccc",
                  }}
                  onClick={() => {
                    setTallaSeleccionada(talla)
                    setError("")
                  }}
                >
                  {talla}
                </button>
              ))}
            </div>

            {error && <span style={styles.error}>{error}</span>}

            <button style={styles.btnAgregar} onClick={handleAgregar}>
              Agregar al carrito
            </button>

            <button style={styles.btnVolver} onClick={() => navegarA("inicio")}>
              Volver a la tienda
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  fondo: {
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    padding: "40px",
  },
  contenedor: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  btnVolver: {
    backgroundColor: "transparent",
    border: "1px solid #1a1a2e",
    color: "#1a1a2e",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    marginBottom: "24px",
  },
  tarjeta: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    display: "flex",
    gap: "40px",
    overflow: "hidden",
  },
  imagen: {
    width: "380px",
    minHeight: "450px",
    objectFit: "cover",
    objectPosition: "top",
    flexShrink: 0,
  },
  info: {
    padding: "40px 40px 40px 0",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    flex: 1,
  },
  categoria: {
    fontSize: "11px",
    color: "#888",
    letterSpacing: "2px",
    fontWeight: "bold",
  },
  nombre: {
    color: "#1a1a2e",
    fontSize: "26px",
    margin: 0,
  },
  descripcion: {
    color: "#666",
    fontSize: "14px",
    lineHeight: "1.7",
    margin: 0,
  },
  separador: {
    height: "1px",
    backgroundColor: "#eee",
    margin: "4px 0",
  },
  precioLabel: {
    fontSize: "12px",
    color: "#888",
    margin: 0,
    letterSpacing: "1px",
  },
  precio: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#1a1a2e",
    margin: 0,
  },
  tallaLabel: {
    fontSize: "13px",
    color: "#444",
    fontWeight: "bold",
    margin: 0,
  },
  tallas: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  btnTalla: {
    border: "1px solid #ccc",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "bold",
    transition: "all 0.2s",
  },
  error: {
    fontSize: "12px",
    color: "#e74c3c",
  },
  btnAgregar: {
    backgroundColor: "#1a1a2e",
    color: "#e0c97f",
    border: "none",
    padding: "14px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "8px",
  },
}

export default Detalle