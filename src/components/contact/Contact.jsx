import './contact.scss';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service', 'template', form.current, {
            publicKey: 'il0Bv6A_4zRXm9opU',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div className='contact'>
            <div className='title'>
                Message Box
            </div>

            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <div className='form-item'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="from_name" placeholder='John Doe' required />
                </div>
                <div className='form-item'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="user_email" placeholder='JohnDoe@example.com' required />
                </div>
                <div className='form-item'>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder='Hi, would you like to work with us?' required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>

        </div>
        
    );
}

export default Contact;