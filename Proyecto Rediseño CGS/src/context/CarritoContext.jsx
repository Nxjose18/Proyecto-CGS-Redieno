import React, { createContext, useState } from "react";


export const CarritoContext = createContext();

function CarritoProvider(props) {

  
  const [carrito, setCarrito] = useState([]);


  function agregarProducto(producto) {
    setCarrito(function(prev) {

      const existe = prev.find(function(p) {
        return p.nombre === producto.nombre;
      });

      if (existe) {
        return prev.map(function(p) {
          if (p.nombre === producto.nombre) {
            return { ...p, cantidad: p.cantidad + producto.cantidad };
          }
          return p;
        });
      }

      return [...prev, producto];
    });
  }


  function aumentarCantidad(id) {
    const nuevo = carrito.map(function(p) {
      if (p.id === id) {
        return { ...p, cantidad: p.cantidad + 1 };
      }
      return p;
    });
    setCarrito(nuevo);
  }


  function disminuirCantidad(id) {
    const nuevo = carrito.map(function(p) {
      if (p.id === id && p.cantidad > 1) {
        return { ...p, cantidad: p.cantidad - 1 };
      }
      return p;
    });
    setCarrito(nuevo);
  }


  function eliminarProducto(id) {
    const nuevo = carrito.filter(function(p) {
      return p.id !== id;
    });
    setCarrito(nuevo);
  }


  function calcularTotal() {
    let total = 0;

    carrito.forEach(function(p) {
      total = total + (p.precio * p.cantidad);
    });

    return total;
  }

  return (
    <CarritoContext.Provider value={{
      carrito,
      agregarProducto,
      aumentarCantidad,
      disminuirCantidad,
      eliminarProducto,
      calcularTotal
    }}>
      {props.children}
    </CarritoContext.Provider>
  );
}

export default CarritoProvider;