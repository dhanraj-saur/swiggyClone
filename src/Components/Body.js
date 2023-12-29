import React, { useEffect, useState } from 'react'
import ratingIcon from "../Image/rating.png"
import { API_BASE_URL, CLOUDINARY_URL } from '../utils/constant'
import BestOffer from './BestOffer'
import FoodItem from './FoodItem'
import { Link } from 'react-router-dom'
import filterIcon from '../Image/filter.png'
import arrowIcon from '../Image/arrow1.png'






const Body = () => {


    const [filterRes, setFilterRes] = useState([])
    console.log(filterRes);

    const [foodItems, setFoodItems] = useState([])
    const [bestOffers, setBestOffers] = useState([])


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(API_BASE_URL);
        const ressults = await response.json();
        console.log(ressults);


        setFilterRes(ressults?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setBestOffers(ressults?.data?.cards[0]?.card?.card?.imageGridCards?.info)
        setFoodItems(ressults?.data?.cards[1]?.card?.card?.imageGridCards?.info)
    };

    // const onlineStatus = useOnlineStatus()
    // if (onlineStatus === false) {
    //     return (
    //         <h1>Please check the internet connection</h1>
    //     )
    // }

    // if(resList.length === 0){
    //     return  <h1>Loading.....</h1>
    // }

    return filterRes.length == 0 ? (<h1>Loading.....</h1>) : (

        <div className='body-container'>


            <div>
                <BestOffer bestOffers={bestOffers} />
            </div>
            <div>
                <FoodItem foodItems={foodItems} />
            </div>
            <div>
                <h1 style={{ padding: "0px 50px" }}>Top restaurant chains in Delhi</h1>

                <div className='filterBtn'>

                    <div className='fillter-btn'
                        onClick={() => {
                            const filteredProduct = filterRes.filter(
                                (res) => res.info.avgRating < 3
                            );
                            console.log(filteredProduct);
                            setFilterRes(filteredProduct)
                        }}
                    >
                        Fiter
                        <img style={{ marginLeft: "10px" }} src={filterIcon} alt='filterIcon' width={20} height={25} />
                    </div>
                    <div className='fillter-btn'
                        onClick={() => {
                            const filteredProduct = filterRes.filter(
                                (res) => res.info.avgRating < 3
                            );
                            console.log(filteredProduct);
                            setFilterRes(filteredProduct)
                        }}
                    >
                        Sort By
                        <img style={{ marginLeft: "10px" }} src={arrowIcon} alt='filterIcon' width={20} height={25} />
                    </div>
                    <div className='fillter-btn'
                        onClick={() => {
                            const filteredProduct = filterRes.filter(
                                (res) => res.info.avgRating > 4
                            );
                            console.log(filteredProduct);
                            setFilterRes(filteredProduct)
                        }}
                    >
                        Ratings4.0+
                    </div>
                    <div className='fillter-btn'
                        onClick={() => {
                            const filteredProduct = filterRes.filter(
                                (res) => res.info.sla.lastMileTravelString < "3km"
                            );
                          
                            setFilterRes(filteredProduct)
                        }}
                    >
                        Fast Delivery
                    </div>

                    <div className='fillter-btn'
                        onClick={() => {
                            const filteredProduct = filterRes.filter(
                                (res) => res.info.avgRating < 3
                            );
                            console.log(filteredProduct);
                            setFilterRes(filteredProduct)
                        }}
                    >
                        Pure Veg
                    </div>
                    <div className='fillter-btn'
                        onClick={() => {
                            const filteredProduct = filterRes.filter(
                                (res) => res.info.avgRating < 3
                            );
                            console.log(filteredProduct);
                            setFilterRes(filteredProduct)
                        }}
                    >
                        Rs.300-Rs.600
                    </div>
                    <div className='fillter-btn'
                        onClick={() => {
                            const filteredProduct = filterRes.filter(
                                (res) => res.info.avgRating < 3
                            );
                            console.log(filteredProduct);
                            setFilterRes(filteredProduct)
                        }}
                    >
                        Offers
                    </div>
                    <div className='fillter-btn'
                        onClick={() => {
                            const filteredProduct = filterRes.filter(
                                (res) => res.info.feeDetails.totalFee < 3000
                            );
                            console.log(filteredProduct);
                            setFilterRes(filteredProduct)
                        }}
                    >
                        Less than 300
                    </div>


                </div>
            </div>
            <div className='cards'>

                {
                    filterRes.map((item, index) => {
                        return (


                            <div className='card-items' key={index} >

                                <Link to={`/resturant/${item?.info?.id}`}>

                                    <div className='cloudaryImage'>
                                        <img className='food_img' src={CLOUDINARY_URL + "/" + item?.info?.cloudinaryImageId} alt='imgIcon' />
                                        <div className='img_offer'>
                                            <h2>{item.info?.aggregatedDiscountInfoV3?.header} {item?.info?.aggregatedDiscountInfoV3?.subHeader}</h2>
                                        </div>
                                    </div>
                                    <div className='cuisine_heads'>
                                        <div className='name-cuisine'>
                                            <h3 >{item?.info?.name}</h3>
                                            <p>{item?.info?.cuisines.join(",")}</p>
                                        </div>
                                    </div>
                                    <div className='rating-delevery'>
                                        <div className='rating-img'>
                                            <img src={ratingIcon} width={25} height={25} alt='ratingIocn' />
                                            <span>{item?.info?.avgRating}</span>
                                            <span>•</span>
                                            <span>{item?.info?.sla?.slaString}</span>
                                        </div>
                                    </div>

                                    <span style={{ color: "gray" }}>{item?.info?.areaName}</span>
                                </Link>

                            </div>

                        )
                    })
                }

            </div>
            <hr style={{ color: "lightgrey", width: "94%" }} />
        </div>

    )
}

export default Body;




// const [bestOffers, setBestOffers] = useState([]);
// const [foodItems, setFoodItems] = useState([]);
// const [bestBrands, setBestBrands] = useState([]);

// setBestOffers(ressults?.data?.cards[0]?.card?.card?.imageGridCards?.info);
// setFoodItems(ressults?.data?.cards[1]?.card?.card?.imageGridCards?.info);
// setBestBrands(
//     ressults?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants
// );