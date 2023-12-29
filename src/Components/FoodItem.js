import React, { useContext } from 'react'
import { CLOUDINARY_URL } from '../utils/constant'
import userContext from '../utils/userContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { settings } from '../Function/FoodSlider';



const FoodItem = ({ foodItems }) => {

    const { userLogged } = useContext(userContext)


    return (
        <div className='foodItem'>
            <h1>{userLogged},What's on your mind?</h1>
            <div >
                <Slider {...settings}>
                    {
                        foodItems.map((item) => {
                            return (
                                <div key={item.id}>
                                    <img src={CLOUDINARY_URL + "/" + item.imageId} alt='foodItem' width={160} height={160} />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default FoodItem