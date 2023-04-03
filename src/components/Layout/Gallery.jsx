import Card from '../Home/Card';

function Gallery(props) {
    return (
        <section className='gallery_container'>
            {props.accomodations.map((accomodation) => (
                <Card key={accomodation.id} accomodation={accomodation}/>
            ))}
        </section>
    )
}

export default Gallery;