import React, { useState } from 'react';
import '../HojasDeEstilo/Cartas-Prod-ofertas.css';

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
    <div className='carta_producto'>
      <div className="card">

        {/* IMAGEN */}
        <div className="card-img">
          <img src={props.imagen} alt="producto" />

          <div className="etiquetas">
            {props.etiquetas.map(function(item, index) {
              return <span key={index}>{item}</span>;
            })}
          </div>
        </div>

        {/* DESCRIPCIÓN */}
        <div className='descripcion'>
          <p>{props.descripcion}</p>
        </div>

        {/* BODY */}
        <div className="card-body">

          <div className="precio">
            S/ {props.precio}
          </div>

          <div className="stock">
            Stock: {props.stock}
          </div>

          {/* CONTADOR */}
          <div className="cantidad">
            <button onClick={disminuir}>-</button>
            <span>{cantidad}</span>
            <button onClick={aumentar}>+</button>
          </div>

          <button className="btn-agregar">
            Agregar 🛒
          </button>

        </div>
      </div>
    </div>
  );
}

export default CartaProductosOfertas;