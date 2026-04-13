import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../HojasDeEstilo/PaginaInicioSesion.css';

function PaginaInicioSesion() {
  const [usuario, setUsuario] = useState('emilys');
  const [contrasena, setContrasena] = useState('emilyspass');
  const [cargando, setCargando] = useState(false);
  const [mensaje_error, setMensajeError] = useState('');
  const [datos_usuario, setDatosUsuario] = useState(null);

  async function iniciarSesion(evento) {
    evento.preventDefault();
    setCargando(true);
    setMensajeError('');
    setDatosUsuario(null);

    try {
      const respuesta = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          username: usuario,
          password: contrasena,
          expiresInMins: 30
        })
      });

      const datos = await respuesta.json();

      if (!respuesta.ok) {
        setMensajeError(datos.message || 'No se pudo iniciar sesion.');
        return;
      }

      localStorage.setItem('usuario_sesion', JSON.stringify(datos));
      setDatosUsuario(datos);
    } catch (error) {
      setMensajeError('No se pudo conectar con la API.');
    } finally {
      setCargando(false);
    }
  }

  return (
    <main className="pagina_inicio_sesion">
      <section className="contenedor_inicio_sesion">
        <div className="cabecera_inicio_sesion">
          <p className="texto_pequeno">API</p>
          <h1>Inicio de sesion</h1>
          <p className="texto_ayuda">
            Este formulario consume la API DummyJSON para simular un login.
          </p>
        </div>

        <div className="credenciales_prueba">
          <p><strong>Usuario:</strong> emilys</p>
          <p><strong>Clave:</strong> emilyspass</p>
        </div>

        <form className="formulario_inicio_sesion" onSubmit={iniciarSesion}>
          <label className="grupo_campo">
            <span>Usuario</span>
            <input
              type="text"
              value={usuario}
              onChange={function(evento) {
                setUsuario(evento.target.value);
              }}
              className="campo_texto"
            />
          </label>

          <label className="grupo_campo">
            <span>Contrasena</span>
            <input
              type="password"
              value={contrasena}
              onChange={function(evento) {
                setContrasena(evento.target.value);
              }}
              className="campo_texto"
            />
          </label>

          <button type="submit" className="boton_inicio_sesion" disabled={cargando}>
            {cargando ? 'Validando...' : 'Ingresar'}
          </button>
        </form>

        {mensaje_error && (
          <p className="mensaje_error">{mensaje_error}</p>
        )}

        {datos_usuario && (
          <div className="panel_usuario">
            <h2>Sesion iniciada</h2>
            <p><strong>Nombre:</strong> {datos_usuario.firstName} {datos_usuario.lastName}</p>
            <p><strong>Usuario:</strong> {datos_usuario.username}</p>
            <p><strong>Email:</strong> {datos_usuario.email}</p>
          </div>
        )}

        <div className="acciones_inicio_sesion">
          <Link to="/" className="boton_volver">Volver al inicio</Link>
        </div>
      </section>
    </main>
  );
}

export default PaginaInicioSesion;
