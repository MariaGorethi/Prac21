import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import detallesproductos from '../mocks/Detallesproductos';
import './Productos.css';

function ListaProductos({ onAddToCart, searchResults }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('Probando busqueda en  ListaProductos:', searchResults);
    }, [searchResults]);

    const productosAMostrar = searchResults.length > 0 ? searchResults : items;

    return (
        <div className="productos">
            <h1 className="productos__titulo">Productos</h1>
            <div className="productos__lista">
                {productosAMostrar.map((producto) => (
                    <div key={producto.id} className="productos__item">
                        <h2 className="productos__nombre">{producto.nombre}</h2>
                        <Link to={`/product/${producto.id}`}>
                            <img className="productos__imagen" src={producto.imagen} alt={producto.nombre} />
                        </Link>
                        <p className="productos__descripcion">{producto.descripcion}</p>
                        <p className="productos__precio">Precio: ${producto.precio}</p>
                        <p className="productos__categoria">{producto.categoria}</p>
                        <p className="productos__fabricante">{producto.fabricante}</p>
                        <button className="productos__add-to-cart" onClick={() => onAddToCart(producto)}>Agregar al Carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListaProductos;