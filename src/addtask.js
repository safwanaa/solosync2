import Header from "./header";
import React, { useState, } from 'react';
import Switch from 'react-switch';
import { Button, Form, Card, Modal } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';





export default function AddTask(){
  const [reminder, setReminder] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [reminderDate, setReminderDate] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSave = (e) => {
    e.preventDefault();
    // Logic to save the new meeting
    handleCloseModal();
  };

  const handleReminderSave = (e) => {
    e.preventDefault();
    // Logic to save the reminder
    console.log('Reminder Date:', reminderDate);
    console.log('Reminder Time:', reminderTime);
    setReminder(false); // Optionally turn off the switch after saving
  };
   
return (
    <>
         <header className='header'>
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
   
   <div class="inner-card">
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
  <div class="form-group">
    <label for="reminder">Reminder:</label>
    <input type="text" id="reminder" name="reminder" class="underline"/>
     <div className="toggle-switch">
                <Switch
                  onChange={checked => setReminder(checked)}
                  checked={reminder}
                  onColor="2ecc71"
                  onHandleColor="ffffff"
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
                 {reminder && (
                  <Card style={{ width: '18rem', marginTop: '10px' }}>
                    <Card.Body>
                      <Form onSubmit={handleReminderSave}>
                        <Form.Group controlId="formReminderDate">
                          <Form.Label>Date</Form.Label>
                          <Form.Control type="date" value={reminderDate} onChange={(e) => setReminderDate(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="formReminderTime">
                          <Form.Label>Time</Form.Label>
                          <Form.Control type="time" value={reminderTime} onChange={(e) => setReminderTime(e.target.value)} required />
                        </Form.Group>
                        <div className="d-flex justify-content-between mt-3">
                          <Button variant="secondary" onClick={() => setReminder(false)}>Cancel</Button>
                          <Button type="submit" variant="primary">Done</Button>
                        </div>
                      </Form>
                    </Card.Body>
                  </Card>
                )}
              </div>
  </div>
</form>

<div class="description-info">Description Information</div>
<label for="description">Description:</label>
<input id="description" name="description" class="description-field"/>
  </div>
    </div>
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Head closeButton>
          <Modal.Title>Meeting Information</Modal.Title>
        </Modal.Head>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <Form.Group className="mb-3" controlId="formMeetingTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="New Meeting" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter location" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFrom">
              <Form.Label>From</Form.Label>
              <Form.Control type="datetime-local" required />
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
            <Button className='button1-sav' type="submit">
              Save
            </Button>
            <Button className="button2-can" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
 </>
    )
} 