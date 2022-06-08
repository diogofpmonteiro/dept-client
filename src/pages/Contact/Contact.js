import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState();
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleNameInput = (event) => setName(event.target.value);

  const handleEmailInput = (event) => setEmail(event.target.value);
  const handleMessageInput = (event) => setMessage(event.target.value);

  const handleSubmitForm = async (event) => {
    try {
      event.preventDefault();
      // logic to submit form with POST route setup
    } catch (error) {
      setErrorMessage("Something went wrong:", error);
    }
  };

  return (
    <div className='contact-container'>
      <h1 className='contact-title'>
        Question? <br /> We are here to help!
      </h1>
      <form action='submit' className='form' onSubmit={handleSubmitForm}>
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

          {/* Error message display, if it's caught by the trycatch statement */}
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default Contact;
