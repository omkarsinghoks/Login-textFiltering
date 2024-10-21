import React from "react";
import LoginPage from "./LoginPage";

const Login = ({ check, setCheck ,homi,setHomi}) => {
  return (
    <div>
      {/* Pass check and setCheck down to LoginPage */}
      <LoginPage check={check} setCheck={setCheck} homi={homi} setHomi={setHomi}/>
    </div>
  );
};

export default Login;
