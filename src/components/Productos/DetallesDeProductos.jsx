import React from 'react';
import { useParams } from 'react-router-dom';
import detallesproductos from '../mocks/Detallesproductos';
import './DetallesDeProductos.css';

function ProductDetail() {
    const { id } = useParams();
    const producto = detallesproductos.find(p => p.id === parseInt(id));

    if (!producto) {
        return <div className="product-detail">Producto no encontrado</div>;
    }

    return (
        <div className="product-detail-container">
            <div className="product-detail">
                <h1 className="product-detail__titulo">{producto.nombre}</h1>
                <img className="product-detail__imagen" src={producto.imagen} alt={producto.nombre} />
                <p className="product-detail__descripcion">{producto.descripcioncompleta}</p>
                <p className="product-detail__precio">Precio: ${producto.precio}</p>
                <p className="product-detail__categoria">Categoría: {producto.categoria}</p>
                <p className="product-detail__stock">Stock: {producto.stock}</p>
            </div>
        </div>
    );
}

export default ProductDetail;