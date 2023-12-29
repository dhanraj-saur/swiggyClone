import React, { useEffect, useState } from 'react'
import { CLOUDINARY_URL, FLAT_DISCOUNT, Footer_IMAGE, LOGO_1, LOGO_2, LOGO_3, } from '../utils/constant'
import { useParams } from 'react-router-dom'
import triangleIcon from '../Image/triangle.png'
import starIcon from "../Image/rating1.png"
import rupeesIcon from "../Image/rupee.png"
import timerIcon from "../Image/timer.png"
import { DELEVERY_IMAGE } from '../utils/constant'
import locationIcon from "../Image/location.png"
import Shimmer from './Shimmer'
import useResturantMenu from '../utils/useResturantMenu'
import ResturantCatogary from './ResturantCatogary'
import { useDispatch } from 'react-redux'
import { addStore } from '../utils/cartSlice'

// import VegOnly from './VegOnly'


const ResturantMenu = () => {

  const [showIndex, setShowIndex] = useState(0)
  const [categoriesData, setCategoriesData] = useState([])

  const { resId } = useParams()

  const dispatch = useDispatch()

  const resInfo = useResturantMenu(resId)



  useEffect(() => {
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    setCategoriesData(categories)

    dispatch(addStore(
      {
        storeName: resInfo?.cards[0]?.card?.card?.info?.name,
        area: resInfo?.cards[0]?.card?.card?.info?.areaName,
        distance: resInfo?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString,
        totalFee: resInfo?.cards[0]?.card?.card?.info?.feeDetails?.totalFee,
        couponCode: resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers,
      }
    ))
  }, [resInfo])

  
  const filterVegOnly = () => {
    //console.log(categoriesData)
    const vegOnly = categoriesData.map((data) => data.card.card.itemCards.filter((vegdata) => vegdata.card.info.isVeg == true ? data : []))
    console.log(vegOnly)
  }
  // console.log(categories);


  return resInfo === null ? (<Shimmer />) : (

    <div className='rest-menu'>
      <div className='menu-items'>
        <div className='name-cuisine-content'>
          <div>
            <div className='logo'>
              <h3>{resInfo?.cards[0]?.card?.card?.info?.name}</h3>
              <img src={CLOUDINARY_URL + "/" + resInfo?.cards[0]?.card?.card?.info?.logo} width={30} height={30} />
            </div>
            <div className='cuisineinfo'>
              <p >{resInfo?.cards[0]?.card?.card?.info?.cuisines}</p>
              <div className='area-Icon'>
                <p>{resInfo?.cards[0]?.card?.card?.info?.areaName}, {resInfo?.cards[0]?.card?.card?.info?.sla?.lastMileTravel} km</p>
                <img src={triangleIcon} alt='triangleIcon' width={10} height={10} />

              </div>
            </div>
          </div>
          <div className='ratedIcon'>
            <div className='ratingcontent'>
              <img src={starIcon} alt='starRated' width={20} height={20} />
              <p style={{ color: "#3d9b6d", fontSize: "15px", fontWeight: 700 }}>{resInfo?.cards[0]?.card?.card?.info?.avgRating}</p>
            </div>
            <div className='rated-container'>
              <p style={{ fontSize: "10px", fontWeight: 700 }}>{resInfo?.cards[0]?.card?.card?.info?.totalRatingsString}</p>
            </div>
          </div>
        </div>
        <div className='deliveryIcon'>
          <img src={DELEVERY_IMAGE} />
          <span>{resInfo?.cards[0]?.card?.card?.info?.feeDetails?.message}</span>
        </div>
        <hr style={{ color: "gray" }} />
        <div >
          <div className='rupeesIcon'>
            <img src={timerIcon} alt='timerIcon' width={30} height={30} />
            <h3>{resInfo?.cards[0]?.card?.card?.info?.sla?.deliveryTime}MINS</h3>
            <img src={rupeesIcon} alt='rupeesIcon' width={30} height={30} />
            <h3 >{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
          </div>

          <div className='flat_discount'>

            <div className='flat_discount_0'>
              <div className='flat_discount_1'>
                {/* <span className='offertag'>{resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[0]?.cta?.type}</span> */}
                <img src={FLAT_DISCOUNT} alt='disIcon' width={20} height={20} />
                <span>{resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[0]?.info?.header}</span>
              </div><br />
              <div className='flat_discount_2'>
                <span>
                  {resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[0]?.info?.couponCode}
                </span>
                <span> | </span>
                <span>{resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[0]?.info?.description}</span>
              </div>
            </div>

            <div className='flat_discount_0'>
              <div className='flat_discount_1'>
                <img src={LOGO_1} alt='disIcon' width={20} height={20} />
                <span>{resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[0]?.info?.header}</span>
              </div><br />
              <div className='flat_discount_2'>
                <span>
                  {resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[1]?.info?.couponCode}
                </span>
                <span> | </span>
                <span>{resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[1]?.info?.description}</span>
              </div>
            </div>
            <div className='flat_discount_0'>
              <div className='flat_discount_1'>
                <img src={LOGO_2} alt='disIcon' width={20} height={20} />
                <span>{resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[2]?.info?.header}</span>
              </div><br />
              <div className='flat_discount_2'>
                <span>
                  {resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[2]?.info?.couponCode}
                </span>
                <span> | </span>
                <span>{resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[2]?.info?.description}</span>
              </div>
            </div>
            <div className='flat_discount_0'>
              <div className='flat_discount_1'>
                <img src={LOGO_3} alt='disIcon' width={20} height={20} />
                <span>{resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[3]?.info?.header}</span>
              </div><br />
              <div className='flat_discount_2'>
                <span>
                  {resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[3]?.info?.couponCode}
                </span>
                <span> | </span>
                <span>{resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers[3]?.info?.description}</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>

            <div>
              <button onClick={filterVegOnly}>vegOnly</button>
            </div>
          </div>
          <hr />
          {/* <div>
            <h2>Top picks</h2>
            <img src={CLOUDINARY_URL + "/" + resInfo?.cards[0]?.card?.card?.info?.logo} alt='disIcon' width={20} height={20} />
          </div> */}

          {
            categoriesData?.map((category, index) => (
              <ResturantCatogary
                data={category?.card?.card}
                key={category?.card?.card.title}
                showItem={index === showIndex && true}
                setShowIndex={() => setShowIndex(index)}
              />
            ))
          }


          <div className='footer'>
            <div>
              <div className='footerIcon'>
                <img src={Footer_IMAGE} height={40} alt='footerIcon' />
                <p>License No. 13319003000652</p>
              </div>

              <hr />
              <div className='loc-add'>
                <h3>{resInfo?.cards[0]?.card?.card?.info?.name}</h3>
                <p>(Outlet: {resInfo?.cards[0]?.card?.card?.info?.areaName})</p>
              </div>
              <div className='loc-add'>
                <img src={locationIcon} alt='locationIcon' width={20} height={20} />
                <p style={{ fontSize: "11px", fontWeight: '500' }}>{resInfo?.cards[0]?.card?.card?.info?.labels[1]?.message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default ResturantMenu;