import React, { useState } from 'react';


export default function Meeting() {
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const [showPopup, setShowPopup] = useState(false);
    
     const handleRecordsPerPageChange = (value) => {
        setRecordsPerPage(value);
        // You can perform additional actions here, like fetching data for the new page size
    };
      
    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setShowPopup(false);
    };

    return (
        <>
            <header className="mainn-header">
                <div className="task-icon">
                    <div className="header-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 14 14">
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
		<path d="M3.48 10.533a1.141 1.141 0 1 0 0-2.283a1.141 1.141 0 0 0 0 2.283m-2.055 2.946a2.06 2.06 0 0 1 .267-.993a2.077 2.077 0 0 1 1.788-1.045a2.077 2.077 0 0 1 1.787 1.045c.172.303.263.645.267.993m4.991-2.946a1.141 1.141 0 1 0 0-2.283a1.141 1.141 0 0 0 0 2.283M8.47 13.479a2.06 2.06 0 0 1 .267-.993a2.077 2.077 0 0 1 1.787-1.045a2.058 2.058 0 0 1 2.055 2.037m-5.58-9.431a1.065 1.065 0 1 0 0-2.13a1.065 1.065 0 0 0 0 2.13M5.008 6.718c.003-.337.092-.668.258-.962A2.013 2.013 0 0 1 7 4.743c.71.001 1.383.394 1.733 1.013c.166.294.255.625.259.962" />
		<path d="M11.782.545H2.218a.718.718 0 0 0-.718.718V6c0 .397.322.718.718.718h9.564A.718.718 0 0 0 12.5 6V1.263a.718.718 0 0 0-.718-.718" />
	</g>
</svg> 
                        Meetings
                        <div className="allighncont">
                            <div className="addformbutt">
                            <button onClick={handleShowPopup}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                                        <path fill="currentColor" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" />
                                    </svg>
                                    Add Meeting
                                </button>
                            </div>
                            <select className="action-task">
                                <option label="Action"></option>
                                <option>Select all</option>
                                <option>Delete all</option>
                            </select>
                        </div>
                    </div>
                </div>
            </header>

            <div className="maindiv-t">
                <div className="task-maincard">
                    <div className="taskside-align">
                        <div className="record-div">
                            <select onChange={(e) => handleRecordsPerPageChange(e.target.value)}>
                                <option value="10">10 Records per page</option>
                                <option value="20">20 Records per page</option>
                                <option value="30">30 Records per page</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="great">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M17.5 17.5L9.25 12l8.25-5.5l-1-1.5L6 12l10.5 7z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z" />
                            </svg>
                        </div>
                    </div>
                    <div className="table-card1">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Title
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                                        </svg>
                                    </th>
                                    <th>
                                        From
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                                        </svg>
                                    </th>
                                    <th>
                                        To
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                                        </svg>
                                    </th>
                                    <th>
                                        Contact Name
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                                        </svg>
                                    </th>
                                    <th>
                                        Host
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                                        </svg>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="subject_checkbox" value="subject1" />
                                        webinar
                                    </td>
                                    <td>15-12-2055</td>
                                    <td>15-45-34</td>
                                    <td>john doe</td>
                                    <td>jc$co</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="subject_checkbox" value="subject1" />
                                        webinar
                                    </td>
                                    <td>15-12-2055</td>
                                    <td>15-45-34</td>
                                    <td>john doe</td>
                                    <td>jc$co</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="subject_checkbox" value="subject1" />
                                        webinar
                                    </td>
                                    <td>15-12-2055</td>
                                    <td>15-45-34</td>
                                    <td>john doe</td>
                                    <td>jc & co</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
         

            {showPopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <h2>Add Meeting</h2>
                        <form onSubmit={handleSubmit}>
                        {/* <label>Meeting Title</label> */}
                            <input type="text" placeholder="New Meeting" required />
                            {/* <label>Location</label> */}
                            <input type="text" placeholder="Location" required />
                            {/* <label>From</label> */}
                            <input type="text" placeholder='From' required />
                            {/* <label>To</label> */}
                            <input type="text" placeholder='To' required />
                            {/* <label>Host</label> */}
                            <input type="text" placeholder="Host" required />
                            {/* <label>Participants</label> */}
                            <input type="text" placeholder="Participants" required />
                            {/* <label>Description</label> */}
                            <textarea rows="3" placeholder="Description" required></textarea>
                            <div className="popup-buttons">
                            <button className='btnmeet-sav' type="submit">Save</button>
                            <button className='btnmeet-cancel' type="button" onClick={handleClosePopup}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
   
        </>
    );
}
