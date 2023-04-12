import React, { Component } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import PictureCounter from '';

class Carrousel extends Component {
    constructor(props) {
        super(props);
        this.state = { picture: 0 }
    }

    render() {
        const { pictures, title } = this.props;
        return (
            <section className='carrousel'>
                {
                    <img
                    src={`${pictures[this.state.picture]}`}
                    alt={`${title} ${this.state.picture +1}`}
                    />
                }
                <PictureCounter pictures={pictures} picture={this.state.picture} />
                {pictures.length > 1 && (
                    <div>
                        <div className="carrousel_arrow carrousel_arrow_left"
                        onClick={ () => {
                            this.state.picture === 0 
                            ? this.setState({ picture: pictures.length - 1 }) 
                            : this.setState({ picture: this.state.picture - 1 })
                        }}
                        >
                        </div>
                        <div className="carrousel_arrow carrousel_arrow_right"
                        onClick={ () => 
                            this.state.picture === pictures.length - 1 
                                ? this.setState({ picture: 0})
                                : this.setState({ picture: this.state.picture + 1 })
                            }
                        >
                        <MdArrowForwardIos className='arrow' />

                        </div>
                    </div>
                )}
            </section>
        )
    }
}

export default Carrousel;