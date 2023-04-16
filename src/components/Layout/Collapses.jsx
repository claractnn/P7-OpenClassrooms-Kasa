import React from 'react';
import Collapse from './Collapse';

function Collapses(props) {
    return (
        <section className='collapses-container'>
            <div className='collapses'>
                {props.data.map((data, index) => {
                        return (
                            <Collapse 
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

export default Collapses;

