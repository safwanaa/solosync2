import React, { useState } from 'react';
import Navbar from './navbar';
import Header from './header';
import Sidebar from './sidebar';
import "./App.css"; // Import your CSS file here
import Home from "./home";
import Task from './task';
import Meeting from './meeting';
import Contact from './contact';
import Calls from './calls';
import Lead from './lead';
import Deal from './deal';
import Analytics  from './analytics';
import { BrowserRouter, Routes ,Route,Link, Router } from 'react-router-dom';
import AddTask from './addtask';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (

    <BrowserRouter>
    
    <div className="app-container">
      <Navbar />
    
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <Header openSidebar={openSidebar} />
      
      {/* <Home/>  */}
     
      <ul className='app-header'>
           <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/task">Tasks</Link>
            </li>
            <li>
              <Link to="/meeting">Meetings</Link>
            </li>
            <li>
              <Link to="/contact">Contacts</Link>
            </li>
            <li>
              <Link to="/calls">Calls</Link>
            </li>
            <li>
              <Link to="/lead">Leads</Link>
            </li>
            <li>
              <Link to="/deal">deals</Link>
            </li>
            <li>
              <Link to="/analytics">analytics</Link>
            </li>

            </ul>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/task" element={<Task />} />
      <Route path="/meeting" element={<Meeting />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/calls" element={<Calls />} />
      <Route path="/lead" element={<Lead />} />
      <Route path="/deal" element={<Deal />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/addtask" element={<AddTask />} />
      </Routes>
      </div>
      </BrowserRouter> 
  );
}

export default App;

