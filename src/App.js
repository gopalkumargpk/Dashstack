// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './componets/layout/Sidebar';
import Navbar from './componets/layout/Navbar';
import Dashboard from './componets/layout/Dashboard';
import Products from './componets/layout/Products';
import Favorites from './componets/layout/Favorites';
import Inbox from './componets/layout/Inbox'
import Orderlist from './componets/layout/Orderlist';
import ProductStock from './componets/layout/ProductStock';
import Pricing from './componets/layout/Pricing';
import Calendar from './componets/layout/Calendar';
import ToDo from './componets/layout/ToDo';
import Contact from './componets/layout/Contact';
import Invoice from './componets/layout/Invoice';
import UiElements from './componets/layout/UiElements';
import Team from './componets/layout/Team';
import Table from './componets/layout/Table';
import Settings from './componets/layout/Settings';
import Admin from './componets/layout/Admin';







const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/Favorites" element={<Favorites />} />
              <Route path="/Inbox" element={<Inbox/>} /> 
              <Route path="/Orderlist" element={<Orderlist/>} /> 
              <Route path="/ProductStock" element={<ProductStock/>} /> 
              <Route path="/Pricing" element={<Pricing/>} /> 
              <Route path="/Calendar" element={<Calendar/>} /> 
              <Route path="/todo" element={<ToDo/>} /> 
              <Route path="/Contact" element={<Contact/>} /> 
              <Route path="/Invoice" element={<Invoice/>} /> 
              <Route path="/ui-elements" element={<UiElements/>} /> 
              <Route path="/Team" element={<Team/>} /> 
              <Route path="/Table" element={<Table/>} />
              <Route path="/Settings" element={<Settings/>} />
              <Route path="/Admin" element={<Admin/>} />


              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
