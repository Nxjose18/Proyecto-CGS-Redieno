
import '../HojasDeEstilo/PaginaLista.css';
import React, { useState } from 'react';
import { useContext } from 'react';
import iconolista from '../Imagenes/icono-lista.png';
import NavBar from '../Componentes/Nav-bar';
import CartasPcGamer from '../Componentes/cartas-PcGamer';
import { CarritoContext } from '../context/CarritoContext';
import pcgamer1 from '../Imagenes/pcGamer-1.jpg';
import pcgamer2 from '../Imagenes/pcGamer-2.jpg';
import pcgamer3 from '../Imagenes/pcGamer-3.jpg';
function PaginaLista() {
  var [modalAbierto, setModalAbierto] = useState(false);
  var [productoSeleccionado, setProductoSeleccionado] = useState(null);
  var [cantidadModal, setCantidadModal] = useState(1);
  const { agregarProducto } = useContext(CarritoContext);

  function aumentarCantidad() {
    setCantidadModal(cantidadModal + 1);
  }

  function disminuirCantidad() {
    if (cantidadModal > 1) {
      setCantidadModal(cantidadModal - 1);
    }
  }
  function abrirModal(producto) {
    setProductoSeleccionado(producto);
    setCantidadModal(1); 
    setModalAbierto(true);
  }
  
  function agregarAlCarrito() {
    const precioLimpio = Number(
      String(productoSeleccionado.precio).replace("S/", "").trim()
    );

    const producto = {
      id: Date.now(),
      nombre: productoSeleccionado.titulo,
      precio: precioLimpio,
      cantidad: cantidadModal,
      imagen: productoSeleccionado.imagen
    };

    agregarProducto(producto);
    setModalAbierto(false);
  }
  var pcgamers = [
    {
      imagen: pcgamer1,
      titulo: "Monitor Gamer Halion 27 2712F/Plano/IPS/120Hz/FHD",
      precio: "S/ 3499",
      stock: 3,
      etiquetas: ["Ryzen", "120Hz", "RXT"]
    },
    {
      imagen: pcgamer2,
      titulo: "Monitor Gamer Halion 27 2712F/Plano/IPS/120Hz/FHD",
      precio: "S/ 3499",
      stock: 3,
      etiquetas: ["Ryzen", "120Hz", "RXT"]

    },
    {
      imagen: pcgamer3,
      titulo: "Monitor Gamer Halion 27 2712F/Plano/IPS/120Hz/FHD",
      precio: "S/ 3499",
      stock: 3,
      etiquetas: ["Ryzen", "120Hz", "RXT"]
    },
    {
      imagen: pcgamer1,
      titulo: "Monitor Gamer Halion 27 2712F/Plano/IPS/120Hz/FHD",
      precio: "S/ 3499",
      stock: 3,
      etiquetas: ["Ryzen", "120Hz", "RXT"]

    },
    {
      imagen: pcgamer2,
      titulo: "Monitor Gamer Halion 27 2712F/Plano/IPS/120Hz/FHD",
      precio: "S/ 3499",
      stock: 3,
      etiquetas: ["Intel", "130Hz", "RX"]
    },
    {
      imagen: pcgamer3,
      titulo: "Monitor Gamer Halion 27 2712F/Plano/IPS/120Hz/FHD",
      precio: "S/ 3499",
      stock: 3,
      etiquetas: ["Intel", "130Hz", "RX"]
    },
    {
      imagen: pcgamer1,
      titulo: "Monitor Gamer Halion 27 2712F/Plano/IPS/120Hz/FHD",
      precio: "S/ 3499",
      stock: 3,
      etiquetas: ["Intel", "130Hz", "RX"]
    },
    {
      imagen: pcgamer2,
      titulo: "Monitor Gamer Halion 27 2712F/Plano/IPS/120Hz/FHD",
      precio: "S/ 3499",
      stock: 3,
      etiquetas: ["Intel", "130Hz", "RX"]
    },
    {
      imagen: pcgamer3,
      titulo: "Monitor Gamer Halion 27 2712F/Plano/IPS/120Hz/FHD",
      precio: "S/ 3499",
      stock: 3,
      etiquetas: ["Intel", "130Hz", "RX"]

    },
    {
      imagen: pcgamer1,
      titulo: "Monitor Gamer Halion 27 2712F/Plano/IPS/120Hz/FHD",
      precio: "S/ 3499",
      stock: 3,
      etiquetas: ["Intel", "130Hz", "RX"]

    },
    {
      imagen: pcgamer2,
      titulo: "Monitor Gamer Halion 27 2712F/Plano/IPS/120Hz/FHD",
      precio: "S/ 3499",
      stock: 3,
      etiquetas: ["Intel", "130Hz", "RX"]
    },
    {
      imagen: pcgamer3,
      titulo: "Monitor Gamer Halion 27 2712F/Plano/IPS/120Hz/FHD",
      precio: "S/ 3499",
      stock: 3,
      etiquetas: ["Intel", "130Hz", "RX"]

    }
  ];

  return (
  
      <main className="main_lista">
          <NavBar />        
        <section className='Lista'>

          <div className='contenedor_componentess'>
                      <h2 >Categorias:</h2>
                      <ul>
                        <li><a href="#procesadores">
                          <img src={iconolista} alt="lista"/>PROCESADORES</a></li>
                        <li><a href="#placa-madre">
                          <img src={iconolista} alt="lista"/>PLACA MADRE</a></li> 
                        <li><a href="#almacenamiento">
                          <img src={iconolista} alt="lista"/>ALMACENAMIENTO</a></li> 
                        <li><a href="#memoria-ram">
                          <img src={iconolista} alt="lista"/>MEMORIA RAM</a></li> 
                        <li><a href="#fuente">
                          <img src={iconolista} alt="lista"/>FUENTE</a></li> 
                        <li><a href="#tarjeta-de-video">
                          <img src={iconolista} alt="lista"/>TARJETA DE VIDEO</a></li> 
                        <li><a href="#cooler">
                          <img src={iconolista} alt="lista"/>COOLER</a></li> 
                        <li><a href="#monitor">
                          <img src={iconolista} alt="lista"/>MONITOR</a></li> 
                        <li><a href="#laptop">
                          <img src={iconolista} alt="lista"/>LAPTOP</a></li> 
                        <li><a href="#mini-pc">
                          <img src={iconolista} alt="lista"/>MINI PC</a></li> 
                        <li><a href="#proyector">
                          <img src={iconolista} alt="lista"/>PROYECTOR</a></li> 
                      </ul>
                  </div>
                  <div className='Listaprod'>
                   {pcgamers.map(function(pcgamer, index) {
                      return (
                        <CartasPcGamer 
                          key={index}
                          imagen={pcgamer.imagen}
                          titulo={pcgamer.titulo}
                          precio={pcgamer.precio}
                          stock={pcgamer.stock}
                          etiquetas={pcgamer.etiquetas}
                          abrirModal={abrirModal}
                        />
                      );
                    })}
                  </div>
        </section>
        {modalAbierto && (
        <div className="modal-overlay" onClick={() => setModalAbierto(false)}>
          
          <div 
            className="modal-contenido"
            onClick={(e) => e.stopPropagation()}
          >
            <div className='NombreProd'>
            <p>{productoSeleccionado.titulo}</p>              
            </div>
            <div className='contenidoCentral'>
              <div className='ImgProd'>
                <img src={productoSeleccionado.imagen} alt="" />
              </div>
              <div className='PrecioProd'>
                <p className='preciop'>{productoSeleccionado.precio}</p>
                <p className='cantidad'>{productoSeleccionado.stock} en stock</p>
                <p>Con recargo de 5% adicional por pago con tarjeta de crédito/debito</p>
                <div className="cantidad_modal">
                  <button onClick={disminuirCantidad}>-</button>
                  <span>{cantidadModal}</span>
                  <button onClick={aumentarCantidad}>+</button>

                  <button className="btn-carrito-modal" onClick={agregarAlCarrito}>
                    AÑADIR AL CARRO
                  </button>
                </div>
              </div>              
            </div>
            <div className='ContenidoInferior'>
              <div className='EspecificacionProd'>
                <p>{productoSeleccionado.etiquetas}</p>
              </div>
              <div className='DescripcionProd'>
                <p>{productoSeleccionado.titulo}</p>
              </div>              
            </div>
          </div>
        </div>
      )}
      </main>
  );
}

export default PaginaLista;
