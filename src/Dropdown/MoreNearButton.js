import React from 'react'

const MoreNearButton = ({ BrandsContent }) => {

    console.log(BrandsContent);

    return (
        <div className='showMore'>
            {
                BrandsContent[1].card?.card?.brands?.map((item, index) => {

                    return (
                        <div className='showOpen' >
                            <div className='showOpen_1' key={BrandsContent[0].card?.card?.brands.id}>
                                <a href={item.link}>
                                    <p>{item.text}</p>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MoreNearButton;