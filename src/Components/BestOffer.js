import React from 'react'
import { CLOUDINARY_URL } from '../utils/constant'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { settings } from '../Function/Slider';

const BestOffer = ({ bestOffers }) => {


    return (
        <div className='bestOffers'>
            <h1>Best Offers for you</h1>

            <div className='offer-container'>
                <Slider {...settings}>
                    {
                        bestOffers.map((offer, index) => {
                            return (
                                <div key={index}>
                                    <img className='image_offers' src={CLOUDINARY_URL + "/" + offer.imageId} />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>

        </div>
    )
}

export default BestOffer