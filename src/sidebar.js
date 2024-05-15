import React from 'react';




export const Sidebar = ({ isOpen, closeSidebar }) => {

     
    const handleItemClick = (route) => {
        window.location.href = route; // Navigate to the specified route
    };

  return (
    <aside id="sidebar">
      <div className="profile-button">
        <div className="profile-icon-square">N</div>
        <div className='novox'>Novo X's Hub</div> 
        <div className="text-wrapper-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	<path fill="currentColor" d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17" />
</svg>
</div>

        </div>

        <ul className='sidebar-list'>
           <li className='sidebar-list-item' onClick={() => handleItemClick('/home')}>
               <a href="\home">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3.692v-5.885h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.885h-2.616V20zm7-7.77"/></svg>Home
          </a>
            </li>
            <li className='sidebar-list-item' onClick={() => handleItemClick('/task')}>
                <a href="\task">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10.95 16.865l4.958-4.957l-.72-.72l-4.244 4.245l-2.138-2.139l-.714.714zM6.615 21q-.69 0-1.152-.462T5 19.385V4.615q0-.69.463-1.152T6.615 3H14.5L19 7.5v11.885q0 .69-.462 1.152T17.385 21zM14 8V4H6.615q-.23 0-.423.192T6 4.615v14.77q0 .23.192.423t.423.192h10.77q.23 0 .423-.192t.192-.423V8zM6 4v4zv16z"/></svg>     Tasks           </a>
            </li>
            <li className='sidebar-list-item' onClick={() => handleItemClick('/meeting')}>
                <a href="meeting">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	<path fill="none" stroke="currentColor" d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z" />
</svg>  Meetings             </a>
            </li>
            <li className='sidebar-list-item' onClick={() => handleItemClick('/contact')}>
                <a href="contact">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.5c6.08 0 11.512-2.764 15.115-7.102c-1.338-7.136-7.59-12.54-15.115-12.54s-13.777 5.404-15.115 12.54C12.488 39.736 17.92 42.5 24 42.5"/><circle cx="24" cy="12.702" r="7.202" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg> Contacts
                </a>
            </li>
            <li className='sidebar-list-item' onClick={() => handleItemClick('/calls')}>
                <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="m6.987 2.066l-.717.216a3.5 3.5 0 0 0-2.454 2.854c-.297 2.068.367 4.486 1.968 7.259c1.597 2.766 3.355 4.548 5.29 5.328a3.5 3.5 0 0 0 3.715-.705l.542-.514a2 2 0 0 0 .247-2.623l-1.356-1.88a1.5 1.5 0 0 0-1.655-.556l-2.051.627l-.053.01c-.226.033-.748-.456-1.398-1.582c-.68-1.178-.82-1.867-.633-2.045l1.043-.973a2.5 2.5 0 0 0 .575-2.85l-.662-1.471a2 2 0 0 0-2.4-1.095m1.49 1.505l.66 1.471a1.5 1.5 0 0 1-.344 1.71l-1.046.974C7.078 8.36 7.3 9.442 8.2 11c.846 1.466 1.618 2.19 2.448 2.064l.124-.026l2.088-.637a.5.5 0 0 1 .552.185l1.356 1.88a1 1 0 0 1-.123 1.312l-.543.514a2.5 2.5 0 0 1-2.653.503c-1.698-.684-3.303-2.311-4.798-4.9C5.152 9.3 4.545 7.093 4.806 5.278a2.5 2.5 0 0 1 1.753-2.039l.717-.216a1 1 0 0 1 1.2.548"/></svg> Calls
                </a>
            </li>
            <li className='sidebar-list-item' onClick={() => handleItemClick('/lead')}>
                <a href="lead">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m17 21l1.8 1.77c.5.5 1.2.1 1.2-.49V18l2.8-3.4A1 1 0 0 0 22 13h-7c-.8 0-1.3 1-.8 1.6L17 18zm-2-1H2v-3c0-2.7 5.3-4 8-4c.6 0 1.3.1 2.1.2c-.2.6-.1 1.3.1 1.9c-.7-.1-1.5-.2-2.2-.2c-3 0-6.1 1.5-6.1 2.1v1.1h10.6l.5.6zM10 4C7.8 4 6 5.8 6 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"/></svg> Leads
                </a>
            </li>
            <li className='sidebar-list-item' onClick={() => handleItemClick('/deal')}>
                <a href="deal">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6"/></svg> Deals
                </a>
            </li>
            <li className='sidebar-list-item' onClick={() => handleItemClick('/analytics')}>
                <a href="analytics">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="M7.73 16.5h1V12h-1zm7.54 0h1V7h-1zm-3.77 0h1V14h-1zm0-4.5h1v-2h-1zm-5.885 8q-.69 0-1.152-.462T4 18.385V5.615q0-.69.463-1.152T5.615 4h12.77q.69 0 1.152.463T20 5.615v12.77q0 .69-.462 1.152T18.385 20zm0-1h12.77q.23 0 .423-.192t.192-.423V5.615q0-.23-.192-.423T18.385 5H5.615q-.23 0-.423.192T5 5.615v12.77q0 .23.192.423t.423.192M5 5v14z"/></svg> Analytics
                </a>
            </li>
       
            <li className='sidebar-list-item' onClick={() => handleItemClick('/notification')}>
                <a href="notification">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
	<g fill="none" stroke="currentColor" stroke-width="1.5">
		<path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" />
		<circle cx="19" cy="5" r="3" />
	</g>
</svg>Notifications
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

