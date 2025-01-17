import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ProductDetail from './components/Productos/DetallesDeProductos';

import ListaProductos from './components/Productos/Productos';
import Cart from './components/Cart/Cart';
import Compras from './components/Compras/Compras';
import Devoluciones from './components/Devoluciones/Devoluciones';
import Contacto from './components/Contacto/Contacto'; // Asegúrate de importar el componente Contacto
import detallesproductos from './components/mocks/Detallesproductos'; // Asegúrate de importar los productos


const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    // Recuperar el estado del carrito desde localStorage
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const [compras, setCompras] = useState(() => {
    // Recuperar el estado de las compras desde localStorage
    const savedCompras = localStorage.getItem('compras');
    return savedCompras ? JSON.parse(savedCompras) : [];
  });

  const [devoluciones, setDevoluciones] = useState(() => {
    // Recuperar el estado de las devoluciones desde localStorage
    const savedDevoluciones = localStorage.getItem('devoluciones');
    return savedDevoluciones ? JSON.parse(savedDevoluciones) : [];
  });

  const [searchResults, setSearchResults] = useState(detallesproductos);

  useEffect(() => {
    // Guardar el estado del carrito en localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    // Guardar el estado de las compras en localStorage
    localStorage.setItem('compras', JSON.stringify(compras));
  }, [compras]);

  useEffect(() => {
    // Guardar el estado de las devoluciones en localStorage
    localStorage.setItem('devoluciones', JSON.stringify(devoluciones));
  }, [devoluciones]);

  const handleAddToCart = (producto) => {
    console.log('Producto agregado:', producto);
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === producto.id);
      if (existingItem) {
        const updatedItems = prevItems.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
        console.log('Carrito actualizado (existente):', updatedItems);
        return updatedItems;
      } else {
        const newItems = [...prevItems, { ...producto, cantidad: 1 }];
        console.log('Carrito actualizado (nuevo):', newItems);
        return newItems;
      }
    });
  };

  const updateCartItemQuantity = (producto, cantidad) => {
    setCartItems(prevItems => {
      return prevItems.map(item =>
        item.id === producto.id ? { ...item, cantidad } : item
      );
    });
  };

  const removeCartItem = (producto) => {
    setCartItems(prevItems => {
      return prevItems.filter(item => item.id !== producto.id);
    });
  };

  const realizarCompra = () => {
    setCompras(prevCompras => [...prevCompras, ...cartItems]);
    setCartItems([]);
  };

  const devolverProducto = (producto) => {
    setCompras(prevCompras => {
      const updatedCompras = prevCompras.filter(item => item.id !== producto.id);
      setDevoluciones(prevDevoluciones => [...prevDevoluciones, producto]);
      return updatedCompras;
    });
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setSearchResults(detallesproductos);
    } else {
      setSearchResults([]);
      const results = detallesproductos.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        producto.categoria.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  return (
    <Router>
      <Header cartCount={cartItems.length} onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
       
        <Route path="/Productos" element={<ListaProductos onAddToCart={handleAddToCart} searchResults={searchResults} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} updateCartItemQuantity={updateCartItemQuantity} removeCartItem={removeCartItem} realizarCompra={realizarCompra} />} />
        <Route path="/compras" element={<Compras compras={compras} devolverProducto={devolverProducto} />} />
        <Route path="/devoluciones" element={<Devoluciones devoluciones={devoluciones} />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
