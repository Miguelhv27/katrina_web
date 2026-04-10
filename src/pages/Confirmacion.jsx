function Confirmacion({ usuario, carrito, navegarA, limpiarCarrito }) {
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

  const handleConfirmar = () => {
    limpiarCarrito()
    navegarA("exito")
  }

  return (
    <div style={styles.fondo}>
      <div style={styles.contenedor}>

        <button style={styles.btnVolver} onClick={() => navegarA("inicio")}>
          Volver a la tienda
        </button>

        <h2 style={styles.titulo}>Resumen de tu pedido</h2>
        <p style={styles.sub}>Hola {usuario?.nombre}, revisa tu pedido antes de confirmar</p>

        <div style={styles.caja}>
          <div style={styles.lista}>
            {carrito.map(item => (
              <div key={item.id} style={styles.item}>
                <img src={item.imagen} alt={item.nombre} style={styles.imagen} />
                <div style={styles.itemInfo}>
                  <p style={styles.itemNombre}>{item.nombre}</p>
                  <p style={styles.itemCategoria}>{item.categoria.toUpperCase()}</p>
                  {item.talla && <p style={styles.itemTalla}>Talla: {item.talla}</p>}
                  <p style={styles.itemCantidad}>Cantidad: {item.cantidad}</p>
                </div>
                <p style={styles.itemPrecio}>
                  ${(item.precio * item.cantidad).toLocaleString("es-CO")}
                </p>
              </div>
            ))}
          </div>

          <div style={styles.separador} />

          <div style={styles.totalFila}>
            <span style={styles.totalLabel}>Total a pagar</span>
            <span style={styles.totalValor}>${total.toLocaleString("es-CO")}</span>
          </div>

          <div style={styles.separador} />

          <p style={styles.seccionTitulo}>Datos de entrega</p>
          <div style={styles.datos}>
            <div style={styles.datoFila}>
              <span style={styles.datoLabel}>Nombre</span>
              <span style={styles.datoValor}>{usuario?.nombre}</span>
            </div>
            <div style={styles.datoFila}>
              <span style={styles.datoLabel}>Correo</span>
              <span style={styles.datoValor}>{usuario?.email}</span>
            </div>
          </div>

          <button style={styles.btnConfirmar} onClick={handleConfirmar}>
            Confirmar pedido
          </button>
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
    maxWidth: "700px",
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
  titulo: {
    color: "#1a1a2e",
    fontSize: "26px",
    margin: "0 0 8px 0",
  },
  sub: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "24px",
  },
  caja: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  lista: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  item: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    paddingBottom: "16px",
    borderBottom: "1px solid #f0f0f0",
  },
  imagen: {
    width: "64px",
    height: "72px",
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
    fontSize: "15px",
    fontWeight: "bold",
    color: "#1a1a2e",
  },
  itemCategoria: {
    margin: 0,
    fontSize: "11px",
    color: "#888",
    letterSpacing: "1px",
  },
  itemCantidad: {
    margin: 0,
    fontSize: "13px",
    color: "#666",
  },
  itemPrecio: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
    color: "#1a1a2e",
  },
  separador: {
    height: "1px",
    backgroundColor: "#eee",
  },
  totalFila: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#444",
  },
  totalValor: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1a1a2e",
  },
  seccionTitulo: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#444",
    margin: 0,
    letterSpacing: "1px",
  },
  datos: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  datoFila: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
  },
  datoLabel: {
    color: "#888",
  },
  datoValor: {
    color: "#1a1a2e",
    fontWeight: "bold",
  },
  btnConfirmar: {
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
  itemTalla: {
    margin: 0,
    fontSize: "12px",
    color: "#1a1a2e",
    fontWeight: "bold",
  }
}

export default Confirmacion