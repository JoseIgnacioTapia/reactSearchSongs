import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';

import axios from 'axios';

function App() {
  // Definir el state
  const [busquedaletra, setBusquedaletra] = useState({});
  const [letra, setLetra] = useState('');

  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;

    async function consultarApiLetra() {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/{artista}/${cancion}`;

      const resultado = await axios(url);

      setLetra(resultado.data.lyrics);
    }

    consultarApiLetra();
  }, [busquedaletra]);

  return (
    <>
      <Formulario setBusquedaletra={setBusquedaletra} />
    </>
  );
}

export default App;
