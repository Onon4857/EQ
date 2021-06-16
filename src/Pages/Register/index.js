import React, { useState } from "react";
import FormImage from "../../Components/FormImage";
import FormRegister from "../../Components/FormRegister";

const Register = () => {
  const [shake, setShake] = useState(false);

  return (
    <div className={shake ? "Form Form--shake" : "Form"}>
      <div className="Form--background"></div>
      <FormImage />
      <FormRegister shake={setShake} />
    </div>
  );
};
export default Register;
