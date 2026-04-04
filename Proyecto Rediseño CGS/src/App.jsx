import './App.css'
import { Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./Paginas/PaginaPrincipal";
import PaginaLista from "./Paginas/PaginaLista";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;