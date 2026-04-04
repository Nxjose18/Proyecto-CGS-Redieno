import React, { useState } from 'react';
import '../HojasDeEstilo/Cartas-Prod-ofertas.css';
import carrito from '../Imagenes/carrito.png';

function CartaProductosOfertas(props) {

  var [cantidad, setCantidad] = useState(0);

  function aumentar() {
    setCantidad(cantidad + 1);
  }

  function disminuir() {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
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

          <button className="btn-agregar">
            Agregar 
            <img src={carrito} alt="carrito" />            
          </button>

        </div>
      </div>
    </div>
  );
}

export default CartaProductosOfertas;