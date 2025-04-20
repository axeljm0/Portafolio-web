import React, { useState } from "react";
import "./ImageWithHover.css"; // Estilos específicos (opcional)

const DetallesProyectos = ({ src, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="image-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} alt={alt} className="image" />
      {isHovered && (
        <div className="image-details">
          <h3>{title}</h3> 
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default DetallesProyectos;