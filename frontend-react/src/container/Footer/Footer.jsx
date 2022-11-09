import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;


  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name] : value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch(err => console.log(err));
  }
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me...</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:ecommercedock@gmail.com" className="p-text">ecommercedock@gmail</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +256 750 242627" className="p-text">+256 750 242627</a>
        </div>
      </div>

      {!isFormSubmitted ?
        (<div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className='p-tex' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className='p-tex' type="email" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>)
        : (<div>
          <h3 className="head-text">Thank you for getting in touch with me....</h3>
        </div>)
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)