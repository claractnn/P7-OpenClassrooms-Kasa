import React from "react";
import { AiFillStar } from 'react-icons/ai';

function Rating({ rating }) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <section className="rating_container">
            {stars.map((num) => (
                <AiFillStar 
                key={num}
                className={
                    num > rating ? "star star-empty" : "star star-full"
                }
                />
            ))}
        </section>
    )
}

export default Rating;