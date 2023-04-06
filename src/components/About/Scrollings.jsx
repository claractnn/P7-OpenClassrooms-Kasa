import React from 'react';
import Scrolling from '../About/Scrolling';

function Scrollings(props) {
    return (
        <div className='scrollings'>
            {props.datas.map((data, index) => {
                    return (
                        <Scrolling 
                            key={
                                `${index}` +
                                `${Object.values(data)}`.split(" ").join("").slice(10, 20)
                            }
                            title={<h2>{Object.keys(data)}</h2>}
                            content={<p>{Object.values(data)}</p>}
                        />
                    )
                }

            )}
        </div>
    )

}

export default Scrollings;