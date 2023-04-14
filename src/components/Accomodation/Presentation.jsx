import React from 'react';

function Presentation({ title, location, tags, ratin, host }) {
    return (
        <section className='presentation'>
            <div>
                <h1>{title}</h1>
                <h2>{location}</h2>
                <div className='tags'>
                    {tags.map((tag, index) => {
                        return <Tag key={index} tag={tag} />;
                    })}
                </div>
            </div>

        </section>
    )
}

export default Presentation;