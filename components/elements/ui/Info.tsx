import React, { useState, useEffect } from "react";

const InfoIcon: React.FC = () => {
    const [responsive, setResponsive] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Si el ancho de la ventana es "lg" (1024px) o mayor, `responsive` será false
            if (window.innerWidth >= 1024) {
                setResponsive(false);
            } else {
                setResponsive(true);
            }
        };

        // Ejecuta la función al cargar el componente para establecer el valor inicial
        handleResize();

        // Añade un listener para que escuche cambios en el tamaño de la ventana
        window.addEventListener("resize", handleResize);

        // Limpia el listener al desmontar el componente
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <svg 
        className={`${"hover:opacity-80"}`}
        onClick={() => {
            if (responsive) {
                // Aquí abrirías tu tooltip
                console.log("Tooltip abierto");
            }
        }}
        style={{ cursor: "pointer" }} 
        width="16" 
        height="16" 
        viewBox="0 0 16 16" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
            <path d="M6.06016 6.00004C6.2169 5.55449 6.52626 5.17878 6.93347 4.93946C7.34067 4.70015 7.81943 4.61267 8.28495 4.69252C8.75047 4.77236 9.17271 5.01439 9.47688 5.37573C9.78106 5.73706 9.94753 6.19439 9.94683 6.66671C9.94683 8.00004 7.94683 8.66671 7.94683 8.66671M8.00016 11.3334H8.00683M14.6668 8.00004C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00004C1.3335 4.31814 4.31826 1.33337 8.00016 1.33337C11.6821 1.33337 14.6668 4.31814 14.6668 8.00004Z" stroke="#98A2B3" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default InfoIcon;
