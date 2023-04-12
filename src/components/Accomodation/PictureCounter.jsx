import React from 'react';

function PictureCounter(pictures, picture) {
    return (
        <div className='picture_counter'>
            {picture + 1}/{pictures.length}
        </div>
    )
}

export default PictureCounter;