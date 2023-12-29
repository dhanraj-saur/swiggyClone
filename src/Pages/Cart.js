import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import ListItem from '../Components/ListItem'
import { clearCart } from '../utils/cartSlice'
// import emptyCart from "../Image/emptyCart.png"
import { CLOUDINARY_URL } from '../utils/constant'

import { VEG } from '../utils/constant'
import { NONVEG } from '../utils/constant'
import discountIcon from '../Image/discount.png'
import infoIcon from '../Image/info.png'
import BaseFare from '../Dropdown/BaseFare'
import PlateformFee from '../Dropdown/PlateformFee'
import ResturantPackaging from '../Dropdown/ResturantPackaging'
import Modal from '../Model/Model'
import Model from '../Model/Model'

const Cart = () => {

    const [drop, setDrop] = useState(false)
    const [dropDown, setDropDown] = useState(false)
    const [dropInfo, setDropInfo] = useState(false)
    const [show, setShow] = useState(false)

    const [close, setClose] = useState(false)

    const [textChange, setTextChange] = useState(false)

    const dispatch = useDispatch()

    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);

    const storeDetails = useSelector((store) => store.cart.storeDetails)
    // console.log(storeDetails);

   

    const onMouseEnter = () => {
        setDrop(true)

    }
    const onMouseLeave = () => {
        setDrop(false)

    }
    const onMouseEnterHover = () => {
        setDropDown(true)


    }
    const onMouseLeaveHover = () => {
        setDropDown(false)

    }

    const onHandleMouseEnter = () => {
        setDropInfo(true)
    }

    const onHandleMouseLeave = () => {
        setDropInfo(false)
    }


    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const handleTextChange = () => {
        setTextChange(!textChange)
    }

    const couponApply = () => {
        setShow(!show)

    }



    return (

        <div>
            {close == true ? <Model /> :
                <div className='cartLog'>
                    <div className='cartLog-1'>
                        <div className='right'>
                            <div>
                                <div>
                                    <h2>Add a delivery Address</h2>
                                </div>
                                <div style={{ marginTop: "-20px", color: "gray" }}>
                                    <span>You seem to be in the new location</span>
                                </div>
                            </div>
                            <div className='address'></div>
                        </div>
                        <div className='right-1'>
                            <h3>Payments</h3>
                        </div>
                    </div>
                    <div className='cartLog-2'>
                        <div className='left'>
                            <div className='left-header'>
                                <div>
                                    <img style={{ marginLeft: "14px" }} src={CLOUDINARY_URL + "/" + cartItems[0]?.card?.info?.imageId} width={70} height={70} />
                                </div>
                                <div>
                                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>{storeDetails.storeName}</span><br />
                                    <span>{storeDetails.area}</span>
                                </div>
                            </div>

                            <div className='left-middle'>
                                <div className='left-middle_1'>
                                    <div >
                                        {cartItems[0]?.card?.info?.isVeg ? <img src={VEG} width={18} height={18} /> : <img src={NONVEG} width={16} height={16} />}
                                    </div>
                                    <div>
                                        <p style={{ fontSize: "14px" }}>{cartItems[0]?.card?.info?.name.slice(0, 15)}</p>
                                    </div>
                                    <div className='qtyBtn'>
                                        <button style={{ color: "lightgray" }} className='btn'>–</button>
                                        <p style={{ color: "#60b246" }} >1</p>
                                        <button style={{ color: "#60b246" }} className='btn'>+</button>
                                    </div>
                                    <div>
                                        <span>₹ {cartItems[0]?.card?.info?.price ? cartItems[0]?.card?.info?.price / 100 : cartItems[0]?.card?.info?.defaultPrice / 100}</span>
                                    </div>
                                </div>
                                <div className='textArea'>
                                    <textarea className='text' placeholder='❝Any suggestions? We will pass it on...❞'></textarea>
                                </div>
                                <div className='check-box'>
                                    <div >
                                        <div className='check'>
                                            <input type="checkbox" className="largerCheckbox" name="checkBox" onChange={handleTextChange} />
                                            <p>Opt in for No-contact Delivery</p>
                                        </div>
                                        {
                                            textChange ? (
                                                <div className='cod'>
                                                    <p style={{ fontSize: "12.8px", color: "gray" }}>Our delivery partner will call to confirm. Please ensure that your address has all the required details.</p>
                                                </div>
                                            ) : (
                                                <div className='cod'>
                                                    <p style={{ fontSize: "12.8px", color: "gray" }}>Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)</p>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className='applyCoupon' onClick={couponApply}>
                                    <img style={{ marginLeft: "20px" }} src={discountIcon} alt='discountIcon' width={20} height={20} />
                                    <p>Apply Coupon</p>
                                </div>
                                {show && <Modal onClose={() => setClose(false)} />}
                                <div className='billsAdd'>
                                    <p>Bill Details</p>
                                    <div className='bills' >
                                        <div className='billDetails'>
                                            <span>Item Total</span>
                                            <span>₹ {cartItems[0]?.card?.info?.price ? cartItems[0]?.card?.info?.price / 100 : cartItems[0]?.card?.info?.defaultPrice / 100}</span>
                                        </div>
                                        <div className='billDetails'>
                                            <div className='icon'>
                                                <span>Delivery Fee | {storeDetails.distance}s</span>
                                                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                                    <img src={infoIcon} alt='infoIcon' width={18} height={18} style={{ cursor: "pointer" }} />
                                                </div>
                                                {drop && <BaseFare />}
                                            </div>
                                            <span>₹{storeDetails.totalFee / 100}</span>
                                        </div>
                                    </div>
                                    <hr style={{ color: "lightgray" }} />
                                    <div>
                                        <div className='tips'>
                                            <span>Delivery Tip</span>
                                            <span style={{ color: "rgb(228, 109, 71)" }}>Add Tip</span>
                                        </div>
                                        <div className='tips'>
                                            <div className='tips_1'>
                                                <span>Platform fee</span>
                                                <div onMouseEnter={onMouseEnterHover} onMouseLeave={onMouseLeaveHover}>
                                                    <img src={infoIcon} alt='infoIcon' width={18} height={18} style={{ cursor: "pointer" }} />
                                                </div>
                                                {dropDown && <PlateformFee />}
                                            </div>
                                            <div>
                                                <span>8</span>
                                            </div>
                                        </div>
                                        <div className='tips'>
                                            <div className='tips_1'>
                                                <span>GST and Restaurant Charges</span>
                                                <div onMouseEnter={onHandleMouseEnter} onMouseLeave={onHandleMouseLeave}>
                                                    <img src={infoIcon} alt='infoIcon' width={18} height={18} style={{ cursor: "pointer" }} />
                                                </div>
                                                {dropInfo && <ResturantPackaging />}
                                            </div>
                                            <div>
                                                <span>₹12.8</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='left-footer'>
                                <h3>To pay</h3>
                            </div>
                        </div>
                        <div className='saving'>
                            <span style={{ color: "#60b246" }}>Saving of ₹2 </span>
                        </div>
                        <div className='note'>
                            <div>
                                <div className='note_1'>
                                    <p>Review your order and address <br />details to avoid cancellations</p>
                                    <span style={{ fontSize: "12px", fontWeight: '500' }}><span style={{ color: "red" }}>Note:</span> If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.</span>
                                    <p style={{ color: "gray", fontSize: "13px" }}>Avoid cancellation as it leads to food wastage.</p>
                                    <p className='cancle'>Read cancellation policy</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            }
            <button onClick={handleClearCart}>ClearCart</button>


        </div>

    )
}

export default Cart