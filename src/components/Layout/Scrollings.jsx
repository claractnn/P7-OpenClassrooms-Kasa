import React from 'react';
import Scrolling from '../Layout/Scrolling';

function Scrollings(props) {
    return (
        <section className='scrollings-container'>
            <div className='scrollings'>
                {props.data.map((data, index) => {
                        return (
                            <Scrolling 
                                key={
                                    `${index}` +
                                    `${Object.values(data)}`.split(" ").join("").slice(10, 20)
                                }
                                title={Object.keys(data)}
                                content={Object.values(data)}
                            />
                        )
                    }
                )}
            </div>
        </section>
    );
};

export default Scrollings;