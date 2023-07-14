import React, { useState } from 'react'

const GreetingStyled = (props) => {

    // Definiendo estilos Constantes

    // Estilo para Usuario Logueado
    const loggedStyle = {
        color: 'blue'
    };

    // Estilo para Usuario no Logueado
    const unloggedStyle = {
        color: 'Red'
    };

    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<p>Hola, { props.name } </p>)
    const loginUser = () => (<p>Please Login</p>)

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
        { logged ? greetingUser : loginUser }
        <button onClick={() => {
            console.log('Boton pulsado');
            setLogged(!logged);
        } }>
            {logged ? 'Logout' : 'Login'}
        </button>
        
    </div>
  )
}

export default GreetingStyled;