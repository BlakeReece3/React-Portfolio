import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (formValidator()) {
          
          // Reset form
          setFormState({ name: "", email: "", message: "" });
          setErrorMessage("");
        }
      };

      const formValidator = () => {
        if (!formState.name.trim()) {
          setErrorMessage("Name is required.");
          return false;
        }
    
        if (!formState.email.trim()) {
          setErrorMessage("Email is required.");
          return false;
        }
    
        if (!validateEmail(formState.email.trim())) {
          setErrorMessage("Invalid email address.");
          return false;
        }
    
        if (!formState.message.trim()) {
          setErrorMessage("Message is required.");
          return false;
        }
    
        setErrorMessage("");
        return true;
      };

        const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
        };

      return (
        <section>
          <div className="contact-center">
            <h2 className="contact-header">Contact Me</h2>
          </div>
          <div>
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <br />
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <br />
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <br />
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="5"
                  className="form-control"
                />
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </section>
      );
    }

export default Contact;