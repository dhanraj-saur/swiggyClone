import React from 'react'

import { useSelector } from 'react-redux'

const BaseFare = () => {


  const storeDetails = useSelector((store) => store.cart.storeDetails)
  console.log(storeDetails);

  return (
    <div className='dropdown'>
      <div className="dropdown-items">
        <p>Delivery fee breakup for this order</p>
        <div className='dropDown-fee'>
          <span>Base fee</span>
          <span>₹ {storeDetails.totalFee / 100}</span>
        </div>
      </div>
    </div>
  )
}

export default BaseFare