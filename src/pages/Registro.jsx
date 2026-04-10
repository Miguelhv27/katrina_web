import { useState } from "react"

function Registro({ navegarA, setUsuario }) {
  const [form, setForm] = useState({ nombre: "", email: "", password: "", confirmar: "" })
  const [errores, setErrores] = useState({})
  const [exito, setExito] = useState(false)

  const validar = () => {
    const nuevosErrores = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!form.nombre) {
      nuevosErrores.nombre = "El nombre es obligatorio"
    } else if (form.nombre.length < 3) {
      nuevosErrores.nombre = "El nombre debe tener al menos 3 caracteres"
    }

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

    if (!form.confirmar) {
      nuevosErrores.confirmar = "Debes confirmar tu contrasena"
    } else if (form.password !== form.confirmar) {
      nuevosErrores.confirmar = "Las contrasenas no coinciden"
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
    setUsuario({ email: form.email, nombre: form.nombre })
    setExito(true)
    setTimeout(() => {
      navegarA("inicio")
    }, 2000)
  }

  return (
    <div style={styles.fondo}>
      <div style={styles.caja}>
        <h2 style={styles.titulo}>Katrina</h2>
        <p style={styles.sub}>Crea tu cuenta</p>

        {exito && (
          <div style={styles.mensajeExito}>
            Cuenta creada exitosamente, bienvenido {form.nombre}!
          </div>
        )}

        <div style={styles.campo}>
          <label style={styles.label}>Nombre completo</label>
          <input
            style={{ ...styles.input, borderColor: errores.nombre ? "#e74c3c" : "#ddd" }}
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
          />
          {errores.nombre && <span style={styles.error}>{errores.nombre}</span>}
        </div>

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

        <div style={styles.campo}>
          <label style={styles.label}>Confirmar contrasena</label>
          <input
            style={{ ...styles.input, borderColor: errores.confirmar ? "#e74c3c" : "#ddd" }}
            type="password"
            name="confirmar"
            placeholder="••••••••"
            value={form.confirmar}
            onChange={handleChange}
          />
          {errores.confirmar && <span style={styles.error}>{errores.confirmar}</span>}
        </div>

        <button style={styles.btn} onClick={handleSubmit}>
          Crear cuenta
        </button>

        <p style={styles.link}>
          Ya tienes cuenta?{" "}
          <span style={styles.linkSpan} onClick={() => navegarA("login")}>
            Iniciar sesion
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

export default Registro