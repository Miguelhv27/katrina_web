import { useState } from "react"

function Login({ navegarA, setUsuario }) {
  const [form, setForm] = useState({ email: "", password: "" })
  const [errores, setErrores] = useState({})
  const [exito, setExito] = useState(false)

  const validar = () => {
    const nuevosErrores = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!form.email) {
      nuevosErrores.email = "El correo es obligatorio"
    } else if (!emailRegex.test(form.email)) {
      nuevosErrores.email = "Ingresa un correo valido (ejemplo@correo.com)"
    }

    if (!form.password) {
      nuevosErrores.password = "La contrasena es obligatoria"
    } else if (form.password.length < 6) {
      nuevosErrores.password = "La contrasena debe tener al menos 6 caracteres"
    }

    return nuevosErrores
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrores({ ...errores, [e.target.name]: "" })
  }

  const handleSubmit = () => {
    const nuevosErrores = validar()
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }
    setUsuario({ email: form.email, nombre: form.email.split("@")[0] })
    setExito(true)
    setTimeout(() => {
      navegarA("inicio")
    }, 2000)
  }

  return (
    <div style={styles.fondo}>
      <div style={styles.caja}>
        <h2 style={styles.titulo}>Katrina</h2>
        <p style={styles.sub}>Inicia sesion en tu cuenta</p>

        {exito && (
          <div style={styles.mensajeExito}>
            Bienvenido de nuevo, redirigiendo...
          </div>
        )}

        <div style={styles.campo}>
          <label style={styles.label}>Correo electronico</label>
          <input
            style={{ ...styles.input, borderColor: errores.email ? "#e74c3c" : "#ddd" }}
            type="email"
            name="email"
            placeholder="correo@ejemplo.com"
            value={form.email}
            onChange={handleChange}
          />
          {errores.email && <span style={styles.error}>{errores.email}</span>}
        </div>

        <div style={styles.campo}>
          <label style={styles.label}>Contrasena</label>
          <input
            style={{ ...styles.input, borderColor: errores.password ? "#e74c3c" : "#ddd" }}
            type="password"
            name="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
          />
          {errores.password && <span style={styles.error}>{errores.password}</span>}
        </div>

        <button style={styles.btn} onClick={handleSubmit}>
          Iniciar sesion
        </button>

        <p style={styles.link}>
          No tienes cuenta?{" "}
          <span style={styles.linkSpan} onClick={() => navegarA("registro")}>
            Crear cuenta
          </span>
        </p>
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
  },
  caja: {
    backgroundColor: "#fff",
    padding: "48px 40px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  titulo: {
    color: "#1a1a2e",
    fontSize: "28px",
    fontWeight: "bold",
    letterSpacing: "2px",
    textAlign: "center",
  },
  sub: {
    color: "#888",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "-8px",
  },
  campo: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "13px",
    color: "#444",
    fontWeight: "bold",
  },
  input: {
    padding: "10px 14px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "14px",
    outline: "none",
  },
  error: {
    fontSize: "12px",
    color: "#e74c3c",
    marginTop: "2px",
  },
  mensajeExito: {
    backgroundColor: "#eafaf1",
    border: "1px solid #2ecc71",
    color: "#27ae60",
    padding: "12px",
    borderRadius: "6px",
    fontSize: "14px",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#1a1a2e",
    color: "#e0c97f",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "8px",
  },
  link: {
    textAlign: "center",
    fontSize: "13px",
    color: "#666",
  },
  linkSpan: {
    color: "#1a1a2e",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "underline",
  }
}

export default Login