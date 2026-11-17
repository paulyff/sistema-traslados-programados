const Header = ({ onToggleMenu }) => {
  return (
    <header className="header d-flex align-items-center justify-content-between px-3">
      {/* Izquierda: logo, nombre y botón para contraer el menú */}
      <div className="d-flex align-items-center">
        <div className="header-logo d-flex align-items-center">
          <span className="logo-icono">
            <i className="fa fa-ambulance"></i>
          </span>
          <span className="logo-texto d-none d-sm-inline">Traslados Programados</span>
        </div>

        <button
          type="button"
          className="btn btn-toggle ms-2"
          onClick={onToggleMenu}
          title="Contraer / expandir menú"
        >
          <i className="fa fa-bars"></i>
        </button>
      </div>

      {/* Centro: buscador (solo visual por ahora) */}
      <div className="header-buscador d-none d-md-block">
        <i className="fa fa-search"></i>
        <input type="text" className="form-control" placeholder="Buscar..." />
      </div>

      {/* Derecha: notificaciones y usuario */}
      <div className="d-flex align-items-center gap-3">
        <button type="button" className="btn btn-notificacion position-relative">
          <i className="fa fa-bell-o"></i>
          <span className="badge-notificacion"></span>
        </button>

        <div className="header-usuario d-flex align-items-center">
          <span className="usuario-avatar">
            <i className="fa fa-user"></i>
          </span>
          <div className="d-none d-sm-block ms-2">
            <div className="usuario-nombre">Administrador</div>
            <div className="usuario-rol">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
