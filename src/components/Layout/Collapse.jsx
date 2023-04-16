import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <section className='collapse'>
          <div className='collapse_button' onClick={toggleCollapse}>
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

