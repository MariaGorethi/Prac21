import React from 'react';
import './Devoluciones.css';

function Devoluciones({ devoluciones }) {
    console.log('Productos devueltos:', devoluciones);

    return (
        <div className="devoluciones">
            <h1 className="devoluciones__titulo">Productos Devueltos</h1>
            {devoluciones.length === 0 ? (
                <p className="devoluciones__mensaje">No hay productos devueltos.</p>
            ) : (
                <div className="devoluciones__lista">
                    {devoluciones.map((producto, index) => (
                        <div key={index} className="devoluciones__item">
                            <h2 className="devoluciones__nombre">{producto.nombre}</h2>
                            <img className="devoluciones__imagen" src={producto.imagen} alt={producto.nombre} />
                            <p className="devoluciones__precio">Precio: ${producto.precio}</p>
                            <p className="devoluciones__cantidad">Cantidad: {producto.cantidad}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Devoluciones;