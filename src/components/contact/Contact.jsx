import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8s44qod', 'template_qplnwgv', form.current, 'j_cjfOPI45XIEf8ph')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Any Queries</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='co-icon'/>
            <h4>Email</h4>
            <h5>k.saiteja456@gmail.com</h5>
            <a href="mailto:k.saiteja456@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='co-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=916303952937" target = '_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type='email' name='email' placeholder='Your Emai' required />
          <textarea name="message" rows='7' placeholder="Enter Message" required />
          <button type='submit' className='btn btn-primary'>Send the message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact