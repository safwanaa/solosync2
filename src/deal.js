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
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6"/></svg> Deals
   <div className="both-butt">
   <div className="addbutt">
    <button  ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
	<path fill="currentColor" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" />
</svg>Add</button>
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
                    Deal Name
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                    </svg>
                </th>
                <th>
                   Amount
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                    </svg>
                </th>
                <th>
                 Closing Date
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                    </svg>
                </th>
                <th>
                Contact Nmae
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
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Commercial press</td>
                <td>45000</td>
                <td>18-1-2001</td>
                <td>David John</td>
                <td>David &co</td>
            </tr>
            <tr>
                <td>Commercial press</td>
                <td>45000</td>
                <td>18-1-2001</td>
                <td>David John</td>
                <td>David &co</td>
            </tr>
            <tr>
                <td>Commercial press</td>
                <td>45000</td>
                <td>18-1-2001</td>
                <td>David John</td>
                <td>David &co</td>
            </tr>
        </tbody>
    </table>
</div>

   
    </div>
    </div>
     
    </>
    )
}