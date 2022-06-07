import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1 className='contact-title'>
        Question? <br /> We are here to help!
      </h1>
      <form action='submit' className='form'>
        <div className='form-field'>
          <label htmlFor='name'>Name</label>
          <input className='form-input' type='text' name='name' />
        </div>

        <div className='form-field'>
          <label htmlFor='email'>Email</label>
          <input className='form-input' type='email' name='email' required />
        </div>

        <div className='form-field'>
          <label htmlFor='message'>Message</label>
          <textarea className='form-input' type='text' name='message' />
        </div>
        <div className='btn-container'>
          <button type='submit' className='form-btn'>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
