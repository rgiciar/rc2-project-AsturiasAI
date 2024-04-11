import React from 'react';

const Card = ({ titulo, fecha, imagen, descripcion, link }) => {
  return (
    <div className="card">
      <h2 className="titulo">{titulo}</h2>
      <p className="fecha">{fecha}</p>
      <img className="imagen" src={imagen} alt={titulo} />
      <p className="descripcion">{descripcion}</p>
      <a className="link" href={link}>Leer más</a>
    </div>
  );
};

export default Card;