import React from 'react'

const Contact = () => {
  return (
    <div className='container my-5'>
      <div className='bg-danger text-white pt-5 pb-5'>
        <h5>Contact Us</h5>
        <div className='d-flex'>
          <div className='p-2 flex-fill'>
            <p>
              Address: "Springdale Public School,<br /> 123 Education Lane, Cityville,<br /> State, ZIP Code"
            </p>
            <p>Phone: "+1 (123) 456-7890"</p>
            <p>Email: "info@springdale.edu"</p>
          </div>
          <div className='p-2 flex-fill'>
            <form>
              <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type='email' className='form-control' />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Message</label>
                <textarea className='form-control' rows='3'></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='row my-4'>
        <div className='col'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62241.30634475504!2d77.63299766499131!3d12.83800042876982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a7750e1c3%3A0x4a5cfc0fce5af71d!2sElectronic%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709545157930!5m2!1sen!2sin'
            frameBorder='0'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='location'
            height='400px'
            width='100%'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
