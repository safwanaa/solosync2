import Header from "./header";
import React, { useState, } from 'react';
import Switch from 'react-switch';





export default function AddTask(){
  const [reminder, setReminder] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
 

  const handleToggle = (checked) => {
    setReminder(checked);
    if (checked) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };
   
return (
    <>
         <header className='mainn-header'>
        <div className='task-icon'>
          <div className='header-left'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	<path fill="currentColor" d="m10.95 16.866l4.958-4.958l-.72-.72l-4.244 4.245l-2.138-2.139l-.714.714zM6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3H14.5L19 7.5v11.885q0 .69-.462 1.153T17.384 21zM14 8V4H6.616q-.231 0-.424.192T6 4.615v14.77q0 .23.192.423t.423.192h10.77q.23 0 .423-.192t.192-.424V8zM6 4v4zv16z" />
</svg>Tasks | Add Task
</div>
</div>
</header>
   {/* main content */}

   <div className="addtask-maincard">
    <div className="all-head-alighn">
    <div className="add-new-task"><h2>Add New Task</h2></div>
    <div className="all-button">
   <div className="save-button">
    <button>Save</button>
   </div>
   <div className="saveadd-button">
    <button>Save & Add Another</button>
   </div>
  
   <div className="cancel-button">
    <button>Cancel</button>
   </div>
   </div>
   </div>
   
   <div class="inneraddnew-card">
   <div className="task-infohead">Task Information</div>
   <form>
  <div class="form-group">
    <label for="subject">Subject:</label>
    <input type="text" id="subject" name="subject" class="underline"/>
  </div>
  <div class="form-group">
  <label for="due-date">Due Date:</label>
  <div class="input-wrapper">
    <input type="date" id="due-date" name="due-date" class="underline" placeholder="mm dd yyyy" />
  </div>
  <div class="form-group">
    <label for="contact">Contact:</label>
    <input type="text" id="contact" name="contact" class="underline"/>
  </div>
</div>
  <div class="form-group">
    <label for="status">Status:</label>
    <select id="status" name="status" class="underline">
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
  </div>
  </form>
  {/* Popup */}
  {showPopup && (
            <div className="reminder-popup">
              <div className="popup-message">
                <div className="popup-icon">
                 
                </div>
                <div className="popup-text">
                <div className="on-button">On&nbsp; <button className="date-button">04/04/2024&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
	<g fill="none">
		<path fill="currentColor" d="M2 9c0-1.886 0-2.828.586-3.414C3.172 5 4.114 5 6 5h12c1.886 0 2.828 0 3.414.586C22 6.172 22 7.114 22 9c0 .471 0 .707-.146.854C21.707 10 21.47 10 21 10H3c-.471 0-.707 0-.854-.146C2 9.707 2 9.47 2 9m0 9c0 1.886 0 2.828.586 3.414C3.172 22 4.114 22 6 22h12c1.886 0 2.828 0 3.414-.586C22 20.828 22 19.886 22 18v-5c0-.471 0-.707-.146-.854C21.707 12 21.47 12 21 12H3c-.471 0-.707 0-.854.146C2 12.293 2 12.53 2 13z" />
		<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 3v3m10-3v3" />
	</g>
</svg></button></div>
       <div className="at-button">at&nbsp;<button className="time-button">3:50 PM<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
		<path d="M12 7v5l3 3" />
	</g>
</svg>
      </button>
      </div> 
       </div>
       </div>
    
      <div className="notify-options">
        Notify
           <select className="custom-select">
          {/* Options for pickup named drop box */}
          <option value=""></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      

            <div className="boredr">&nbsp;</div> 
             
              <div className="popup-buttons">
                <button className="toggleswitch-cancel" onClick={() => setShowPopup(false)}>Cancel</button>
                <button className="toggleswitch-save">Save</button>
              </div>
            </div>
          )}

  <div class="form-group">
    <label for="reminder">Reminder:</label>
    <input type="text" id="reminder" name="reminder" class="underline"/>
     <div className="toggle-switch ">
                <Switch
                 onChange={handleToggle}
                  checked={reminder}
                  onColor="2ecc71"
                  onHandleColor="ffffff"
                  offColor="#cccccc" // Light grey color when switched off
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={14}
                  width={36}
                  className="react-switch"
                  id="material-switch"
                />
             
             
              </div>
  </div>


<div class="description-info">Description Information</div>
<label for="description">Description:</label>
<input id="description" name="description" class="description-field"/>
  </div>
    </div>
    
 </>
    )
} 