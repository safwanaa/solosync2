import Header from "./header";
import React, { useState, } from 'react';
import profileImage from './assets/profile.jpg';





export default function AddMeeting(){
   const [isPopupVisible, setIsPopupVisible] = useState(false);

   const togglePopup = () => {
     setIsPopupVisible(!isPopupVisible);
   };
 

 
   
return (
    <>
         <header className='mainn-header'>
        <div className='task-icon'>
          <div className='header-left'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	<path fill="currentColor" d="m10.95 16.866l4.958-4.958l-.72-.72l-4.244 4.245l-2.138-2.139l-.714.714zM6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3H14.5L19 7.5v11.885q0 .69-.462 1.153T17.384 21zM14 8V4H6.616q-.231 0-.424.192T6 4.615v14.77q0 .23.192.423t.423.192h10.77q.23 0 .423-.192t.192-.424V8zM6 4v4zv16z" />
</svg>Meetings | Meeting 1
</div>
</div>
</header>
   {/* main content */}

   <div className="addmeet-maincard">{/* main card */}
    <div className="all-headm-alighn"> {/* both head and button alighn */}
    <div className="add-new-meet"><h2>Meeting 1</h2></div>
    <div className="allmeet-button">{/* alighning both edit and delete button*/}
   <div className="edit-button">{/* edit button*/}
    <button className="edit-button">Edit</button>
   </div>
   <div className="delete-icon">{/* delete icon */}
    <button className="delete-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	<path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
</svg></button>
   </div>
   </div>
   </div>
   <div className="meetinner-card1">
     <div className="meet1-d"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
	<g fill="none">
		<path fill="currentColor" d="M2 9c0-1.886 0-2.828.586-3.414C3.172 5 4.114 5 6 5h12c1.886 0 2.828 0 3.414.586C22 6.172 22 7.114 22 9c0 .471 0 .707-.146.854C21.707 10 21.47 10 21 10H3c-.471 0-.707 0-.854-.146C2 9.707 2 9.47 2 9m0 9c0 1.886 0 2.828.586 3.414C3.172 22 4.114 22 6 22h12c1.886 0 2.828 0 3.414-.586C22 20.828 22 19.886 22 18v-5c0-.471 0-.707-.146-.854C21.707 12 21.47 12 21 12H3c-.471 0-.707 0-.854.146C2 12.293 2 12.53 2 13z" />
		<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 3v3m10-3v3" />
	</g>
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18/01/2024</div>
     <div className="meet2-t"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16">
	<path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m.75-10.5a.75.75 0 0 0-1.5 0V8a.75.75 0 0 0 .3.6l2 1.5a.75.75 0 1 0 .9-1.2l-1.7-1.275z" clip-rule="evenodd" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1:00-2:00</div>
<div className="meet3-container">
     <div className="meet3-h"><h6>Host</h6>David Luca</div>
     <div className="meet4-s"><h6>Subject</h6></div>Final Sitting</div>
   </div>
   <div className="meetinner-card2">
    <div className="partihead-butt">
   <div className="add-partipint">Partcipants</div>
   <button className="addparti-button" onClick={togglePopup}>Add</button>
   </div>
   <div className="add-noparti">No paticipants found</div> 
   {isPopupVisible && (
      <>
      <div className="popup-cardmeet">
        
      <div className="name-options">
      <span className="name-text">John Alexander</span>
           <select className="name-select">
          {/* Options for pickup named drop box */}
          <option value=""></option>
          <option value="1">Doe</option>
          <option value="2">Sheik</option>
          <option value="3">Cina</option>
        </select>
      </div>

          <div className="popup-buttonsmeet">
            <button className="cancel-buttonm" onClick={togglePopup}>Cancel</button>
            <button className="save-buttonm">Save</button>
          </div>
        </div>
        </>
      )}
  
   
</div>
<div className="meetinner-card3">
   <div className="description">Description</div>
   <div className="descr-para">Description abput the meeting will appear here.</div>
</div>
<div className="meetinner-card4">
<div className="profile-container">
<img className="profile-image" src={profileImage} alt="Profile" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div className="profile-name">John Doe</div>
          </div>
          <div className="address-container">
          <div className="address1"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256">
	<path fill="currentColor" d="M240 204h-12V96a20 20 0 0 0-20-20h-36V32a20 20 0 0 0-28.45-18.12l-104 48.54A20.06 20.06 0 0 0 28 80.55V204H16a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24m-36-104v104h-32V100ZM52 83.09l96-44.79V204H52ZM132 112v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0m-40 0v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0m0 52v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0m40 0v12a12 12 0 0 1-24 0v-12a12 12 0 0 1 24 0" />
</svg>KAIZTREN</div>

         <div className="address2"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
</svg>9778405735</div>

         <div className="address3"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
	<path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z" />
</svg>saf@gmail.com</div>

</div>

      <div className="open-activities">Open Activities</div>
      <div className="openact-container">
      <button className="openactask-butt">Task&nbsp;&nbsp;2</button>  
      <button className="openactmeet-butt">Meeting&nbsp;&nbsp;0</button>
      <div className="meet-desciption">No meetings</div>
      <button className="openactcall-butt">Calls&nbsp;&nbsp;0</button>
      </div>
</div>
</div>
  
 </>
   )
}  