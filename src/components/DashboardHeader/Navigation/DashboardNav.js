import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Orders from '../../../pages/Orders';

function DashboardNav() {
  return (
    <Router>
      <div>
    
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
              <Routes>
                  <Route path="*" element={<div></div>} />
                 
                  <Route exact path="/" element={<div></div>} />
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

export default DashboardNav