import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactSection() {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
    });
    const [emailError, setEmailError] = useState('');
    const [submitted, setSubmitted] = useState(false); // State to track form submission

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        if (!validateEmail(formData.from_email)) {
            setEmailError('Please enter a valid email address');
            return;
        }

        setEmailError('');

        const templateParams = {
            from_name: formData.from_name,
            from_email: formData.from_email,
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
                setFormData({ ...formData, message: '' }); // Clear only the message field
                setSubmitted(true); // Set submitted to true after successful form submission
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert('Failed to send the message. Please try again.');
            });

        return false; // Explicitly prevent any default behavior associated with form submission
    };

    return (
        <div className="contact-section">
            <h2 className='contact-section-title'>CONTACT ME</h2>
            <div className="contact-info">
                <p>Email: carletonfosteriii@gmail.com</p>
            </div>
            {submitted ? (
                <div className="thank-you-message">
                    THANK YOU FOR YOUR MESSAGE!
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="from_name">NAME</label>
                        <input type="text" id="from_name" name="from_name" value={formData.from_name} onChange={handleChange} required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="from_email">EMAIL</label>
                        <input type="email" id="from_email" name="from_email" value={formData.from_email} onChange={handleChange} required />
                        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    </div>
                    <div className="form-field">
                        <label htmlFor="message">MESSAGE</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <button type="submit">SEND</button>
                </form>
            )}
        </div>
    );
}

export default ContactSection;
