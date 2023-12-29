import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { CLOUDINARY_URL } from '../utils/constant';
import crossIcon from "../Image/cross.png";


const Model = () => {

    const [closeModal, setCloseModal] = useState(false)

    const Coupon = useSelector((store) => store.cart.storeDetails)
    console.log(Coupon);




    return (




        <div className='modal-wrapper' onClick={() => {
            setCloseModal(!closeModal)
        }}>
            <div className='modal-container'>


                <div>
                    <img src={crossIcon} alt='crossIcon' height={30} width={30} />
                </div>



                <div className='coupon'>
                    <p style={{ color: '#7e808c', fontWeight: "600", fontSize: "12px" }}>AVAILABLE COUPONS</p>
                    <div>
                        {
                            Coupon?.couponCode?.map((item, index) => {
                                console.log(item);
                                return (
                                    <div>
                                        <div className='coupon_1'>
                                            <div className='coupon-img'>
                                                <img src={CLOUDINARY_URL + "/" + item.info.offerLogo} width={30} height={30} />
                                            </div>
                                            <div className='coupon-code'>
                                                <p>{item.info.couponCode.slice(3)}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <span>Get {Coupon.couponCode[0].info.header.slice(0, 3)} off</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model