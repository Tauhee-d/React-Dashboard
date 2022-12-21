import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';
import Signin from "./Screens/Signin&Signup/Signin";
import Signup from "./Screens/Signin&Signup/Signup";
import ForgetPwd from "./Screens/Forget&ResetPassword/ForgetPwd";
import ResetPwd from "./Screens/Forget&ResetPassword/ResetPwd";

import './App.css';
import Orders from './pages/Orders';

function App () {
  return(
    <Router>
      <div>
      {/* <Signin /> */}
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
              <Routes>
              <Route path="/" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
                  <Route path="/ForgetPwd" element={<ForgetPwd />} />
      <Route path="/ResetPwd" element={<ResetPwd />} />
                  <Route exact path="/orders" element={< Orders/>} />
                  <Route exact path="/locations" element={<div></div>} />
                  <Route exact path="/profile" element={<div></div>} />
              </Routes>
          </div>
      </div>
      </div>
    </Router>
   
  )
}

export default App;