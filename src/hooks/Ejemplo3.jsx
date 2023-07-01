import React, { useEffect, useContext, useState } from "react";

const miContexto = React.createContext(null);

const Componente1 = () => {
  
  const state = useContext(miContexto);
  
  return (
    <div>
      <h1>El Token es : {state.token} </h1>
      <Componente2 />
    </div>
  );
};

const Componente2 = () => {

  const state = useContext(miContexto);

  return (
    <div>
      <h1>La Sesion es: {state.sesion} </h1>
    </div>
  );
};

export const MiComponenteConContexto = () => {
  const estadoInicial = {
    token: "12345678",
    sesion: 1,
  };
  // Creamos el estado de este componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSesion() {
    setSessionData({
      token: "JWT123456",
      sesion: sessionData.sesion + 1,
    });
  }

  return (
    <miContexto.Provider value={ sessionData }>
      {/* Todo lo que esté aquí dentro puede leer los datos de sessionData */}
      {/* Además, si se actualiza, los componentes de aquí, también lo actualizan */}
      <Componente1/>
      <button onClick={ actualizarSesion }>actualizar Sesión</button>
    </miContexto.Provider>
  ) 
};
