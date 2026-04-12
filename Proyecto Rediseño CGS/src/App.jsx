import './App.css'
import CarritoProvider from "./context/CarritoContext";
import { Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./Paginas/PaginaPrincipal";
import PaginaLista from "./Paginas/PaginaLista";

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
      </Routes>
      </CarritoProvider>
    </div>
  );
}

export default App;