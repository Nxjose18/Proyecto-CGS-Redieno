import React, { useState } from 'react';
import '../HojasDeEstilo/cartas-PcGamer.css';
import carrito from '../Imagenes/carrito.png';

function CartasPcGamer(props) {
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
        <div className='carta_Lista'>
            <button className='caja_img'
                onClick={function() {
                props.abrirModal({
                imagen: props.imagen,
                titulo: props.titulo,
                precio: props.precio,
                stock: props.stock,
                etiquetas: props.etiquetas
                });
              }}
              >
            <img src={props.imagen} alt="Producto 1" />    
            <div className="etiquetas_PcGamer">
            {props.etiquetas.map(function(item, index) {
              return <span key={index}>{item}</span>;
            })}
            </div>                      
            </button>
            <div className='caja_info'>
                <p className='caja_info_titulo'>{props.titulo}</p>
                <p className='caja_info_precio'>{props.precio}</p>
            </div>
            <div className='caja_acciones'>
                <button className='caja_acciones_comprar'>Comprar
                <img src={carrito} alt="" />
                </button>
                <button onClick={disminuir} className='caja_acciones_disminuir'>-</button>
                <span>{cantidad}</span>
                <button onClick={aumentar} className='caja_acciones_aumentar'>+</button>
                <p>stock:{props.stock}</p>
            </div>
        </div>
);
}

export default CartasPcGamer;