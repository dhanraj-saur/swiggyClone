import React from 'react'

const ResturantPackaging = () => {


    return (
        <div className='dropdown'>
            <div className="dropdown-items_2">
                <p style={{ fontSize: "15px", }}>Gst and Restaurant Charges</p>
                <div className='dropDown-fee_2'>
                    <div className='gstCharge'>
                        <span>Resturant Packaging</span>
                        <span>₹ 5</span>
                    </div>
                    <div>
                        <div  className='gstCharge'>
                            <span>Restaurant GST</span>
                            <span>₹ 6</span>
                        </div>
                        <span style={{color: "gray", fontSize:"11px"}}>Swiggy plays no role in taxes <br /> and charges levied by the govt and <br /> resturant </span>
                    </div>
                    <div className='gstCharge'>
                        <span>GST on Plateform fee</span>
                        <span>₹ 90</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResturantPackaging