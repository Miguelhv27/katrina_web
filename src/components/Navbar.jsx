function Navbar({ filtro, setFiltro, pagina, navegarA, cantidadCarrito, abrirCarrito }) {
  const enInicio = pagina === "inicio"

  return (
    <nav style={styles.nav}>
      <div style={styles.logo} onClick={() => navegarA("inicio")}>
        <h1 style={styles.logoText}>Katrina</h1>
        <p style={styles.logoSub}>Fabrica Sacos y Sueteres</p>
      </div>

      <div style={styles.links}>
        {enInicio && (
          <>
            <button style={filtro === "todos" ? styles.btnActivo : styles.btn} onClick={() => setFiltro("todos")}>Todos</button>
            <button style={filtro === "camisas" ? styles.btnActivo : styles.btn} onClick={() => setFiltro("camisas")}>Camisas</button>
            <button style={filtro === "pantalones" ? styles.btnActivo : styles.btn} onClick={() => setFiltro("pantalones")}>Pantalones</button>
            <button style={filtro === "jeans" ? styles.btnActivo : styles.btn} onClick={() => setFiltro("jeans")}>Jeans</button>
          </>
        )}
      </div>

      <div style={styles.auth}>
        <button style={styles.btnCarrito} onClick={abrirCarrito}>
          Carrito
          {cantidadCarrito > 0 && (
            <span style={styles.badge}>{cantidadCarrito}</span>
          )}
        </button>
        <button style={styles.btnLogin} onClick={() => navegarA("login")}>Iniciar sesion</button>
        <button style={styles.btnRegistro} onClick={() => navegarA("registro")}>Crear cuenta</button>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    backgroundColor: "#1a1a2e",
    padding: "16px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  logoText: {
    color: "#e0c97f",
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
  logoSub: {
    color: "#aaa",
    margin: 0,
    fontSize: "11px",
    letterSpacing: "1px",
  },
  links: {
    display: "flex",
    gap: "12px",
  },
  btn: {
    backgroundColor: "transparent",
    color: "#ccc",
    border: "1px solid #444",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },
  btnActivo: {
    backgroundColor: "#e0c97f",
    color: "#1a1a2e",
    border: "1px solid #e0c97f",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  },
  auth: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  btnCarrito: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "1px solid #555",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  badge: {
    backgroundColor: "#e0c97f",
    color: "#1a1a2e",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    fontSize: "11px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnLogin: {
    backgroundColor: "transparent",
    color: "#e0c97f",
    border: "1px solid #e0c97f",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },
  btnRegistro: {
    backgroundColor: "#e0c97f",
    color: "#1a1a2e",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  }
}

export default Navbar