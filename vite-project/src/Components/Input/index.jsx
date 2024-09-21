import React, { useState } from "react";

export function InputComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
        <h3>TA3 - Componente Input</h3>
      <input
        type="text"
        placeholder="Escribe algo..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Información ingresada por el usuario: {inputValue}</p>
    </div>
  );
}
