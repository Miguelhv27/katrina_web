function Exito({ navegarA, usuario }) {
  return (
    <div style={styles.fondo}>
      <div style={styles.caja}>

        <div style={styles.icono}>
          <div style={styles.circulo}>
            <span style={styles.check}>✓</span>
          </div>
        </div>

        <h2 style={styles.titulo}>Pedido confirmado</h2>
        <p style={styles.mensaje}>
          Gracias {usuario?.nombre}, tu pedido ha sido recibido exitosamente.
          Pronto recibiras mas informacion en tu correo {usuario?.email}.
        </p>

        <div style={styles.separador} />

        <div style={styles.infoBox}>
          <p style={styles.infoTitulo}>Que sigue?</p>
          <p style={styles.infoTexto}>
            Nuestro equipo revisara tu pedido y te contactara para coordinar el metodo de pago y la entrega.
            El tiempo estimado de entrega es de 3 a 5 dias habiles.
          </p>
        </div>

        <button style={styles.btn} onClick={() => navegarA("inicio")}>
          Volver a la tienda
        </button>

      </div>
    </div>
  )
}

const styles = {
  fondo: {
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
  },
  caja: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    padding: "48px 40px",
    maxWidth: "500px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    textAlign: "center",
  },
  icono: {
    marginBottom: "8px",
  },
  circulo: {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    backgroundColor: "#eafaf1",
    border: "3px solid #2ecc71",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  check: {
    color: "#2ecc71",
    fontSize: "32px",
    fontWeight: "bold",
  },
  titulo: {
    color: "#1a1a2e",
    fontSize: "26px",
    margin: 0,
  },
  mensaje: {
    color: "#666",
    fontSize: "15px",
    lineHeight: "1.7",
    margin: 0,
  },
  separador: {
    height: "1px",
    backgroundColor: "#eee",
    width: "100%",
  },
  infoBox: {
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    padding: "20px",
    width: "100%",
    textAlign: "left",
  },
  infoTitulo: {
    color: "#1a1a2e",
    fontWeight: "bold",
    fontSize: "14px",
    margin: "0 0 8px 0",
  },
  infoTexto: {
    color: "#666",
    fontSize: "13px",
    lineHeight: "1.6",
    margin: 0,
  },
  btn: {
    backgroundColor: "#1a1a2e",
    color: "#e0c97f",
    border: "none",
    padding: "14px 32px",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "8px",
    width: "100%",
  }
}

export default Exito