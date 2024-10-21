import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import SearchPosts from "./SearchPosts";
import Homi from "./Homi";

const Home = () => {
  const [check, setCheck] = useState(false); // Manage state for check
  const[homi,setHomi]=useState(false);

  return (
    <div>
      <nav className="navbar">
        <ul>
          <div>
            <Link to="/Login">Login</Link>
          </div>
        </ul>
      </nav>

     
      <Routes> 
        <Route path="/Login" element={<Login check={check} setCheck={setCheck} homi={homi} setHomi={setHomi} />} />
      </Routes>
      { homi?<Homi></Homi>:<h1></h1> }
      {check ? <SearchPosts /> : <h1></h1>}
    </div>
  );
};

export default Home;
