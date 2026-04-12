import React, { useContext, useState } from 'react';
import '../HojasDeEstilo/Cartas-Prod-ofertas.css';
import carrito from '../Imagenes/carrito.png';
import { CarritoContext } from '../context/CarritoContext';

function CartaProductosOfertas(props) {

  var [cantidad, setCantidad] = useState(1);
  const { agregarProducto } = useContext(CarritoContext);

  function aumentar() {
    setCantidad(cantidad + 1);
  }

  function disminuir() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  function agregarAlCarrito() {
    agregarProducto({
      id: Date.now(),
      nombre: props.descripcion,
      precio: props.precio,
      cantidad: cantidad,
      imagen: props.imagen
    });
  }

  return (
    <div className='carta_oferta'>
      <div className="card">

        
        <button 
        className="card-img"
          onClick={function() {
            props.abrirModal({
              imagen: props.imagen,
              descripcion: props.descripcion,
              precio: props.precio,
              stock: props.stock,
              etiquetas: props.etiquetas
            });
          }}
        >
          <img src={props.imagen} alt="producto" />

          <div className="etiquetas">
            {props.etiquetas.map(function(item, index) {
              return <span key={index}>{item}</span>;
            })}
          </div>
        </button>

      
        <div className='descripcion'>
          <p>{props.descripcion}</p>
        </div>

       
        <div className="card-body">

          <div className="precio">
            S/ {props.precio}
          </div>

          <div className="stock">
            Stock: {props.stock}
          </div>

         
          <div className="cantidad">
            <button onClick={disminuir}>-</button>
            <span>{cantidad}</span>
            <button onClick={aumentar}>+</button>
          </div>

          <button className="btn-agregar" onClick={agregarAlCarrito}>
            Agregar 
            <img src={carrito} alt="carrito" />            
          </button>

        </div>
      </div>
    </div>
  );
}

export default CartaProductosOfertas;
