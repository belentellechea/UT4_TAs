import { useState } from "react";

export function Tareas() {
    const [tareas, setTareas] = useState([]); 
    const [tarea, setTarea] = useState('');
    const [editando, setEditando] = useState(null); 

    const handleInputChange = (e) => {
        setTarea(e.target.value); 
    };

    const agregarTarea = () => {
        if (editando !== null) {
            const nuevasTareas = [...tareas];
            nuevasTareas[editando] = tarea; 
            setTareas(nuevasTareas);
            setEditando(null); 
        } else {
            setTareas([...tareas, tarea]); 
        }
        setTarea('')
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((tarea, i) => i !== index);
        setTareas(nuevasTareas); 
    };

    const editarTarea = (index) => {
        setTarea(tareas[index]); //tarea seleccionada en el input
        setEditando(index);
    };

    return (
        <div>
            <h3>TA6/TA7/TA8 - Lista de tareas</h3>
            <input
                type="text"
                placeholder="Añade una tarea"
                value={tarea}
                onChange={handleInputChange}
            />
            <button onClick={agregarTarea}>Agregar</button>
            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>
                        {tarea} 
                        <button onClick={() => editarTarea(index)}>Editar tarea</button>
                        <button onClick={() => eliminarTarea(index)}>Eliminar</button>
                    </li> 
                ))}
            </ul>
        </div>
    );
}
