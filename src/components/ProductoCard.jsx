function ProductoCard({ producto, verDetalle }) {
  return (
    <div style={styles.card}>
      <img src={producto.imagen} alt={producto.nombre} style={styles.imagen} />
      <div style={styles.info}>
        <span style={styles.categoria}>{producto.categoria.toUpperCase()}</span>
        <h3 style={styles.nombre}>{producto.nombre}</h3>
        <p style={styles.descripcion}>{producto.descripcion}</p>
        <div style={styles.footer}>
          <span style={styles.precio}>
            ${producto.precio.toLocaleString("es-CO")}
          </span>
          <button style={styles.btn} onClick={() => verDetalle(producto)}>
            Ver detalle
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s",
  },
  imagen: {
    width: "100%",
    height: "280px",
    objectFit: "cover",
    objectPosition: "top",
  },
  info: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  categoria: {
    fontSize: "11px",
    color: "#888",
    letterSpacing: "1.5px",
    fontWeight: "bold",
  },
  nombre: {
    margin: 0,
    fontSize: "16px",
    color: "#1a1a2e",
    fontWeight: "bold",
  },
  descripcion: {
    margin: 0,
    fontSize: "13px",
    color: "#666",
    lineHeight: "1.5",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "8px",
  },
  precio: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1a1a2e",
  },
  btn: {
    backgroundColor: "#1a1a2e",
    color: "#e0c97f",
    border: "none",
    padding: "8px 14px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "bold",
  }
}

export default ProductoCard