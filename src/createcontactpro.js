import React, { useState } from 'react';
import profileImage2 from './assets/profile2.jpg';
import Facebookpic from './assets/facebookpic.jpg'; 
import Instagrampic from './assets/instagrampic.jpg';
import Twitterpic from './assets/twitterpic.jpg'; 
import LinkedInpic from './assets/linkedinpic.jpg'; 

export default function CreateContactPro() {
  const [view, setView] = useState('Overview');

  return (
    <>
      <header className='mainn-header'>
        <div className='task-icon'>
          <div className='contactpro-alighn'>
            <div className='header-left'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="m10.95 16.866l4.958-4.958l-.72-.72l-4.244 4.245l-2.138-2.139l-.714.714zM6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3H14.5L19 7.5v11.885q0 .69-.462 1.153T17.384 21zM14 8V4H6.616q-.231 0-.424.192T6 4.615v14.77q0 .23.192.423t.423.192h10.77q.23 0 .423-.192t.192-.424V8zM6 4v4zv16z" />
              </svg>Contacts | David Luca
            </div>
            <div className="editcontbutt-profile">
              <button>Edit</button>
            </div>
          </div>
        </div>
      </header>
      <div className='creatcontpro-maincard'>
        <div className="profile-container2">
          <img className="profile-image2" src={profileImage2} alt="Profile2" />
          <div className="profile-name2">John Doe</div>
        </div>
        <div className="view-switch">
          <button onClick={() => setView('Overview')} className={view === 'Overview' ? 'active' : ''}>Overview</button>
          <button onClick={() => setView('Timeline')} className={view === 'Timeline' ? 'active' : ''}>Timeline</button>
        </div>
        {view === 'Overview' ? (
          <>
            <div className='createcontpro-card1'>
              <div className='profile-item'>
                <span className='label'>Email</span><span className='value'>davidk@kig.in</span>
              </div>
              <div className='profile-item'>
                <span className='label'>Phone</span><span className='value'>55-55-77</span>
              </div>
              <div className='profile-item'>
                <span className='label'>Department</span><span className='value'>photography</span>
              </div>
              <div className='profile-item'>
                <span className='label'>DOB</span><span className='value'>12/5/2024</span>
              </div>
            </div>
            <div className='createcontpro-card2'>
              <div className='social-profiles'>
                <div className='social-row'>
                  <div className='social-logo facebook-logo'>
                    <div className='text-facebook'></div>
                    <div className='image-circle'>
                      <img className="social-pic" src={Facebookpic} alt="Facebook" />
                    </div>
                  </div>
                  <div className='social-logo linkedin-logo'>
                    <div className='text-linkedin'></div>
                    <div className='image-circle'>
                      <img className="social-pic" src={LinkedInpic} alt="LinkedIn" />
                    </div>
                  </div>
                </div>
                <div className='social-row'>
                  <div className='social-logo instagram-logo'>
                    <div className='text-instagram'></div>
                    <div className='image-circle'>
                      <img className="social-pic" src={Instagrampic} alt="Instagram" />
                    </div>
                  </div>
                  
                  <div className='social-logo twitter-logo'>
                    <div className='text-twitter'></div>
                    <div className='image-circle'>
                      <img className="social-pic" src={Twitterpic} alt="Twitter" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='createcontpro-card3'>
              <div className='profile2-item'>
                <span className='label1'>Street</span><span className='value-1'>&nbsp;&nbsp;&nbsp;&nbsp;Nowwhere St.</span>
              </div>
              <div className='profile2-item'>
                <span className='label1'>City</span><span className='value-1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nospace City</span>
              </div>
              <div className='profile2-item'>
                <span className='label1'>State</span><span className='value-1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nostate City</span>
              </div>
              <div className='profile2-item'>
                <span className='label1'>Zip</span><span className='value-1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;458762</span>
              </div>
              <div className='profile2-item'>
                <span className='label1'>Country</span><span className='value-1'>Finland</span>
              </div>
            </div>
          </>
        ) : (
          <div className='timeline-content'>
            <p>Timeline content goes here...</p>
          </div>
        )}
      </div>
    </>
  );
}
