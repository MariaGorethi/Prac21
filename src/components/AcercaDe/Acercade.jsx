import React from 'react';
import './Acercade.css';
import icon from '../images/prueba.jpg';

const Acercade = () => {
    return (
        <div className="acercade">
            <h1 className="acercade__titulo">Acerca de Nuestra Tienda</h1>
            <div className="acercade__contenido">
                <p className="acercade__texto">
                    Bienvenido a nuestra tienda. Nos especializamos en ofrecer productos de alta calidad para bebés y niños. 
                    Nuestro objetivo es proporcionar a los padres y cuidadores todo lo que necesitan para cuidar y mimar a sus pequeños.
                </p>
                <p className="acercade__texto">
                    Desde ropa suave y cómoda hasta juguetes educativos y seguros, tenemos una amplia gama de productos que satisfacen 
                    las necesidades de los más pequeños. Nos enorgullece ofrecer productos que no solo son funcionales, sino también 
                    elegantes y modernos.
                </p>
                <p className="acercade__texto">
                    Nuestro equipo está dedicado a brindar un excelente servicio al cliente y asegurarse de que cada compra sea una 
                    experiencia agradable. Gracias por elegirnos como su tienda de confianza para productos de bebés y niños.
                </p>
            </div>
            <div className="acercade__imagen-container">
                <img className="acercade__imagen" src={icon} alt="Nuestra Tienda" />
            </div>
        </div>
    );
};

export default Acercade;