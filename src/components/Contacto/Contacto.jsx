import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNombre('');
    setEmail('');
    setComentario('');
  };

  return (
    <div className="contacto">
      <h1 className="contacto__titulo">Contacto</h1>
      <form className="contacto__form" onSubmit={handleSubmit}>
        <div className="contacto__form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="contacto__form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="contacto__form-group">
          <label htmlFor="comentario">Comentario:</label>
          <textarea
            id="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="contacto__form-button">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;