import { NavLink } from "react-router-dom";

// Opciones del menú: ruta, texto e ícono (Font Awesome 4.7)
const opciones = [
  { ruta: "/", texto: "Panel Principal", icono: "fa-th-large" },
  { ruta: "/pacientes", texto: "Pacientes", icono: "fa-users" },
  { ruta: "/viajes", texto: "Viajes", icono: "fa-ambulance" },
  { ruta: "/asistencias", texto: "Asistencias", icono: "fa-medkit" },
  { ruta: "/agenda-turnos", texto: "Agenda de Turnos", icono: "fa-calendar" },
  { ruta: "/choferes", texto: "Choferes", icono: "fa-id-card-o" },
  { ruta: "/vehiculos", texto: "Vehículos", icono: "fa-car" },
  { ruta: "/gastos", texto: "Gastos", icono: "fa-money" },
  { ruta: "/presupuestos", texto: "Presupuestos", icono: "fa-file-text-o" },
];

const Sidebar = ({ contraido }) => {
  return (
    <aside className={contraido ? "sidebar sidebar-contraido" : "sidebar"}>
      <nav className="nav flex-column">
        {opciones.map((opcion) => (
          // NavLink agrega la clase "active" cuando la ruta coincide.
          // "end" evita que "/" quede activo en todas las páginas.
          <NavLink
            key={opcion.ruta}
            to={opcion.ruta}
            end={opcion.ruta === "/"}
            className="sidebar-link"
            title={opcion.texto}
          >
            <i className={`fa ${opcion.icono}`}></i>
            <span className="sidebar-texto">{opcion.texto}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
