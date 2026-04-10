import { productos } from "../data/productos"
import ProductoCard from "../components/ProductoCard"

function Inicio({ filtro, verDetalle }) {
  const productosFiltrados = filtro === "todos"
    ? productos
    : productos.filter(p => p.categoria === filtro)

  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <h2 style={styles.heroTitulo}>Colección Empresarial y Casual</h2>
        <p style={styles.heroSub}>Ropa de calidad fabricada para durar. Camisas, pantalones y jeans desde $69.900</p>
      </section>

      <section style={styles.seccion}>
        <h3 style={styles.seccionTitulo}>
          {filtro === "todos" ? "Todos los productos" : filtro.charAt(0).toUpperCase() + filtro.slice(1)}
          <span style={styles.conteo}> ({productosFiltrados.length})</span>
        </h3>
        <div style={styles.grid}>
          {productosFiltrados.map(producto => (
            <ProductoCard key={producto.id} producto={producto} verDetalle={verDetalle} />
          ))}
        </div>
      </section>
    </main>
  )
}

const styles = {
  main: {
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },
  hero: {
    backgroundColor: "#1a1a2e",
    padding: "60px 40px",
    textAlign: "center",
  },
  heroTitulo: {
    color: "#e0c97f",
    fontSize: "36px",
    margin: "0 0 12px 0",
    letterSpacing: "3px",
  },
  heroSub: {
    color: "#ccc",
    fontSize: "16px",
    margin: 0,
  },
  seccion: {
    padding: "40px",
  },
  seccionTitulo: {
    color: "#1a1a2e",
    fontSize: "20px",
    marginBottom: "24px",
  },
  conteo: {
    color: "#888",
    fontWeight: "normal",
    fontSize: "16px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "24px",
  }
}

export default Inicio