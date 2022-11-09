import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';


import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

    const links = ['home', 'work', 'skills', 'contact'];

  return (
    <nav className='app__navbar'>
        <div className="app__navbar-logo">
            <img src={images.logo} alt="logo" />
        </div>      
      <ul className="app__navbar-links">
              {links.map((item) => (
                <li key={`link-${item}`} className="app__flex p-text">
                  <div />
                  <a href={`#${item}`}>{ item }</a>
                </li>
            ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={()=> setToggle(true)} />
        {toggle && (
          <motion.div

          >
          <HiX onClick={()=> setToggle(false)}/>
          <ul>
          {links.map((item) => (
              <li key={item}>
                <a onClick={()=> setToggle(false)} href={`#${item}`}>{ item }</a>
              </li>
            ))}
          </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

