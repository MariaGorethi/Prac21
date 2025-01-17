import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import detallesproductos from '../mocks/Detallesproductos';
import slide1 from '../images/slider1.jpg';
import slide2 from '../images/slider2.jpg';
import slide3 from '../images/slider3.jpg';
import './Home.css';

function Home() {
    const [items, setItems] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [slide1, slide2, slide3];

    useEffect(() => {
        setItems(detallesproductos);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Cambia de slide cada 3 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [slides.length]);

    const categorias = ["Ropa", "Accesorios", "Muebles"];

    return (
        <div className="home-container">
            <div className="home">
                <div className="home__slider">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`home__slider-item ${index === currentSlide ? 'active' : ''}`}
                            style={{ display: index === currentSlide ? 'block' : 'none' }}
                        >
                            <img src={slide} alt={`Slider ${index + 1}`} className="home__slider-imagen" />
                        </div>
                    ))}
                </div>
                <div className="home__productos">
                    <h2 className="home__titulo">Productos por Categoría</h2>
                    <div className="home__categorias">
                        {categorias.map(categoria => (
                            <div key={categoria} className="home__categoria">
                                <h3 className="home__categoria-titulo">{categoria}</h3>
                                <div className="home__lista">
                                    {items.filter(producto => producto.categoria === categoria).map(producto => (
                                        <div key={producto.id} className="home__item">
                                            <h2 className="home__nombre">{producto.nombre}</h2>
                                            <Link to={`/product/${producto.id}`}>
                                                <img className="home__imagen" src={producto.imagen} alt={producto.nombre} />
                                            </Link>
                                            <p className="home__descripcion">{producto.descripcion}</p>
                                            <p className="home__precio">Precio: ${producto.precio}</p>
                                            <p className="home__stock">Stock: {producto.stock}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;