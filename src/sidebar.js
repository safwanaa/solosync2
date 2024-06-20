import React, { useState } from 'react';

export const Sidebar = ({ isOpen, closeSidebar }) => {
    const [isMinimized, setIsMinimized] = useState(false);

    const toggleSidebar = (event) => {
        event.stopPropagation(); // Stop event propagation to parent elements
        setIsMinimized(!isMinimized);
    };

    const handleItemClick = (route, event) => {
        event.preventDefault();  // Prevent default anchor tag behavior
        event.stopPropagation(); // Stop event propagation to parent elements
         
        window.location.href = route; // Navigate to the specified route
    };

  return (
    <aside id="sidebar"  className={isMinimized ? 'minimized' : ''}>
      <div className="profile-button" onClick={toggleSidebar}>
      {!isMinimized && (
                    <>
                        <div className="profile-icon-square">N</div>
                        <div className='novox'>Novo X's Hub</div>
              
        <div className="text-wrapper-2" >
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	<path fill="currentColor" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17" />
</svg>

</div>
</>
)}

        </div>   

     
        <ul className='sidebar-list'>
      
           <li className='sidebar-list-item' onClick={(event) => handleItemClick('/home', event)}>
               <a href="\home">
               <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16">
	<path fill="currentColor" d="M6.906.664a1.75 1.75 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z" />
</svg> {!isMinimized && 'Home'}
          </a>
            </li>
            <li className='sidebar-list-item' onClick={(event) => handleItemClick('/task',event)}>
                <a href="\task">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
	<path fill="currentColor" d="m10.95 18l5.65-5.65l-1.45-1.45l-4.225 4.225l-2.1-2.1L7.4 14.45zM6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13V4H6v16h12V9zM6 4v5zv16z" />
</svg>  {!isMinimized && 'Tasks'}         </a>
            </li>
            <li className='sidebar-list-item' onClick={(event) => handleItemClick('/meeting',event)}>
                <a href="meeting">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 14 14">
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
		<path d="M3.48 10.533a1.141 1.141 0 1 0 0-2.283a1.141 1.141 0 0 0 0 2.283m-2.055 2.946a2.06 2.06 0 0 1 .267-.993a2.077 2.077 0 0 1 1.788-1.045a2.077 2.077 0 0 1 1.787 1.045c.172.303.263.645.267.993m4.991-2.946a1.141 1.141 0 1 0 0-2.283a1.141 1.141 0 0 0 0 2.283M8.47 13.479a2.06 2.06 0 0 1 .267-.993a2.077 2.077 0 0 1 1.787-1.045a2.058 2.058 0 0 1 2.055 2.037m-5.58-9.431a1.065 1.065 0 1 0 0-2.13a1.065 1.065 0 0 0 0 2.13M5.008 6.718c.003-.337.092-.668.258-.962A2.013 2.013 0 0 1 7 4.743c.71.001 1.383.394 1.733 1.013c.166.294.255.625.259.962" />
		<path d="M11.782.545H2.218a.718.718 0 0 0-.718.718V6c0 .397.322.718.718.718h9.564A.718.718 0 0 0 12.5 6V1.263a.718.718 0 0 0-.718-.718" />
	</g>
</svg>     {!isMinimized && 'Meetings'}            </a>
            </li>
            <li className='sidebar-list-item' onClick={(event) => handleItemClick('/contact',event)}>
                <a href="contact">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
	<g fill="none" fill-rule="evenodd">
		<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
		<path fill="currentColor" d="M15 14a5 5 0 0 1 4.995 4.783L20 19v2a1 1 0 0 1-1.993.117L18 21v-2a3 3 0 0 0-2.824-2.995L15 16H7a3 3 0 0 0-2.995 2.824L4 19v2a1 1 0 0 1-1.993.117L2 21v-2a5 5 0 0 1 4.783-4.995L7 14zm6-1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM11 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m10 8a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM11 4a3 3 0 1 0 0 6a3 3 0 0 0 0-6m10 3a1 1 0 0 1 .117 1.993L21 9h-3a1 1 0 0 1-.117-1.993L18 7z" />
	</g>
</svg> {!isMinimized && 'Contacts'}
                </a>
            </li>
            <li className='sidebar-list-item' onClick={(event) => handleItemClick('/calls',event)}>
                <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
	<path fill="currentColor" d="M3.833 4h4.49L9.77 7.618l-2.325 1.55A1 1 0 0 0 7 10c.003.094 0 .001 0 .001v.021a2.129 2.129 0 0 0 .006.134c.006.082.016.193.035.33c.039.27.114.642.26 1.08c.294.88.87 2.019 1.992 3.141c1.122 1.122 2.261 1.698 3.14 1.992c.439.146.81.22 1.082.26a4.424 4.424 0 0 0 .463.04l.013.001h.008s.112-.006.001 0a1 1 0 0 0 .894-.553l.67-1.34l4.436.74v4.32c-2.111.305-7.813.606-12.293-3.874C3.227 11.813 3.527 6.11 3.833 4m5.24 6.486l1.807-1.204a2 2 0 0 0 .747-2.407L10.18 3.257A2 2 0 0 0 8.323 2H3.781c-.909 0-1.764.631-1.913 1.617c-.34 2.242-.801 8.864 4.425 14.09c5.226 5.226 11.848 4.764 14.09 4.425c.986-.15 1.617-1.004 1.617-1.913v-4.372a2 2 0 0 0-1.671-1.973l-4.436-.739a2 2 0 0 0-2.118 1.078l-.346.693a4.71 4.71 0 0 1-.363-.105c-.62-.206-1.481-.63-2.359-1.508c-.878-.878-1.302-1.739-1.508-2.36a4.583 4.583 0 0 1-.125-.447z" />
</svg>  {!isMinimized && 'Calls'}
                </a>
            </li>
            <li className='sidebar-list-item' onClick={(event) => handleItemClick('/lead',event)}>
                <a href="lead">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m17 21l1.8 1.77c.5.5 1.2.1 1.2-.49V18l2.8-3.4A1 1 0 0 0 22 13h-7c-.8 0-1.3 1-.8 1.6L17 18zm-2-1H2v-3c0-2.7 5.3-4 8-4c.6 0 1.3.1 2.1.2c-.2.6-.1 1.3.1 1.9c-.7-.1-1.5-.2-2.2-.2c-3 0-6.1 1.5-6.1 2.1v1.1h10.6l.5.6zM10 4C7.8 4 6 5.8 6 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"/></svg>   {!isMinimized && 'Leads'}
                </a>
            </li>
            <li className='sidebar-list-item' onClick={(event) => handleItemClick('/deal',event)}>
                <a href="deal">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6"/></svg>   {!isMinimized && 'Deals'}
                </a>
            </li>
            <li className='sidebar-list-item' onClick={(event) => handleItemClick('/analytics',event)}>
                <a href="analytics">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
	<path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z" />
	<path fill="currentColor" d="M7 12h2v5H7zm8-5h2v10h-2zm-4 7h2v3h-2zm0-4h2v2h-2z" />
</svg>  {!isMinimized && 'Analytics'}
                </a>
            </li>
       
            <li className='sidebar-list-item' onClick={(event) => handleItemClick('/notification',event)}>
                <a href="notification">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16">
	<path fill="currentColor" fill-rule="evenodd" d="M8 1a1 1 0 0 0-1 1v.1A5 5 0 0 0 3 7v4l-1.205 1.328c-.583.643-.127 1.672.74 1.672h3.733a2 2 0 0 0 3.464 0h3.733c.867 0 1.323-1.03.74-1.672L13 11V7a5 5 0 0 0-4-4.9V2a1 1 0 0 0-1-1M4.5 11.58l-.39.428l-.446.492h8.672l-.447-.492l-.389-.429V7a3.5 3.5 0 1 0-7 0z" clip-rule="evenodd" />
</svg>  {!isMinimized && 'Notification'}
                </a>
            </li>
       
        </ul>
        <hr className="sidebar-divider" />

       
         <div className="sidebar-foot">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	   <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1-7v2h2v-2zm2-1.645A3.502 3.502 0 0 0 12 6.5a3.501 3.501 0 0 0-3.433 2.813l1.962.393A1.5 1.5 0 1 1 12 11.5a1 1 0 0 0-1 1V14h2z" />
          </svg> Help
          </div>
 
   
   
   
     
        
    </aside>
  )
}

export default Sidebar

// background-color: #f8f9fa;