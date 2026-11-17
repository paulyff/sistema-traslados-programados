// Datos ficticios de las tarjetas
const estadisticas = [
  {
    valor: 5,
    texto: "Choferes activos",
    icono: "fa-id-card-o",
    color: "icono-azul",
  },
  {
    valor: 2,
    texto: "Choferes en viaje",
    icono: "fa-ambulance",
    color: "icono-verde",
  },
  {
    valor: 2,
    texto: "Licencias próximas a vencer",
    icono: "fa-exclamation-triangle",
    color: "icono-naranja",
  },
];

// Datos ficticios de los choferes (más adelante vendrán del backend)
const choferes = [
  {
    dni: "20123456",
    nombre: "Carlos Ruiz",
    telefono: "011-2345-6789",
    licencia: "B-12345678",
    disponibilidad: "De guardia",
    vencimientoLicencia: "2027-09-15",
  },
  {
    dni: "22234567",
    nombre: "Ana Martínez",
    telefono: "011-3456-7890",
    licencia: "B-23456789",
    disponibilidad: "Disponible",
    vencimientoLicencia: "2026-12-28",
  },
  {
    dni: "25345678",
    nombre: "Roberto López",
    telefono: "011-4567-8901",
    licencia: "B-34567890",
    disponibilidad: "Disponible",
    vencimientoLicencia: "2028-03-10",
  },
  {
    dni: "27456789",
    nombre: "Patricia González",
    telefono: "011-5678-9012",
    licencia: "B-45678901",
    disponibilidad: "No disponible",
    vencimientoLicencia: "2027-01-05",
  },
  {
    dni: "30567890",
    nombre: "Martín Fernández",
    telefono: "011-6789-0123",
    licencia: "B-56789012",
    disponibilidad: "Disponible",
    vencimientoLicencia: "2027-06-20",
  },
];

// Clase CSS de la etiqueta según la disponibilidad del chofer
const clasesDisponibilidad = {
  Disponible: "estado-disponible",
  "No disponible": "estado-no-disponible",
  "De guardia": "estado-guardia",
};

// "Carlos Ruiz" -> "CR" (primera letra del primer y del último nombre)
const obtenerIniciales = (nombre) => {
  const partes = nombre.split(" ");
  return partes[0][0] + partes[partes.length - 1][0];
};

// "2027-09-15" -> "15/09/2027"
const formatearFecha = (fecha) => {
  const [anio, mes, dia] = fecha.split("-");
  return `${dia}/${mes}/${anio}`;
};

// Cantidad de días que faltan desde hoy hasta la fecha indicada
const calcularDiasRestantes = (fecha) => {
  const [anio, mes, dia] = fecha.split("-");
  const vencimiento = new Date(anio, mes - 1, dia);
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  return Math.round((vencimiento - hoy) / (1000 * 60 * 60 * 24));
};

const Choferes = () => {
  return (
    <div>
      <h1 className="titulo-pagina">Gestión de Choferes</h1>
      <p className="text-muted mb-4">Administre el personal de conducción</p>

      <div className="row g-3">
        {estadisticas.map((estadistica) => (
          <div className="col-12 col-md-6 col-lg-4" key={estadistica.texto}>
            <div className="tarjeta-estadistica d-flex align-items-center">
              <div className={`tarjeta-icono ${estadistica.color}`}>
                <i className={`fa ${estadistica.icono}`}></i>
              </div>
              <div className="ms-3">
                <div className="tarjeta-valor">{estadistica.valor}</div>
                <div className="tarjeta-texto">{estadistica.texto}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Listado de choferes: 1 por fila en pantallas chicas y 2 en escritorio (xl) */}
      <div className="row g-4 mt-1">
        {choferes.map((chofer) => {
          const diasRestantes = calcularDiasRestantes(chofer.vencimientoLicencia);
          // Si faltan 60 días o menos, el recuadro se muestra en amarillo como advertencia
          const proximaAVencer = diasRestantes <= 60;

          return (
            <div className="col-12 col-xl-6" key={chofer.dni}>
              <div className="tarjeta-chofer d-flex">
                <div className="chofer-avatar icono-azul">
                  {obtenerIniciales(chofer.nombre)}
                </div>

                <div className="flex-grow-1 ms-3">
                  <div className="d-flex flex-wrap justify-content-between align-items-start gap-2">
                    <div>
                      <h2 className="chofer-nombre">{chofer.nombre}</h2>
                      <div className="chofer-dato">DNI: {chofer.dni}</div>
                    </div>
                    <span className={`chofer-estado ${clasesDisponibilidad[chofer.disponibilidad]}`}>
                      {chofer.disponibilidad}
                    </span>
                  </div>

                  <div className="row g-2 mt-2">
                    <div className="col-12 col-sm-6">
                      <div className="chofer-dato">Teléfono</div>
                      <div>{chofer.telefono}</div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="chofer-dato">Nº Licencia</div>
                      <div>{chofer.licencia}</div>
                    </div>
                  </div>

                  <div
                    className={
                      proximaAVencer
                        ? "licencia-vencimiento licencia-proxima d-flex justify-content-between align-items-center"
                        : "licencia-vencimiento licencia-vigente"
                    }
                  >
                    <div>
                      <div>Licencia vence: {formatearFecha(chofer.vencimientoLicencia)}</div>
                      <small>Faltan: {diasRestantes} días</small>
                    </div>
                    {proximaAVencer && <i className="fa fa-exclamation-triangle"></i>}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Choferes;
