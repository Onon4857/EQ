import React, { useState } from "react";
import FormLogin from "../../Components/FormLogin";
import FormImage from "../../Components/FormImage";

const Login = () => {
  const [shake, setShake] = useState(false);

  return (
    <div className={shake ? "Form Form--shake" : "Form"}>
      <div className="Form--background"></div>
      <FormImage />
      <FormLogin shake={setShake} />
    </div>
  );
};

export default Login;
