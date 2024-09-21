import { useState, useEffect } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function disminuir() {
    setContador(contador - 1);
  }

  useEffect(() => {
    document.title = contador;
  }, [contador]);

  return (
    <div>
      <h3>TA4/TA9 - Contador con botones</h3>
      <h1>{contador}</h1>
      <button onClick={disminuir}>Disminuir contador</button>
      <button onClick={aumentar}>Aumentar contador</button>
    </div>
  );
}
