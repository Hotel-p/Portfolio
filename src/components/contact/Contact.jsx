import './contact.scss';

function Contact() {
    return (
        <div className='contact'>
            <div className='title'>
                Message Box
            </div>

            <form className='contact-form'>
                <div className='form-item'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className='form-item'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className='form-item'>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>

        </div>
        
    );
}

export default Contact;