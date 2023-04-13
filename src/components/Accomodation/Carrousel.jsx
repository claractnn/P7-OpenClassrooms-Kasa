import React, { Component } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import PictureCounter from './PictureCounter';

class Carrousel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pictureIndex: 0 
        }
    }

    handleArrowClick = (direction) => {
        const { pictures } = this.props;
        const { pictureIndex } = this.state;

        //Calculer le nouvel index de l'image en fonction de la direction
        let newPictureIndex;
        if (direction === 'previous') {
            newPictureIndex = pictureIndex === 0 ? pictures.length - 1 : pictureIndex - 1;
        } else if (direction === 'next') {
            newPictureIndex = pictureIndex === pictures.length - 1 ? 0 : pictureIndex + 1;
        }

        // Met à jour l'état du composant avec le nouvel index de l'image
        this.setState({ pictureIndex: newPictureIndex });
    };

    render() {
        const { pictures, title } = this.props;
        const { pictureIndex } = this.state;
        return (
            <section className='carrousel'>
                {
                    <img
                    src={pictures[pictureIndex]}
                    alt={`${title} ${pictureIndex +1}`}
                    />
                }
                <PictureCounter pictures={pictures} pictureIndex={pictureIndex} />
                {pictures.length > 1 && (
                    <div>
                    <div
                        className='carrousel_arrow carrousel_arrow_left'
                        onClick={() => this.handleArrowClick('previous')} // Utilise la méthode handleArrowClick pour gérer le clic de l'utilisateur
                        >
                        <IoIosArrowBack className='arrow' />
                        </div>
                        <div
                        className='carrousel_arrow carrousel_arrow_right'
                        onClick={() => this.handleArrowClick('next')} // Utilise la méthode handleArrowClick pour gérer le clic de l'utilisateur
                        >
                        <IoIosArrowForward className='arrow' />

                        </div>
                    </div>
                )}
            </section>
        )
    }
}

export default Carrousel;