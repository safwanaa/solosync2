import { Link } from "react-router-dom";
import Header from "./header";
import React, { useState } from 'react';



export default function Task(){

    const [recordsPerPage, setRecordsPerPage] = useState(10);

    const handleRecordsPerPageChange = (value) => {
        setRecordsPerPage(value);
        // You can perform additional actions here, like fetching data for the new page size
    };
    
    
    

    

    return (
    <>
         <header className='mainn-header'>
        <div className='task-icon'>
          <div className='header-left'>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
	<g fill="none" fill-rule="evenodd">
		<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
		<path fill="currentColor" d="M15 14a5 5 0 0 1 4.995 4.783L20 19v2a1 1 0 0 1-1.993.117L18 21v-2a3 3 0 0 0-2.824-2.995L15 16H7a3 3 0 0 0-2.995 2.824L4 19v2a1 1 0 0 1-1.993.117L2 21v-2a5 5 0 0 1 4.783-4.995L7 14zm6-1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM11 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m10 8a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM11 4a3 3 0 1 0 0 6a3 3 0 0 0 0-6m10 3a1 1 0 0 1 .117 1.993L21 9h-3a1 1 0 0 1-.117-1.993L18 7z" />
	</g>
</svg>Contacts
  
   <div className="allighncont">
   <div className="addformbutt"><Link to="/createcontact">
    <button  ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
	<path fill="currentColor" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" />
</svg>Add contact</button></Link>
 </div>
 <select className='action-task'>

<option label="Action"></option>
<option>Select all</option>
<option>Delete all</option></select>
</div> 
</div> 
</div>  


 
        
    </header>
 {/* content card */}
    <div className="maindiv-t">
    <div className="task-maincard">
       <div className="taskside-align">
        <div className="record-div">
    <select onChange={(e) => handleRecordsPerPageChange(e.target.value)}>
      <option value="10">10 Records per page</option>
      <option value="20">10 Records per page</option>
      <option value="30">10 Records per page</option>
      {/* Add more options as needed */}
    </select>
    </div>
    <div className="great">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
	<path fill="currentColor" fill-rule="evenodd" d="M17.5 17.5L9.25 12l8.25-5.5l-1-1.5L6 12l10.5 7z" />
</svg>    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
	<path fill="currentColor" fill-rule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z" />
</svg>

    </div>
    </div>
    <div className="table-card1">
    <table>
        <thead>
            <tr>
                <th>
                    Name
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                    </svg>
                </th>
                <th>
                   Company Name
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                    </svg>
                </th>
                <th>
                 Department
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                    </svg>
                </th>
                <th>
                 Phone
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                    </svg>
                </th>
                <th>
                    Email
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                    </svg>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>kins marrier</td>
                <td>kaiztren</td>
                <td>Admin</td>
                <td>9778405735</td>
                <td>saf@gmail</td>
            </tr>
            <tr>
                <td>kins marrier</td>
                <td>kaiztren</td>
                <td>Admin</td>
                <td>9778405735</td>
                <td>saf@gmail</td>
            </tr>
            <tr>
                <td>kins marrier</td>
                <td>kaiztren</td>
                <td>Admin</td>
                <td>9778405735</td>
                <td>saf@gmail</td>
            </tr>
        </tbody>
    </table>
</div>

   
    </div>
    </div>
     
    </>
    )
}