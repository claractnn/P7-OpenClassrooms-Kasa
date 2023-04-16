import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <section className='collapse'>
          <div className='collapse_button' onClick={toggleOpen}>
            <h2>{title}</h2>
            <div className={`arrow-container ${isOpen ? "arrow-container-up" : ""}`}>
              <IoIosArrowDown className="arrow" />
            </div>
          </div>
          {isOpen && <div className='collapse_content'>{content}</div>}
        </section>
      );
};

export default Collapse;

