import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route,
   Routes } from "react-router-dom";

import Home from "./Component/Home";
import About from "./Component/About";
import Create from "./Component/Create";
import Nav from "./Component/Nav";
import BalanceEnquary from "./Component/BalanceEnquary";
import Withdrow from "./Component/Withdrow";
import Deposite from "./Component/Deposite";
import Login from "./Component/Login";
import PinChange from "./Component/Pinchange";
import Transfer from "./Component/Transfer";
import Summary from "./Component/Summary";
import Lout from "./Component/Lout";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />}/>
          <Route path="/Create" element={<Create />} />
          <Route path="/BalanceEnquary" element={<BalanceEnquary />} />
          <Route path="/Withdrow" element={<Withdrow />} />
          <Route path="/Deposite" element={<Deposite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pinchange" element={<PinChange />} />
          <Route path="/Transfer" element={<Transfer />} />
          <Route path="/Summary" element={<Summary />} />
          <Route path="/Lout" element={<Lout />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
