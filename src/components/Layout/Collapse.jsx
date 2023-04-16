import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='collapse'>
            <div className='collapse_button'
                onClick={() => {
                        isOpen ? setIsOpen(false) : setIsOpen(true)
                }}
            >
                <h2>{title}</h2>
                <div className={isOpen ? "arrow-container arrow-container-up" : "arrow-container"}>
                    <IoIosArrowDown className="arrow" />
                </div> 
            </div>
            {isOpen && <div className='collapse_content'>{content}</div>}
        </section>
    )
};

export default Collapse;

