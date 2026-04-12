import React, { useState } from 'react';
import '../HojasDeEstilo/PaginaPrincipal.css';
import NavBar from '../Componentes/Nav-bar';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import imagenPrincipal from '../Imagenes/img-principal.png';
import novedad1 from '../Imagenes/imgNovedad-1.png';
import novedad2 from '../Imagenes/imgNovedad-2.png';
import novedad3 from '../Imagenes/imgNovedad-3.png';
import categoriaP1 from '../Imagenes/Categoria-P1.png';
import categoriaP2 from '../Imagenes/Categoria-P2.png';
import categoriaP3 from '../Imagenes/Categoria-P3.png';
import categoriaP4 from '../Imagenes/Categoria-P4.png';
import iconolista from '../Imagenes/icono-lista.png';
import monitor from '../Imagenes/imgNovedad-1.png';
import CartaProductosExclusivos from '../Componentes/Cartas-Prod-exclusivo';
import CartaProductosOfertas from '../Componentes/Cartas-Prod-ofertas';
import CartaProductosNovedades from '../Componentes/Cartas-Prod-novedades';
function PaginaPrincipal() {

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

    const producto = {
      id: Date.now(), // id único simple
      nombre: productoSeleccionado.descripcion,
      precio: productoSeleccionado.precio,
      cantidad: cantidadModal,
      imagen: productoSeleccionado.imagen
    };

      agregarProducto(producto);
    }
    var novedades = [
    {
      imagen: novedad1,
    },
    {
      imagen: novedad2,
    },
    {
      imagen: novedad3,
    }
  ];
    var productos = [
    {
      imagen: monitor,
      descripcion: "MONITOR GAMER HALION 27 2712F/PLANO/IPS/120HZ/FHD",
      precio: 3499,
      stock: 3,
      etiquetas: ["1ms", "120Hz", "1000R"]
    },
    {
      imagen: monitor,
      descripcion: "MONITOR GAMER HALION 27 2712F/PLANO/IPS/120HZ/FHD",
      precio: 3499,
      stock: 3,
      etiquetas: ["1ms", "120Hz", "1000R"]
    },
    {
      imagen: monitor,
      descripcion: "MONITOR GAMER HALION 27 2712F/PLANO/IPS/120HZ/FHD",
      precio: 3499,
      stock: 3,
      etiquetas: ["1ms", "120Hz", "1000R"]
    },
    {
      imagen: monitor,
      descripcion: "MONITOR GAMER HALION 27 2712F/PLANO/IPS/120HZ/FHD",
      precio: 3499,
      stock: 3,
      etiquetas: ["1ms", "120Hz", "1000R"]
    },
    {
      imagen: monitor,
      descripcion: "OTRO MONITOR GAMER",
      precio: 2500,
      stock: 5,
      etiquetas: ["144Hz", "IPS"]
    }
  ];
  var ofertas = [
    {
      imagen: monitor,
      descripcion: "MONITOR EN OFERTA",
      precio: 1999,
      stock: 2,
      etiquetas: ["OFERTA", "120Hz"]
    },
    {
      imagen: monitor,
      descripcion: "MONITOR EN OFERTA",
      precio: 1999,
      stock: 2,
      etiquetas: ["OFERTA", "120Hz"]
    },
    {
      imagen: monitor,
      descripcion: "MONITOR EN OFERTA",
      precio: 1999,
      stock: 2,
      etiquetas: ["OFERTA", "120Hz"]
    },
    {
      imagen: monitor,
      descripcion: "MONITOR EN OFERTA",
      precio: 1999,
      stock: 2,
      etiquetas: ["OFERTA", "120Hz"]
    },
    {
      imagen: monitor,
      descripcion: "MONITOR EN OFERTA",
      precio: 1999,
      stock: 2,
      etiquetas: ["OFERTA", "120Hz"]
    },
    {
      imagen: monitor,
      descripcion: "MONITOR EN OFERTA",
      precio: 1999,
      stock: 2,
      etiquetas: ["OFERTA", "120Hz"]
    }
  ];

  return (
      <main className="main_principal">
        <NavBar></NavBar>
      <section className="seccion_principal">
        <div className='imagen-principal'>
          <h1 className='titulo-principal'>¡Bienvenido a CGS!</h1>
          <img src={imagenPrincipal} alt="Imagen principal" />
        </div>
        <div className='categorias_principales'>
          <div className='categoria'>
            <p>categoria titulo</p>
            <img src={categoriaP1} alt="Categoria 1" />
          </div>
          <div className='categoria'>
            <p>categoria titulo</p>
            <img src={categoriaP2} alt="Categoria 2" />
          </div>
          <div className='categoria'>
            <p>categoria titulo</p>
            <img src={categoriaP3} alt="Categoria 3" />
          </div>
          <div className='categoria'>
            <p>categoria titulo</p>
            <img src={categoriaP4} alt="Categoria 4" />
          </div>
        </div>
      </section>
      <section className='Seccion_catalogo' id='CatalogoProductos'>
        <div className='contenedor_componentes'>
            <p>Categorias:</p>
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
        <div className='contenedor_ProductosYofertas'>
          <div className='productos_contenedor'>
            <p>Productos</p>
            <div className='carta_contenedor'>
              {productos.map(function(producto, index) {
                return (
                  <CartaProductosExclusivos 
                    key={index}
                    imagen={producto.imagen}
                    descripcion={producto.descripcion}
                    precio={producto.precio}
                    stock={producto.stock}
                    etiquetas={producto.etiquetas}
                    abrirModal={abrirModal}
                  />
                );
              })}
            </div>
          </div>
          <div className='ofertas_contenedor'>
            <p>Ofertas</p>
              <div className='carta_contenedor'>
                {ofertas.map(function(ofertas, index) {
                  return (
                    <CartaProductosOfertas
                      key={index}
                      imagen={ofertas.imagen}
                      descripcion={ofertas.descripcion}
                      precio={ofertas.precio}
                      stock={ofertas.stock}
                      etiquetas={ofertas.etiquetas}
                      abrirModal={abrirModal}
                    />
                  );
                })}
              </div>
          </div>
        </div>
        <div className='contenedor_novedades'>
          <p>Novedades</p>
          {novedades.map(function(novedades, index) {
            return (
              <CartaProductosNovedades
                key={index}
                imagen={novedades.imagen}
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
            <p>{productoSeleccionado.descripcion}</p>              
            </div>
            <div className='contenidoCentral'>
              <div className='ImgProd'>
                <img src={productoSeleccionado.imagen} alt="" />
              </div>
              <div className='PrecioProd'>
                <p className='preciop'>S/ {productoSeleccionado.precio}</p>
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
                <p>{productoSeleccionado.descripcion}</p>
              </div>              
            </div>



          </div>

        </div>
      )}
      </main>
          
  );
}

export default PaginaPrincipal;