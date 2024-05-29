
import React, { useState,Link } from 'react';
import Companypic from './assets/company.jpg';
import Contactpic from './assets/image.jpg';





export default function CreateContact(){
 
   
return (
    <>
         <header className='header'>
        <div className='task-icon'>
          <div className='header-left'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	<path fill="currentColor" d="m10.95 16.866l4.958-4.958l-.72-.72l-4.244 4.245l-2.138-2.139l-.714.714zM6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3H14.5L19 7.5v11.885q0 .69-.462 1.153T17.384 21zM14 8V4H6.616q-.231 0-.424.192T6 4.615v14.77q0 .23.192.423t.423.192h10.77q.23 0 .423-.192t.192-.424V8zM6 4v4zv16z" />
</svg>Contact | Create Contact
</div>
</div>
</header>
   {/* main content */}
    <div className='main-div-createcont'>
   <div className="creatcont-maincard">
    <div className='headcreate-butt'>
   <div className="add-new-contact"><h2>Create Contact</h2></div>
   <div className='create-bothbuttalighn'>
   <div className="savecrt-button">
    <button>Save</button>
   </div>
   <div className="cancelcrt-button">
    <button>Cancel</button>
   </div>
   </div>
   </div>
   <div className='logos-container'>
            <div className='contact-image'>
            <div className='text-area'>Contact Image</div>
                <div className='image-circle'>
                <img className="contact-pic" src={Contactpic} alt="contact" />
                </div>
              
            </div>
            <div className='company-logo'>
            <div className='text-area'>Company Logo</div>
                <div className='image-circle'>
                <img className="company-pic" src={Companypic} alt="company" />
                </div>
                </div>
                </div>
           <div className='contact-info'>Contact Information</div>   
          
           <form className='my-form'>
           <div className='contact-fields'>
         <div className="form-row">
        <div className="form-column">
          <label htmlFor="firstName">First Name&nbsp;&nbsp;&nbsp;</label>
          <input type="text" id="firstName" name="firstName" />
        
        </div>
       <div className="form-column">
          <label htmlFor="leadSource">Lead Source&nbsp;</label>
          <input type="text" id="leadSource" name="leadSource" />
        </div>
        <div className="form-column">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" />
        </div>
        <div className="form-column">
          <label htmlFor="email">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="email" id="email" name="email" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-column">
          <label htmlFor="lastName">Last Name&nbsp;&nbsp;</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className="form-column">
          <label htmlFor="department">Department</label>
          <input type="text" id="department" name="department" />
        </div>
        <div className="form-column">
          <label htmlFor="phone">Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="form-column">
          <label htmlFor="company">Company&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" id="company" name="company" />
        </div>
      </div>
      </div>  
    </form>
             
     <div className='soc-handles'>Social Handles</div>
     <form className='social-hand'>
         <div className='form-row'>
          <div className="form-column">
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" name="facebook" />
          </div>
          </div>
       <div className="form-column">
          <label htmlFor="linkedin">Linkedin</label>
          <input type="text" id="linkedin" name="linkedin" />
        </div>
       <div className='form-row'>
        <div className="form-column">
          <label htmlFor="instagram">Instagram</label>
          <input type="text" id="instagram" name="instagram" />
        </div>
       </div>
        </form>
      <div className='address-infohead'>Address Information</div>
      <form className='my-form'>
           <div className='contact-fields'>
         <div className="form-row">
        <div className="form-column">
          <label htmlFor="firstName">Street</label>
          <input type="text" id="firstName" name="firstName" />
        
        </div>
       <div className="form-column">
          <label htmlFor="leadSource">State</label>
          <input type="text" id="leadSource" name="leadSource" />
        </div>
      
      </div>

      <div className="form-row">
        <div className="form-column">
          <label htmlFor="lastName">City</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className="form-column">
          <label htmlFor="department">Zip</label>
          <input type="text" id="department" name="department" />
        </div>
     
      </div>
      </div>  
    </form>
  
  </div>
  </div>

  
 </>
    )
}  