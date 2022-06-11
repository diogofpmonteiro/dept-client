import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);

  const handleNameInput = (event) => setName(event.target.value);

  const handleEmailInput = (event) => setEmail(event.target.value);
  const handleMessageInput = (event) => setMessage(event.target.value);

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();

      const requestBody = { name, email, message };

      const result = await fetch("http://localhost:3000/messages/", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const data = await result.json();

      // console.log(data);
      setSuccessMessage("Message sent successfully! Thank you for contacting us.");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setSuccessMessage(undefined);
      }, 3000);
    } catch (error) {
      setErrorMessage("Something went wrong:", error);
    }
  };

  return (
    <div className='contact-container'>
      <h1 className='contact-title'>Question? We are here to help!</h1>
      <form action='submit' className='form' onSubmit={handleFormSubmit}>
        <div className='form-field'>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input className='form-input' type='text' name='name' value={name} onChange={handleNameInput} />
        </div>

        <div className='form-field'>
          <label className='form-label' htmlFor='email'>
            Email
          </label>
          <input className='form-input' type='email' name='email' value={email} onChange={handleEmailInput} required />
        </div>

        <div className='form-field'>
          <label className='form-label' htmlFor='message'>
            Message
          </label>
          <textarea className='form-input area' type='text' name='message' value={message} onChange={handleMessageInput} />
        </div>
        <div className='btn-container'>
          <button type='submit' className='form-btn'>
            Send
          </button>

          {/* Success message display, if it's sent successfully */}
          {successMessage && <p>{successMessage}</p>}
          {/* Error message display, if it's caught by the trycatch statement */}
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default Contact;
