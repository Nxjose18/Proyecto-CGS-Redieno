
import { HashLink as Link } from 'react-router-hash-link';
import React, { useState } from 'react';
import '../HojasDeEstilo/Nav-bar.css';
import Logo from '../Imagenes/logo.png';
import iconoUsuario from '../Imagenes/usuario.png';
import iconoCarrito from '../Imagenes/carrito.png';
import iconoBuscar from '../Imagenes/buscar.png';
import iconoeliminar from '../Imagenes/icono-tacho.png';

function NavBar() {

 
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const [carrito, setCarrito] = useState([
    {
      id: 1,
      nombre: "Monitor Gamer Halion 27",
      precio: 3499,
      cantidad: 1,
      imagen: Logo
    },
    {
      id: 2,
      nombre: "Teclado Gamer",
      precio: 3499,
      cantidad: 2,
      imagen: Logo
    }
  ]);


  function aumentarCantidad(id) {
    const nuevo = carrito.map(function(p) {
      if (p.id === id) {
        return { ...p, cantidad: p.cantidad + 1 };
      }
      return p;
    });
    setCarrito(nuevo);
  }

  function disminuirCantidad(id) {
    const nuevo = carrito.map(function(p) {
      if (p.id === id && p.cantidad > 1) {
        return { ...p, cantidad: p.cantidad - 1 };
      }
      return p;
    });
    setCarrito(nuevo);
  }

  function eliminarProducto(id) {
    const nuevo = carrito.filter(function(p) {
      return p.id !== id;
    });
    setCarrito(nuevo);
  }

  function calcularTotal() {
    let total = 0;

    carrito.forEach(function(p) {
      total = total + (p.precio * p.cantidad);
    });

    return total;
  }

  
  return (
    <header className="header">

      <div className="contenedor-header">

        <div className="contenedor-logo">
          <img src={Logo} alt="logo" className="logo" />
        </div>

        <div className="contenedor-buscador">
          <input
            type="text"
            placeholder="Busca tus productos aquí..."
            className="input-buscador"
          />
          <button className="boton-buscar">
            <img src={iconoBuscar} alt="buscar" className='iconobuscar'/>
          </button>
        </div>

        <div className="contenedor-acciones">
          
          <div className="accion">
            <span>Iniciar Sesión</span>
            <img src={iconoUsuario} alt="usuario" className="icono" />
          </div>

         
          <div 
            className="accion"
            onClick={function() {
              setMostrarCarrito(!mostrarCarrito);
            }}
          >
            <span>Carrito</span>
            <img src={iconoCarrito} alt="carrito" className="icono" />
          </div>

        </div>
      </div>

      
      {mostrarCarrito && (
        <div className="panel-carrito">

          <div className="carrito-header">
            <p>Producto</p>
            <p>Precio</p>
            <p>Cantidad</p>
            <p>Total</p>
          </div>

          {carrito.map(function(p) {
            return (
              <div key={p.id} className="carrito-item">

                <div className="producto-info">
                  <img src={p.imagen} alt="" />
                  <span>{p.nombre}</span>
                </div>

                <p>S/. {p.precio}</p>

                <div className="cantidad">
                  <button onClick={function() { disminuirCantidad(p.id) }}>-</button>
                  <span>{p.cantidad}</span>
                  <button onClick={function() { aumentarCantidad(p.id) }}>+</button>
                </div>

                <p>S/. {p.precio * p.cantidad}</p>

                <button 
                  className="btn-eliminar"
                  onClick={function() { eliminarProducto(p.id) }}
                >
                  <img src={iconoeliminar} alt="Eliminar" />
                </button>

              </div>
            );
          })}

          <div className="carrito-total">
            <strong>Total: S/. {calcularTotal()}</strong>
          </div>

        </div>
      )}


      <div className="barra-categorias">
        <ul className="lista-categorias">
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
        <button className='boton_descuento'>TOP 30% DE DESCUENTO EN</button>
        <button className='boton_descuento'>TOP 30% DE DESCUENTO EN</button>
      </div>

    </header>
  );
}

export default NavBar;