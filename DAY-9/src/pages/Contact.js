import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';


const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lmkubz8', 'template_7yxksxo', e.target, '4SjQhP0r6XkGdBebo')
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Error sending email.');
        }
      );

      
    e.target.reset();
  };

  return (
    <div className="contact">
      <div className="contact1">
        <div className="contact2">
          <form onSubmit={sendEmail}>
            <div className="input">
              <h1>ContactUs</h1>
              <input
                type="text"
                name='name_1'
                placeholder="Username"
                required
              />
              <input
                type="text"
                name='contact_1'
                placeholder="Contact Number"
                required
                
              />
              <input
                type="email"
                name='mail_1'
                placeholder="Email"
                required
               
              />
              <textarea name='textarea'
               placeholder="Enter your comments"
                rows={6}>

              </textarea>
                
              <button className="btn" type="submit">
                Submit
              </button>
                
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;