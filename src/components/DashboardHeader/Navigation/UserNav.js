import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import ForgetPwd from '../../../Screens/Forget&ResetPassword/ForgetPwd';
import ResetPwd from '../../../Screens/Forget&ResetPassword/ResetPwd';
import Signin from '../../../Screens/Signin&Signup/Signin';
import Signup from '../../../Screens/Signin&Signup/Signup';


function UserNav() {
  return (
    <Router>
           <Route path="/Signup" element={<Signin/>}/> 
           <Route path="/Signup" element={<Signup/>}/> 
           <Route path="/Signup" element={<ForgetPwd/>}/> 
           <Route path="/Signup" element={<ResetPwd/>}/> 

    </Router>
  )
}

export default UserNav