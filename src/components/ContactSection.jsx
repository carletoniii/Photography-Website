import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactSection() {
    const [formData, setFormData] = useState({
        from_name: '',
        to_name: 'Your Name or Generic Greeting', // Update as needed
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: formData.from_name,
            to_name: formData.to_name, // Ensure this matches your EmailJS template variable names
            message: formData.message,
        };

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({ from_name: '', to_name: '', message: '' }); // Clear the form
            }, (error) => {
                console.error('FAILED...', error);
                alert('Failed to send the message. Please try again.');
            });
    };

    return (
        <div className="contact-section">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field"> {/* Container for each field */}
                    <label htmlFor="from_name">Your Name:</label>
                    <input type="text" id="from_name" name="from_name" value={formData.from_name} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label htmlFor="to_name">To Name (Optional):</label>
                    <input type="text" id="to_name" name="to_name" value={formData.to_name} onChange={handleChange} />
                </div>
                <div className="form-field">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactSection;
