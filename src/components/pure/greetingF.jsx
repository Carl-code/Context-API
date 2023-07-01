import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {

  const [age, setage] = useState(29);

  const addAge = () => {
    setage(
        age + 1
    )
  }

  return (
    <div>
      <h1>Hola {props.name}</h1>
      <h2>Tu Edad es: {age}</h2>
      <div>
        <button onClick={addAge}>Click</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
