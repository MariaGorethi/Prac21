import React from 'react';
import './Compras.css';

function Compras({ compras, devolverProducto }) {
    console.log('Compras realizadas:', compras);

    const handleDevolverProducto = (producto) => {
        devolverProducto(producto);
    };

    return (
        <div className="compras">
            <h1 className="compras__titulo">Compras Realizadas</h1>
            {compras.length === 0 ? (
                <p className="compras__mensaje">No hay compras realizadas.</p>
            ) : (
                <div className="compras__lista">
                    {compras.map((producto, index) => (
                        <div key={index} className="compras__item">
                            <h2 className="compras__nombre">{producto.nombre}</h2>
                            <img className="compras__imagen" src={producto.imagen} alt={producto.nombre} />
                            <p className="compras__precio">Precio: ${producto.precio}</p>
                            <p className="compras__cantidad">Cantidad: {producto.cantidad}</p>
                            <button className="compras__devolver" onClick={() => handleDevolverProducto(producto)}>Devolver</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Compras;