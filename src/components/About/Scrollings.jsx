import React from 'react';
import Scrolling from '../About/Scrolling';

function Scrollings(props) {
    return (
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
    );
};

export default Scrollings;