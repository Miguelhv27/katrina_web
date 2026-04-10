function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.contenedor}>

        <div style={styles.columna}>
          <h3 style={styles.logoText}>Katrina</h3>
          <p style={styles.logoSub}>Fabrica Sacos y Sueteres</p>
          <p style={styles.descripcion}>
            Ropa industrial de calidad fabricada para durar. Camisas, pantalones y jeans para toda ocasion.
          </p>
        </div>

        <div style={styles.columna}>
          <h4 style={styles.tituloColumna}>Productos</h4>
          <ul style={styles.lista}>
            <li style={styles.item}>Camisas</li>
            <li style={styles.item}>Pantalones</li>
            <li style={styles.item}>Jeans</li>
          </ul>
        </div>

        <div style={styles.columna}>
          <h4 style={styles.tituloColumna}>Informacion</h4>
          <ul style={styles.lista}>
            <li style={styles.item}>Sobre nosotros</li>
            <li style={styles.item}>Politica de cambios</li>
            <li style={styles.item}>Terminos y condiciones</li>
            <li style={styles.item}>Preguntas frecuentes</li>
          </ul>
        </div>

        <div style={styles.columna}>
          <h4 style={styles.tituloColumna}>Contacto</h4>
          <ul style={styles.lista}>
            <li style={styles.item}>contacto@katrina.com</li>
            <li style={styles.item}>+57 300 123 4567</li>
            <li style={styles.item}>Bogota, Colombia</li>
            <li style={styles.item}>Lunes a Viernes 8am - 6pm</li>
          </ul>
          <div style={styles.redes}>
            <a style={styles.red} href="#">Instagram</a>
            <a style={styles.red} href="#">Facebook</a>
            <a style={styles.red} href="#">WhatsApp</a>
          </div>
        </div>

      </div>

      <div style={styles.separador} />

      <div style={styles.inferior}>
        <p style={styles.copyright}>
          2025 Almacen Katrina. Todos los derechos reservados.
        </p>
        <p style={styles.copyright}>
          Hecho en Colombia
        </p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: "#1a1a2e",
    padding: "60px 40px 30px 40px",
    marginTop: "auto",
  },
  contenedor: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
    gap: "40px",
  },
  columna: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  logoText: {
    color: "#e0c97f",
    margin: 0,
    fontSize: "22px",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
  logoSub: {
    color: "#aaa",
    margin: 0,
    fontSize: "11px",
    letterSpacing: "1px",
  },
  descripcion: {
    color: "#888",
    fontSize: "13px",
    lineHeight: "1.7",
    margin: 0,
  },
  tituloColumna: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    margin: "0 0 4px 0",
    letterSpacing: "1px",
  },
  lista: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  item: {
    color: "#888",
    fontSize: "13px",
    cursor: "pointer",
  },
  redes: {
    display: "flex",
    gap: "12px",
    marginTop: "4px",
  },
  red: {
    color: "#e0c97f",
    fontSize: "13px",
    textDecoration: "none",
    border: "1px solid #e0c97f",
    padding: "4px 10px",
    borderRadius: "4px",
  },
  separador: {
    height: "1px",
    backgroundColor: "#2e2e4e",
    margin: "40px 0 24px 0",
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  inferior: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  copyright: {
    color: "#555",
    fontSize: "12px",
    margin: 0,
  }
}

export default Footer