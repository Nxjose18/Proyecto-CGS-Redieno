import './App.css'
import CarritoProvider from "./context/CarritoContext";
import { Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./Paginas/PaginaPrincipal";
import PaginaLista from "./Paginas/PaginaLista";
import PaginaInicioSesion from "./Paginas/PaginaInicioSesion";

function App() {
  return (
    <div className="App">
      <CarritoProvider>
      <Routes>
        <Route 
          path="/" 
          element={<PaginaPrincipal />} 
        />

        <Route 
          path="/carta" 
          element={<PaginaLista />} 
        />

        <Route 
          path="/inicio_sesion" 
          element={<PaginaInicioSesion />} 
        />
      </Routes>
      </CarritoProvider>
    </div>
  );
}

export default App;
