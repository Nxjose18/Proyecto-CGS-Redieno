
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
      titulo: "PC GAMER RYZEN 5 5600G 16GB RAM SSD 512GB",
      precio: "S/ 2299",
      stock: 3,
      etiquetas: ["Ryzen 5", "16GB", "SSD"]
    },
    {
      imagen: pcgamer2,
      titulo: "PC GAMER INTEL I5 12400F RTX 4060 16GB",
      precio: "S/ 3899",
      stock: 2,
      etiquetas: ["Intel i5", "RTX 4060", "16GB"]

    },
    {
      imagen: pcgamer3,
      titulo: "PC GAMER RYZEN 7 5700X RTX 4070 SUPER",
      precio: "S/ 6299",
      stock: 2,
      etiquetas: ["Ryzen 7", "RTX 4070", "32GB"]
    },
    {
      imagen: pcgamer1,
      titulo: "PC GAMER RYZEN 5 8500G 16GB SSD 1TB",
      precio: "S/ 2799",
      stock: 4,
      etiquetas: ["Ryzen 5", "1TB", "DDR5"]

    },
    {
      imagen: pcgamer2,
      titulo: "PC GAMER INTEL I7 12700KF RTX 4070 32GB",
      precio: "S/ 5899",
      stock: 3,
      etiquetas: ["Intel i7", "RTX 4070", "32GB"]
    },
    {
      imagen: pcgamer3,
      titulo: "PC GAMER RYZEN 9 7900X RTX 4080 32GB",
      precio: "S/ 8999",
      stock: 1,
      etiquetas: ["Ryzen 9", "RTX 4080", "32GB"]
    },
    {
      imagen: pcgamer1,
      titulo: "PC STREAMER RYZEN 7 5800X RTX 4060 TI",
      precio: "S/ 4699",
      stock: 2,
      etiquetas: ["Streamer", "RTX 4060 Ti", "32GB"]
    },
    {
      imagen: pcgamer2,
      titulo: "PC GAMER INTEL I5 13400 RX 7600 16GB",
      precio: "S/ 3599",
      stock: 5,
      etiquetas: ["Intel i5", "RX 7600", "16GB"]
    },
    {
      imagen: pcgamer3,
      titulo: "PC GAMER RYZEN 5 7600 RX 7700 XT 16GB",
      precio: "S/ 5199",
      stock: 3,
      etiquetas: ["Ryzen 5", "RX 7700 XT", "DDR5"]

    },
    {
      imagen: pcgamer1,
      titulo: "PC OFICINA INTEL I3 12100 8GB SSD 256GB",
      precio: "S/ 1699",
      stock: 7,
      etiquetas: ["Intel i3", "8GB", "SSD"]

    },
    {
      imagen: pcgamer2,
      titulo: "PC DISEÑO RYZEN 7 7700 RTX 4060 32GB",
      precio: "S/ 5499",
      stock: 2,
      etiquetas: ["Diseño", "RTX 4060", "32GB"]
    },
    {
      imagen: pcgamer3,
      titulo: "PC GAMER INTEL I9 14900KF RTX 4090 64GB",
      precio: "S/ 12999",
      stock: 1,
      etiquetas: ["Intel i9", "RTX 4090", "64GB"]

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
