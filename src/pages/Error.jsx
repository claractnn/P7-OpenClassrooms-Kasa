import React from 'react';

function Error() {
    return ( 
        <section className='error'>
            <div className='error_title'>
                <h2 className='error_title_number'>404</h2>
                <p className='error_title_message'>Oups ! La page que vous demandez n'existe pas.</p>
            </div>
            <div>
                <p className='error_button'>Retourner sur la page d'accueil</p>
            </div>

        </section>
    )
}

export default Error;