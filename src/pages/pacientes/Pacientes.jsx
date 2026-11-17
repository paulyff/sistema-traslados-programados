import { Link } from "react-router-dom";

const Pacientes = () => {
  // Pacientes de prueba
  const pacientes = [
    {
      dni: "12345678",
      nombre: "María López",
      direccion: "San Miguel de Tucumán",
      telefono: "3811234567",
    },
    {
      dni: "34567890",
      nombre: "Juan Pérez",
      direccion: "Banda del Río Salí",
      telefono: "3817654321",
    },
  ];

  return (
    <div>
      <h1 className="titulo-pagina">Pacientes</h1>
      <p className="text-muted">Gestión de pacientes registrados</p>

      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Buscar por DNI o nombre..."
        />

        <Link to="/pacientes/nuevo" className="btn btn-primary">
          <i className="fa-solid fa-plus me-2"></i>
          Nuevo Paciente
        </Link>
      </div>

      <div className="card">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>DNI</th>
                <th>Nombre y apellido</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {pacientes.map((paciente) => (
                <tr key={paciente.dni}>
                  <td>{paciente.dni}</td>
                  <td>{paciente.nombre}</td>
                  <td>{paciente.direccion}</td>
                  <td>{paciente.telefono}</td>
                  <td>
                    <Link
                      to={`/pacientes/editar/${paciente.dni}`}
                      className="btn btn-warning btn-sm"
                    >
                      <i className="fa-solid fa-pen me-2"></i>
                      Editar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pacientes;
