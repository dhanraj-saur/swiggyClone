import React from 'react'

const MoreCities = ({citiesAddress}) => {

    return (
        <div>
            <div>
                <hr />
                <p style={{ marginLeft: "170px", color: 'white', fontSize: "18px" }}>Other cities that we deliver:</p>
                <div className='citiesName'>
                    <div>
                        <div>
                            {
                                citiesAddress[0].card?.card?.cities?.map((item, index) => {

                                    return (
                                        <div className='citiesIndex' key={citiesAddress[0].card?.card?.cities.id}>
                                            <a href={item.link}>
                                                <p>{item.text}</p>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        {
                            citiesAddress[1].card?.card?.cities?.map((item, index) => {

                                return (
                                    <div className='citiesIndex' key={citiesAddress[0].card?.card?.cities.id}>
                                        <a href={item.link}>
                                            <p>{item.text}</p>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        {
                            citiesAddress[2].card?.card?.cities?.map((item, index) => {

                                return (
                                    <div className='citiesIndex' key={citiesAddress[0].card?.card?.cities.id}>
                                        <a href={item.link}>
                                            <p>{item.text}</p>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreCities