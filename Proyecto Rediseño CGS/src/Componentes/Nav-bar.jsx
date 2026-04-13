import { HashLink as Link } from 'react-router-hash-link';
import React, { useContext, useState } from 'react';
import '../HojasDeEstilo/Nav-bar.css';
import Logo from '../Imagenes/logo.png';
import iconoUsuario from '../Imagenes/usuario.png';
import iconoCarrito from '../Imagenes/carrito.png';
import iconoBuscar from '../Imagenes/buscar.png';
import iconoeliminar from '../Imagenes/icono-tacho.png';
import { CarritoContext } from '../context/CarritoContext';

function NavBar() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const {
    carrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    calcularTotal
  } = useContext(CarritoContext);

  return (
    <header className="header">
      <div className="contenedor-header">
        <div className="contenedor-logo">
          <img src={Logo} alt="logo" className="logo" />
        </div>

        <div className="contenedor-buscador">
          <input
            type="text"
            placeholder="Busca tus productos aqui..."
            className="input_buscador"
          />
          <button className="boton_buscar">
            <img src={iconoBuscar} alt="buscar" className="icono_buscar" />
          </button>
        </div>

        <div className="contenedor-acciones">
          <Link to="/inicio_sesion" className="accion accion_enlace">
            <span>Iniciar Sesion</span>
            <img src={iconoUsuario} alt="usuario" className="icono" />
          </Link>

          <div
            className="accion"
            onClick={function() {
              setMostrarCarrito(!mostrarCarrito);
            }}
          >
            <span>Carrito</span>
            <img src={iconoCarrito} alt="carrito" className="icono" />
            <span>{carrito.length}</span>
          </div>
        </div>
      </div>

      {mostrarCarrito && (
        <div className="panel_carrito">
          <div className="carrito_header">
            <p>Producto</p>
            <p>Precio</p>
            <p>Cantidad</p>
            <p>Total</p>
          </div>

          {carrito.length === 0 ? (
            <p className="carrito_vacio">Tu carrito esta vacio.</p>
          ) : (
            carrito.map(function(p) {
              return (
                <div key={p.id} className="carrito_item">
                  <div className="producto_info">
                    <img src={p.imagen} alt={p.nombre} />
                    <span>{p.nombre}</span>
                  </div>

                  <p>S/. {p.precio}</p>

                  <div className="cantidad">
                    <button onClick={function() { disminuirCantidad(p.id); }}>-</button>
                    <span>{p.cantidad}</span>
                    <button onClick={function() { aumentarCantidad(p.id); }}>+</button>
                  </div>

                  <p>S/. {p.precio * p.cantidad}</p>

                  <button
                    className="btn_eliminar"
                    onClick={function() { eliminarProducto(p.id); }}
                  >
                    <img src={iconoeliminar} alt="Eliminar" />
                  </button>
                </div>
              );
            })
          )}

          <div className="carrito_total">
            <strong>Total: S/. {calcularTotal()}</strong>
          </div>
        </div>
      )}

      <div className="barra_categorias">
        <ul className="lista_categorias">
          <li className="categoria">
            <Link smooth to="/#CatalogoProductos">Ofertas</Link>
          </li>
          <li className="categoria">
            <Link smooth to="/#CatalogoProductos">Catalogo</Link>
          </li>
          <li className="categoria">
            <Link to="/carta">PC Gamer</Link>
          </li>
          <li className="categoria">
            <Link to="/carta">PC Oficina</Link>
          </li>
        </ul>
      </div>

      <div className="contenedor_descuento">
        <button className="boton_descuento">TOP 30% DE DESCUENTO EN</button>
        <button className="boton_descuento">TOP 30% DE DESCUENTO EN</button>
      </div>
    </header>
  );
}

export default NavBar;
