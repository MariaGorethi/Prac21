import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart({ cartItems, updateCartItemQuantity, removeCartItem, realizarCompra }) {
    const navigate = useNavigate();

    console.log('Productos en el carrito:', cartItems);

    const handleQuantityChange = (producto, cantidad) => {
        updateCartItemQuantity(producto, cantidad);
    };

    const handleRemoveItem = (producto) => {
        removeCartItem(producto);
    };

    const handleRealizarCompra = () => {
        realizarCompra();
        navigate('/compras');
    };

    return (
        <div className="cart">
            <h1 className="cart__titulo">Carrito de Compras</h1>
            {cartItems.length === 0 ? (
                <p className="cart__mensaje">No hay productos en el carrito.</p>
            ) : (
                <div className="cart__lista">
                    {cartItems.map((producto, index) => (
                        <div key={index} className="cart__item">
                            <h2 className="cart__nombre">{producto.nombre}</h2>
                            <img className="cart__imagen" src={producto.imagen} alt={producto.nombre} />
                            <p className="cart__precio">Precio: ${producto.precio}</p>
                            <div className="cart__cantidad">
                                <label htmlFor={`cantidad-${index}`}>Cantidad: {producto.cantidad}</label>
                                <button onClick={() => handleQuantityChange(producto, producto.cantidad + 1)}>+</button>
                                <button onClick={() => handleQuantityChange(producto, producto.cantidad - 1)} disabled={producto.cantidad === 1}>-</button>
                            </div>
                            <button className="cart__remove" onClick={() => handleRemoveItem(producto)}>Eliminar</button>
                        </div>
                    ))}
                    
                </div>
            )}
            {cartItems.length > 0 && (

                <div className="cart__container">
                        <button className="cart__comprar" onClick={handleRealizarCompra}>Realizar Compra</button>
               </div>
            )}
        </div>
    );
}

export default Cart;