
import '../HojasDeEstilo/PaginaLista.css';
import iconolista from '../Imagenes/icono-lista.png';
import NavBar from '../Componentes/Nav-bar';
import productoimg from '../Imagenes/Producto-1.jpg';
import carrito from '../Imagenes/carrito.png';
function PaginaLista() {

  return (
  
      <main className="main_lista">
          <NavBar />        
        <section className='Lista'>

          <div className='contenedor_componentes'>
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
                       <div className='carta_Lista'>
                        <button className='caja_img'>
                        <img src={productoimg} alt="Producto 1" />                          
                        </button>
                        <div className='caja_info'>
                          <p>Monitor 19"</p>
                          <p>s/ 1380</p>
                        </div>
                        <div className='caja_acciones'>
                           <button>Comprar
                            <img src={carrito} alt="" />
                           </button>
                           <button>-</button>
                            <span>0</span>
                           <button>+</button>
                           <p>3 en stock</p>
                        </div>
                       </div>
                       <div className='carta_Lista'></div>
                       <div className='carta_Lista'></div>
                       <div className='carta_Lista'></div>
                       <div className='carta_Lista'></div>
                       <div className='carta_Lista'></div>
                       <div className='carta_Lista'></div>
                       <div className='carta_Lista'></div>
                       <div className='carta_Lista'></div>
                       <div className='carta_Lista'></div>
                       <div className='carta_Lista'></div>
                  </div>
        </section>
      </main>
  );
}

export default PaginaLista;