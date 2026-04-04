import React, { useState } from 'react';
import '../HojasDeEstilo/Cartas-Prod-exclusivo.css';
import carrito from '../Imagenes/carrito.png';

function CartaProductosExclusivos(props) {

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
    <div className='carta_producto'>
      <div className="card_exclusivo">

       
        <button 
              className="card-img-exclusivo"
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

          <div className="etiquetas_Pexclusivo">
            {props.etiquetas.map(function(item, index) {
              return <span key={index}>{item}</span>;
            })}
          </div>
        </button>

        
        <div className='descripcion_exclusivo'>
          <p>{props.descripcion}</p>
        </div>

   
        <div className="card-body-exclusivo">

          <div className="precio_exclusivo">
            S/ {props.precio}
          </div>

          <div className="stock_exclusivo">
            Stock: {props.stock}
          </div>

      
          <div className="cantidad_exclusivo">
            <button onClick={disminuir}>-</button>
            <span>{cantidad}</span>
            <button onClick={aumentar}>+</button>
          </div>

          <button className="btn-agregar-exclusivo">
            Agregar 
            <img src={carrito} alt="carrito" />
          </button>

        </div>
      </div>
    </div>
  );
}

export default CartaProductosExclusivos;