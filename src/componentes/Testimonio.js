import React from "react";
import "../css/testimonio.css"

 function Testimonio(props) {
  return(
    <div className="contenedor-testimonio">
       <img 
       className="imagen-testimonio"
       src={require(`../images/testimonio-${props.imagen}.png`)}
       alt="foto alumno1" />

      <div              className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.oficio} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>

      </div>
    </div>
  );
    
}

export default Testimonio;