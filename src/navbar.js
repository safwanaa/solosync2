import React,{useState} from 'react';
import Card from '@mui/material/Card';
import Profileset from './assets/profilset.jpg';


import "./App.css"
const handleEditProfile = () => {
  // Logic for handling edit profile action
};

const handleLogout = () => {
  // Logic for handling logout action
};
function CustomNavbar() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    const handleLogout = () => {
      // Add logout logic here
      handleLogout();
    };
 
  };
  return (
    <Card>
    <nav className="navbar"> 
    <div className="logo display-4 text-light">SoloSync</div>
    <div className="nav-left">
    <div className="search-box">
    
         <input type="text" placeholder="Search here..." />
        
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	       <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21l-3.5-3.5M17 10a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z" />
          </svg>
         </div>
         <div className='nav-icon'>
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
	             <path fill="currentColor" d="M5 1a.5.5 0 0 1 .5.5V2h2v-.5a.5.5 0 0 1 1 0V2h2v-.5a.5.5 0 0 1 1 0V2A1.5 1.5 0 0 1 13 3.5V10H9.5A1.5 1.5 0 0 0 8 11.5V15H4.5A1.5 1.5 0 0 1 3 13.5v-10A1.5 1.5 0 0 1 4.5 2v-.5A.5.5 0 0 1 5 1m.5 4.5A.5.5 0 0 0 6 6h4a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5m0 3A.5.5 0 0 0 6 9h4a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5m0 3a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5M9 14.69q.077-.06.146-.13l3.415-3.414q.07-.07.128-.146H9.5a.5.5 0 0 0-.5.5z" />
            </svg></div>
            <div className='nav-icon'>
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="-2 -2 24 24">
	        <path fill="currentColor" d="M11 11h4a1 1 0 0 0 0-2h-4V5a1 1 0 0 0-2 0v4H5a1 1 0 1 0 0 2h4v4a1 1 0 0 0 2 0zm-1 9C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10" />
           </svg></div>
           <div className='nav-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
	      <path fill="currentColor" d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5" />
        </svg></div>
        <div className='nav-icon' onClick={togglePopup}>
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
	       <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd" />
         </svg>
          </div>
    </div>
    </nav>
    {showPopup && (
        <div className="profile-popup">
        
          <div className="profile">
          <img className="profile-set" src={Profileset} alt="profile" />
                      <div className="profile-info">
              <div className="name">John Doe</div>
              <div className="email">john.doe@example.com</div>
               {/* Labels groups */}
        <div className="labels">
          <div className="label-group">
            <span className="label">Group</span>
          </div>
          <div className="label-group">
            <span className="label">Events</span>
          </div>
          <div className="label-group">
            <span className="label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profile setting</span>
          </div>
          {/* Add more label groups as needed */}
        </div>
              
              <br/>
              <br/>
              <div className="actions">
          
      <div className="action" onClick={handleEditProfile}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
            <path d="M9 12h12l-3-3m0 6l3-3" />
          </g>
        </svg>
        <span>Edit profile</span>
      </div>
      <div className="action logout" onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
                <path d="M9 12h12l-3-3m0 6l3-3" />
              </g>
            </svg>
            <span>Logout</span>
          </div>
            </div>
          </div>
        </div>
        </div>
      )}
  </Card>
  
  );
}

export default CustomNavbar;
