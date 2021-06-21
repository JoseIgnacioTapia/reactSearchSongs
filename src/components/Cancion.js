import React from 'react';

const Cancion = ({ letra }) => {
  if (letra.length === 0) return null;

  return (
    <>
      <h2>Letra de canción</h2>
      <p>{letra}</p>
    </>
  );
};

export default Cancion;
