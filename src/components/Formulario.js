import React, { useState } from 'react';

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    cancion: '',
    artista: '',
  });
  const [error, setError] = useState(false);

  const { cancion, artista } = busqueda;

  function actualizarState(e) {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  }

  function buscarInformacion(e) {
    e.preventDefault();

    // Valida campos del formulario
    if (cancion.trim() === '' || artista.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    // Todo bien pasar información al Componente Principal
  }

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            onSubmit={buscarInformacion}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre Artista"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre Canción"
                      onChange={actualizarState}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
