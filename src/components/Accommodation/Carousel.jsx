import React, { Component } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import PictureCounter from './PictureCounter';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pictureIndex: 0 
        }
    }

    handleArrowClick = (direction) => {
        const { pictures } = this.props;
        const { pictureIndex } = this.state;

        //Calculate the new index of the image according to the direction
        let newPictureIndex;
        if (direction === 'previous') {
            newPictureIndex = pictureIndex === 0 ? pictures.length - 1 : pictureIndex - 1;
        } else if (direction === 'next') {
            newPictureIndex = pictureIndex === pictures.length - 1 ? 0 : pictureIndex + 1;
        }

        // Updates the state of the component with the new image index
        this.setState({ pictureIndex: newPictureIndex });
    };

    render() {
        const { pictures, title } = this.props;
        const { pictureIndex } = this.state;
        return (
            <section className='carousel'>
                {
                    <img
                    src={pictures[pictureIndex]}
                    alt={`${title} ${pictureIndex +1}`}
                    />
                }
            <PictureCounter pictures={pictures} pictureIndex={pictureIndex} />
            {pictures.length > 1 && (
                <div className='carousel_arrows'>
                    <div
                        className='carousel_arrow'
                        onClick={() => this.handleArrowClick('previous')} // Use handleArrowClick method to handle user click
                        >
                            <MdArrowBackIosNew className='arrow' />
                        </div>
                        <div
                        className='carousel_arrow'
                        onClick={() => this.handleArrowClick('next')} 
                        >
                            <MdArrowForwardIos className='arrow' />
                        </div>
                </div>
            )}
            </section>
        )
    }
}

export default Carousel;

