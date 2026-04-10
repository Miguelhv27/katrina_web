function Carrito({ carrito, cerrarCarrito, eliminarDelCarrito, usuario, navegarA }) {
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

  const handleFinalizarCompra = () => {
    if (!usuario) {
      navegarA("login")
      return
    }
    navegarA("confirmacion")
  }

  return (
    <div style={styles.overlay} onClick={cerrarCarrito}>
      <div style={styles.panel} onClick={e => e.stopPropagation()}>

        <div style={styles.header}>
          <h2 style={styles.titulo}>Tu carrito</h2>
          <button style={styles.btnCerrar} onClick={cerrarCarrito}>X</button>
        </div>

        {carrito.length === 0 ? (
          <p style={styles.vacio}>No tienes productos en el carrito</p>
        ) : (
          <>
            <div style={styles.lista}>
              {carrito.map(item => (
                <div key={item.id} style={styles.item}>
                  <img src={item.imagen} alt={item.nombre} style={styles.imagen} />
                  <div style={styles.itemInfo}>
                    <p style={styles.itemNombre}>{item.nombre}</p>
                    <p style={styles.itemCategoria}>{item.categoria.toUpperCase()}</p>
                    <p style={styles.itemPrecio}>${item.precio.toLocaleString("es-CO")}</p>
                    {item.talla && <p style={styles.itemTalla}>Talla: {item.talla}</p>}
                    <p style={styles.itemCantidad}>Cantidad: {item.cantidad}</p>
                  </div>
                  <button style={styles.btnEliminar} onClick={() => eliminarDelCarrito(item.id)}>
                    Eliminar
                  </button>
                </div>
              ))}
            </div>

            <div style={styles.footer}>
              {!usuario && (
                <div style={styles.aviso}>
                  Debes iniciar sesion para finalizar tu compra
                </div>
              )}
              <div style={styles.totalFila}>
                <span style={styles.totalLabel}>Total</span>
                <span style={styles.totalValor}>${total.toLocaleString("es-CO")}</span>
              </div>
              <button style={styles.btnComprar} onClick={handleFinalizarCompra}>
                Finalizar compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1000,
  },
  panel: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "380px",
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    boxShadow: "-4px 0 20px rgba(0,0,0,0.15)",
  },
  header: {
    padding: "24px",
    borderBottom: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulo: {
    color: "#1a1a2e",
    fontSize: "20px",
    margin: 0,
  },
  btnCerrar: {
    backgroundColor: "transparent",
    border: "1px solid #ccc",
    color: "#666",
    width: "32px",
    height: "32px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  },
  vacio: {
    padding: "40px 24px",
    textAlign: "center",
    color: "#888",
    fontSize: "14px",
  },
  lista: {
    flex: 1,
    overflowY: "auto",
    padding: "16px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  item: {
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
    borderBottom: "1px solid #f0f0f0",
    paddingBottom: "16px",
  },
  imagen: {
    width: "70px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  itemInfo: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  itemNombre: {
    margin: 0,
    fontSize: "14px",
    fontWeight: "bold",
    color: "#1a1a2e",
  },
  itemCategoria: {
    margin: 0,
    fontSize: "11px",
    color: "#888",
    letterSpacing: "1px",
  },
  itemPrecio: {
    margin: 0,
    fontSize: "15px",
    fontWeight: "bold",
    color: "#1a1a2e",
  },
  itemCantidad: {
    margin: 0,
    fontSize: "12px",
    color: "#666",
  },
  btnEliminar: {
    backgroundColor: "transparent",
    border: "1px solid #e74c3c",
    color: "#e74c3c",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
  },
  aviso: {
    backgroundColor: "#fff8e1",
    border: "1px solid #f0c040",
    color: "#856404",
    padding: "10px 14px",
    borderRadius: "6px",
    fontSize: "13px",
    textAlign: "center",
  },
  footer: {
    padding: "24px",
    borderTop: "1px solid #eee",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  totalFila: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontSize: "16px",
    color: "#444",
    fontWeight: "bold",
  },
  totalValor: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#1a1a2e",
  },
  btnComprar: {
    backgroundColor: "#1a1a2e",
    color: "#e0c97f",
    border: "none",
    padding: "14px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  itemTalla: {
    margin: 0,
    fontSize: "12px",
    color: "#1a1a2e",
    fontWeight: "bold",
  }
}

export default Carrito