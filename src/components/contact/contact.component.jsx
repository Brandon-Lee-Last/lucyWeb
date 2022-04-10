import React from 'react'
import './contact.styles.css'
import { Animator, ScrollPage, MoveIn } from "react-scroll-motion";

const Contact = () => {
  return (
    <ScrollPage page={3}>
    <div className="body">
        
    <div className="socialMedia">
        <Animator animation={MoveIn(-200, 0)}>
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info-text">
                <h2>Phone Number</h2>
                <span>072 415 1468</span> 

              </div>
            </div>            
          </div>                
        </div>
        </Animator>

        <Animator animation={MoveIn(0, 200)}>
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info-text">
                <h2>Email</h2>
                <span>lucyourique@icloud.com</span> 
              </div>
            </div>            
          </div>                
        </div>
        </Animator>

        <Animator animation={MoveIn(200, 0)}>
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info-text">
                <h2>Get In Contact</h2>
                <span>Do not hesitate to contact me to discuss a possible project or learn more about my work</span>
              </div>
            </div>            
          </div>                
        </div>
        </Animator>

        </div>
        
        {/*<Animator animation={MoveIn(0, 300)}>*/}
        {/*<form className="contact-us">*/}
        {/*    <input placeholder="Name" required="" type="text" />*/}
        {/*    <input name="customerEmail" placeholder="Email" type="email" />*/}
        {/*    <textarea name="message" placeholder="Message" ></textarea>*/}
        {/*    <button type="button">SEND</button>*/}
        {/*</form>*/}
        {/*</Animator>*/}
    </div>
    </ScrollPage>
  )
}

export default Contact