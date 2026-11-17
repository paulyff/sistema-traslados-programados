import { useState } from "react";
import { Link } from "react-router-dom";

const NuevoPaciente = () => {
  const [paciente, setPaciente] = useState({
    dni: "",
    nombre: "",
    direccion: "",
    telefono: "",
    condicion: "",
    obra_social: "",
  });
  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setPaciente({
      ...paciente,
      [name]: value,
    });
  };

  const guardarPaciente = (e) => {
    e.preventDefault();
    console.log("Datos del paciente:", paciente);
  };

  return (
    <div>
      <h1 className="titulo-pagina">Nuevo Paciente</h1>
      <p className="text-muted">Registrar un nuevo paciente</p>

      <div className="card">
        <div className="card-body">
          <form onSubmit={guardarPaciente}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">DNI</label>
                <input
                  type="text"
                  name="dni"
                  className="form-control"
                  value={paciente.dni}
                  onChange={manejarCambio}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Nombre y apellido</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  value={paciente.nombre}
                  onChange={manejarCambio}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Dirección</label>
                <input
                  type="text"
                  name="direccion"
                  className="form-control"
                  value={paciente.direccion}
                  onChange={manejarCambio}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Teléfono</label>
                <input
                  type="text"
                  name="telefono"
                  className="form-control"
                  value={paciente.telefono}
                  onChange={manejarCambio}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Obra social</label>
                <input
                  type="text"
                  name="obra_social"
                  className="form-control"
                  value={paciente.obra_social}
                  onChange={manejarCambio}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Condición del paciente</label>
                <input
                  type="text"
                  name="condicion"
                  className="form-control"
                  value={paciente.condicion}
                  onChange={manejarCambio}
                />
              </div>
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Guardar Paciente
              </button>

              <Link to="/pacientes" className="btn btn-secondary">
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NuevoPaciente;
