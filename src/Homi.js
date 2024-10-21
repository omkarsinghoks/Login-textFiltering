import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Homi = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email } = location.state || {};

  // Redirect to login if no data is available
  if (!name || !email) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {/* <button onClick={() => navigate('/')}>Go to Login</button> */}
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h4>Hello {name}!</h4>
      <h4>Your Email is {email}</h4>
    </div>
  );
};

export default Homi;
