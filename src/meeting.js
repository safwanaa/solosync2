import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';



export default function Meeting(){

    
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const [isOpen, setIsOpen] = useState(false);
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
  
    const handleSave = (e) => {
      e.preventDefault();
      // Logic to save the new meeting
      togglePopup();
    };
    
    // const [showModal, setShowModal] = useState(false);
    
    // const handleShowModal = () => setShowModal(true);
    // const handleCloseModal = () => setShowModal(false);

    // const handleSave = (e) => {
    //     e.preventDefault();
    //     // Logic to save the new meeting
    //     handleCloseModal();
    // };
    const handleRecordsPerPageChange = (value) => {
        setRecordsPerPage(value);
        // You can perform additional actions here, like fetching data for the new page size
    };
    document.addEventListener("DOMContentLoaded", function() {
        const actionButton = document.getElementById("actionButton");
        const popup = document.getElementById("popup");
        const selectAllButton = document.getElementById("selectAllButton");
        const deleteAllButton = document.getElementById("deleteAllButton");
    
        actionButton.addEventListener("click", function() {
            popup.style.display = "block";
        });
    
        selectAllButton.addEventListener("click", function() {
            // Handle select all logic
            popup.style.display = "none"; // Hide popup after action
        });
    
        deleteAllButton.addEventListener("click", function() {
            // Handle delete all logic
            popup.style.display = "none"; // Hide popup after action
        });
    
        // Close popup when clicking outside of it
        document.addEventListener("click", function(event) {
            if (!popup.contains(event.target) && event.target !== actionButton) {
                popup.style.display = "none";
            }
        });
    });

   

    
    

    

    return (
    <>
         <header className='header'>
        <div className='task-icon'>
          <div className='header-left'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	<path fill="currentColor" d="m10.95 16.866l4.958-4.958l-.72-.72l-4.244 4.245l-2.138-2.139l-.714.714zM6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3H14.5L19 7.5v11.885q0 .69-.462 1.153T17.384 21zM14 8V4H6.616q-.231 0-.424.192T6 4.615v14.77q0 .23.192.423t.423.192h10.77q.23 0 .423-.192t.192-.424V8zM6 4v4zv16z" />
</svg>Meetings
   <div className="allighncont">
   <div className="addformbutt">
   <button onClick={togglePopup}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                    <path fill="currentColor" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" />
                  </svg>Add Meeting
                </button>
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
                    Title
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                    </svg>
                </th>
                <th>
                   From
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                    </svg>
                </th>
                <th>
                 To
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                    </svg>
                </th>
                <th>
                 Contact Name
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
                    </svg>
                </th>
                <th>
                    Host
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20V10m0 10l-3-3m3 3l3-3m5-13v10m0-10l3 3m-3-3l-3 3" />
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
    {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <h2>New Meeting</h2>
            <form onSubmit={handleSave}>
              <label>
                Meeting Title:
                <input type="text" name="title" required />
              </label>
              <label>
                Location:
                <input type="text" name="location" required />
              </label>
              <label>
                From:
                <input type="datetime-local" name="from" required />
              </label>
              <label>
                To:
                <input type="datetime-local" name="to" required />
              </label>
              <label>
                Host:
                <input type="text" name="host" required />
              </label>
              <label>
                Participants:
                <input type="text" name="participants" required />
              </label>
              <label>
                Description:
                <textarea name="description" rows="3" required />
              </label>
              <button type="submit">Save</button>
              <button type="button" onClick={togglePopup}>Cancel</button>
            </form>
          </div>
        </div>
         )}
    {/* <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title> Meeting information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSave}>
                        <Form.Group className="mb-3" controlId="formMeetingTitle">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="New Meeting" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formLocation">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="Enter location" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formFrom">
                            <Form.Label>from</Form.Label>
                            <Form.Control type="datetime-local" placeholder='from' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formTo">
                            <Form.Label>To</Form.Label>
                            <Form.Control type="datetime-local" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formHost">
                            <Form.Label>Host</Form.Label>
                            <Form.Control type="text" placeholder="Enter host name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formParticipants">
                            <Form.Label>Participants</Form.Label>
                            <Form.Control type="text" placeholder="Enter participants" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter description" required />
                        </Form.Group>
                       &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
                        <button className='button1-sav' type="submit">
                            Save
                        </button>  &nbsp;  &nbsp;  &nbsp;
                        <button className="button2-can" type="submit">
                            Cancel
                        </button>
                    </Form>
                </Modal.Body>
            </Modal> */}
     
    </>
    )
}

