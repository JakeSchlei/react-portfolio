import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



function Contact() {
    function validateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Please Enter a Valid Email Address');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
       <section>
        <h1 className="d-flex justify-content-center mt-5">Get in Touch!</h1>
        <Form className='m-5'id='contact-form' onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label htmlFor="name">Name:</Form.Label>
                <Form.Control type='text' name="Name" defaultValue={name} onBlur={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="email">Email Address:</Form.Label>
                <Form.Control type='email' name="email" defaultValue={email} onBlur={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="message">Message:</Form.Label>
                <Form.Control name='Message' rows="5" defaultValue={message} onBlur={handleChange} />
            </Form.Group>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <Button variant="dark" type="submit">Submit!</Button>
        </Form>
       </section> 
    )
};

export default Contact;