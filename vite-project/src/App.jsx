import { Card } from "/src/Components/Card/index.jsx";
import { CardContent } from "/src/Components/Card/CardContent/index.jsx";
import { InputComponent } from "/src/Components/Input/index.jsx";

import { Contador } from "/src/Components/Contador/index.jsx"

import { Text } from "/src/Components/Text/index.jsx";

import { Tareas } from "/src/Components/Tareas/index.jsx";

import { Usuarios } from "/src/Components/Usuarios/index.jsx";

import { Temporizador } from "/src/Components/Temporizador/index.jsx";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h3>TA1/TA2 - Cards</h3>
      <Card>
        <CardContent
          titulo="Titulo 1"
          descripcion="Descripción 1"
          persona="Persona 1"
          fechaInicio="20/08/24"
          fechaFin="21/08/24"
        />
      </Card>
      <Card>
        <CardContent
          titulo="Titulo 2"
          descripcion="Descrición 2"
          persona="Persona 2"
          fechaInicio="13/09/24"
          fechaFin="15/09/24"
        />
      </Card>
      <Card>
        <CardContent
          titulo="Titulo 3"
          descripcion="Descripción 3"
          persona="Persona 3"
          fechaInicio="31/10/24"
          fechaFin="13/11/24"
        />
      </Card>
      <InputComponent />
      <Contador> </Contador>
      <Text> </Text>
      <Tareas> </Tareas>
      <Usuarios> </Usuarios>
      <Temporizador> </Temporizador>
    </div>
  );
}
