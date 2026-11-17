import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Pacientes from "./pages/Pacientes";
import Viajes from "./pages/Viajes";
import Asistencias from "./pages/Asistencias";
import AgendaTurnos from "./pages/AgendaTurnos";
import Choferes from "./pages/Choferes";
import Vehiculos from "./pages/Vehiculos";
import Gastos from "./pages/Gastos";
import Presupuestos from "./pages/Presupuestos";

const App = () => {
  // Indica si el menú lateral está contraído (solo íconos) o expandido
  const [menuContraido, setMenuContraido] = useState(false);

  const alternarMenu = () => {
    setMenuContraido(!menuContraido);
  };

  return (
    <div className="app">
      {/* Header y Sidebar quedan fijos: solo cambia el contenido de <main> */}
      <Header onToggleMenu={alternarMenu} />
      <Sidebar contraido={menuContraido} />

      <main className={menuContraido ? "contenido contenido-expandido" : "contenido"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/viajes" element={<Viajes />} />
          <Route path="/asistencias" element={<Asistencias />} />
          <Route path="/agenda-turnos" element={<AgendaTurnos />} />
          <Route path="/choferes" element={<Choferes />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/gastos" element={<Gastos />} />
          <Route path="/presupuestos" element={<Presupuestos />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
