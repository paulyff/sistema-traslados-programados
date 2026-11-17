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
    </div>
  );
};

export default Choferes;
