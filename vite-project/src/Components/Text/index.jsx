import { useState } from "react";

export function Text() {
  const [text, setText] = useState(true);

  function appear() {
    if (text) {
      setText(false);
    } else {
      setText(true);
    }
  }

  return (
    <>
      <h3>TA5 - Aparición/Desaparición de texto con botón</h3>
      {text && <h2>texto</h2>}
      <button onClick={appear}>
        Click aquí para hacer aparecer o desaparecer el texto
      </button>
    </>
  );
}
