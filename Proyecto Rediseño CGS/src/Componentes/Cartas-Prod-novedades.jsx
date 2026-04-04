import React, { useState } from 'react';
import '../HojasDeEstilo/Cartas-Prod-novedades.css';

function CartaProductosNovedades(props) {

  return (
        <div className='carta_novedades'>
            <img src={props.imagen} alt="Novedad" />
        </div>
  );
}

export default CartaProductosNovedades;