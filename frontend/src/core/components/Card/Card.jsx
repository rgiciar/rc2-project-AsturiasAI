import { useRef, useState } from "react";
import './Card.css';

import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <img src="imagen.jpg" alt="Imagen de la entrada" />
      <div className="contenido">
        <p className="fecha">Fecha de publicación</p>
        <h3>Título de la entrada</h3>
        <p>Descripción de la entrada...</p>
      </div>
    </div>
  );
};

export default Card;
