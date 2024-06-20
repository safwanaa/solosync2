import Header from "./header";
import React, { useState } from 'react';



export default function Lead(){

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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m17 21l1.8 1.77c.5.5 1.2.1 1.2-.49V18l2.8-3.4A1 1 0 0 0 22 13h-7c-.8 0-1.3 1-.8 1.6L17 18zm-2-1H2v-3c0-2.7 5.3-4 8-4c.6 0 1.3.1 2.1.2c-.2.6-.1 1.3.1 1.9c-.7-.1-1.5-.2-2.2-.2c-3 0-6.1 1.5-6.1 2.1v1.1h10.6l.5.6zM10 4C7.8 4 6 5.8 6 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"/></svg>  Lead
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
                    Lead Name
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                    </svg>
                </th>
                <th>
                   Company 
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
                <th>
                 Phone
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                    </svg>
                </th>
                <th>
                    Lead source
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