import React from "react";

export function CardContent({
  titulo,
  descripcion,
  persona,
  fechaInicio,
  fechaFin,
}) {
  return (
    <>
      <div className="card-header"> {titulo} </div>
      <div className="card-content">
        <p> Descripción: {descripcion} </p>
        <p> Persona asignada: {persona} </p>
        <p> Fecha de inicio: {fechaInicio} </p>
        <p> Fecha de fin: {fechaFin} </p>
      </div>
    </>
  );
}
