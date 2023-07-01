import React, { useState } from 'react'

const Ejemplo1 = () => {

    const valorInicial = 0;

    const personaInicial = {
        nombre: "Charly",
        email: "arimatea865@gmail.com"
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador() {
        setContador(contador + 1);
    }

    function actualizarPersona(persona){
        setPersona({
            nombre: "Pedro",
            email: "elpedro@gmail.com"
        })
    }

  return (
    <div>
        <h1>Ejemplo de useState()</h1>
        <h2>CONTADOR: { contador } </h2>
        <h2>DATOS DE LA PERSONA:</h2>
        <h3>NOMBRE: { persona.nombre } </h3>
        <h4>EMAIL: { persona.email } </h4>
        <div>
            <button onClick={ incrementarContador }>Aumentar</button>
        </div>
        <div>
            <button onClick={ actualizarPersona }>Actualizar Datos</button>
        </div>
    </div>
  )
}

export default Ejemplo1;