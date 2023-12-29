import React, { useState } from 'react'
import { LOGO_URL } from '../utils/constant';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import GreenDots from "../Image/green-dot.png"
import RedDots from "../Image/reddot.png"
import { useSelector } from 'react-redux';
import discountIcon from '../Image/discount.png'
import userIcon from "../Image/users.png"
import searchIcon from "../Image/search.png"
import helpIcon from "../Image/help.png"


const Header = () => {


    const [btnName, setBtnName] = useState("Login")

    const onlineStatus = useOnlineStatus()

    // subscribing to the store using the selector
    const cartItems = useSelector((store) => store.cart.items)


    // if (onlineStatus === false) {
    //     return (
    //         <h1>Please check the internet connection</h1>
    //     )
    // }


    return (
        <div className='nav'>
            <div className='logo'>
                <img src={LOGO_URL} width={100} />
            </div>
            <div className='nav-items' style={{marginLeft:"400px"}}>
                <ul>
                    <li>online: {onlineStatus ? <img src={GreenDots} width={15} alt='GreenDots' /> : <img src={RedDots} width={20} alt='RedDots' />}</li>
                    <li>
                        <img src={searchIcon} width={20} height={20} alt='searchIcon'/>
                        <Link to='/search'>Search</Link>
                    </li>
                    <li>
                        <img src={discountIcon} width={20} height={20} alt='discountIcon' />
                        <Link to='/offer'>Offer</Link>
                    </li>
                    <li>
                        <img src={helpIcon} width={25} height={25} alt='helpIcon'/>
                        <Link to='/help'>Help</Link>
                    </li>
                    <li>
                        <img src={userIcon} width={20} height={20} alt='userIcon'/>
                        Sign in
                    </li>
                    <li>
                        <Link to='/cart'>Cart({cartItems.length} items)</Link>
                    </li>
                </ul>
            </div>
            <div>
                <button className='loging'
                    onClick={() => {
                        btnName === "login"
                            ? setBtnName("logout")
                            : setBtnName("login")

                    }}
                >{btnName}</button>
            </div>

        </div>
    )
}

export default Header;