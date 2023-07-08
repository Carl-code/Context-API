import React, { useState } from "react";

const RegisterForm = () => {
  const initialData = [
    {
      user: "",
      name: "",
      email: "",
      password: "",
    },
  ];

  const [data, setData] = useState(initialData);

  return <div>registerForm</div>;
};

export default RegisterForm;
