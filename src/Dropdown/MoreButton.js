import React from 'react'

const MoreButton = ({ citiesAddress }) => {



    return (

        <div>

            <div className='showMore'>
                {
                    citiesAddress[1].card?.card?.cities?.map((item, index) => {

                        return (
                            <div className='showOpen'>
                                <div className='showOpen_1' key={citiesAddress[0].card?.card?.cities.id}>
                                    <a href={item.link}>
                                        <p>Best Resturant in {item.text}</p>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default MoreButton