import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function ContactForm() {
  return (
    <Formik
        initialValues={{
            name: "",
            email: "",
            message: ""
        }}
        validate={(values) => {
            let error = {};

            /* Name validation */
            if(!values.name) {
                error.name = "Please enter a name"
            } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                error.name = "Name only can contain letters and spaces"
            }

              /* Email validation */
            if(!values.email) {
                error.email = "Please enter an email"
            } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                error.email = "Invalid email"
            }

            return error;
        }}  
        onSubmit={(values, {resetForm}) => {
            resetForm();
            console.log(values);
            console.log("Form send");
        }}
    >
        {({ errors, values, handleChange }) => (
            <Form name='contact' method='post' data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="top-form">
                    <div className='form-input'>
                        <label htmlFor="name">Name</label>
                        <Field 
                            type="text" 
                            id='name' 
                            name="name"
                            placeholder='Your name...' 
                            required 
                        />
                        <div className="error-container">
                            <ErrorMessage name='name' component={() => (
                                <div className='error'><BsFillInfoCircleFill />{errors.name}</div>
                            )} />
                        </div>
                    </div>
                    <div className='form-input'>
                        <label htmlFor="email">Email</label>
                        <Field 
                            type="email" 
                            id='email'
                            name="email" 
                            placeholder='email@email.com' 
                            required 
                        />
                        <div className="error-container">
                            <ErrorMessage name='email' component={() => (
                                <div className='error'><BsFillInfoCircleFill />{errors.email}</div>
                            )} />
                        </div>
                    </div>
                </div>
                <div className='form-input'>
                    <label htmlFor="message">Writte your message!</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="10" 
                        placeholder='SAY HI!' 
                        value={values.message} 
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <p className='centered-text'>
                    <button type="submit" className='buttonA'>Send</button>
                </p>
            </Form>
        )}
    </Formik>
  )
}
