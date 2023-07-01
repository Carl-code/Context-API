import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  const miRef = useRef();

  function incremertar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1);
  }

  useEffect(() => {
   console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
   console.log('Mostrando Referencia al elemento del DOM');
   console.log(miRef);
  }, [contador1, contador2])
  
  return (
    <div>
      <h1>'''Ejemplo de useState(), useRef() y useSffect()!!!</h1>
      <div>
        <div>Contador 1: {contador1}</div>
        <div>Contador 2: {contador2}</div>
      </div>
      <h4 ref={ miRef }>Ejemplo de elemento Referenciado</h4>
      <div>
        <button onClick={incremertar1}>Contador 1</button>
        <button onClick={incrementar2}>Contador 2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
