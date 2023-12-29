import React from 'react'
import { CLOUDINARY_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { VEG } from '../utils/constant'
import { NONVEG } from '../utils/constant';
// import starIcon from '../Image/star.png'


const ListItem = ({ items }) => {
    // console.log(items);
    const dispatch = useDispatch()



    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div>
            {
                items.map((item) => {

                    return (
                        <div className='items-des' key={item.card.info.id}>
                            <div className='item-details'>
                                <div>
                                    <div>
                                        <span>{item.card.info.isVeg ? <img src={VEG} width={20} height={20} alt='veg' /> : <img src={NONVEG} width={16} height={16} />}</span>
                                        {/* <span>{item.card.info.isBestseller ? <img src={starIcon} alt='star' width={20} height={20} /> : <p></p>}</span><br /> */}
                                    </div>
                                    <div>
                                        <span>{item.card.info.name}</span><br />
                                        <div className='offPrice'>
                                            <span>₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                                            {/* <span style={{ backgroundColor: "#FAE8E3", color: "#DB6742", fontSize: "10px" }}> | {item?.card?.info?.offerTags[0]?.title} | {item?.card?.info?.offerTags[0]?.subTitle}</span> */}
                                        </div>
                                        <p style={{ fontSize: "12px", color: "grey" }}>{item.card.info.description}</p>
                                    </div>
                                </div>
                                <div className='img-btn'>
                                    <img className='img' src={CLOUDINARY_URL + "/" + item.card.info.imageId} /><br />
                                    <button className='button' onClick={() => handleAddItem(item)}>Add +</button>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListItem