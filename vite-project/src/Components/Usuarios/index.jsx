import { useState, useEffect } from 'react';

export function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data); 
      })
      .catch((error) => {
        console.error('Error al obtener los usuarios:', error);
      });
  }, []); //array vacío hace que se ejecute una sola vez

  return (
    <div>
      <h3>TA10 - Lista de usuarios</h3>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.username}</strong> | <> {usuario.email}</>
          </li>
        ))}
      </ul>
    </div>
  );
}
