import React, { useState } from 'react'
import { Address } from '../Data'
import { NearByMe } from '../Data'
import { EXplore } from '../Data'
import { AppleStore_logo, LOGO_URL, PlayStore_logo } from '../utils/constant'
import arrowIcon from "../Image/arrow1.png"
import MoreButton from '../Dropdown/MoreButton'
import MoreNearButton from '../Dropdown/MoreNearButton'
import uparrowIcon from '../Image/uparrow.png'
import MoreCities from '../Dropdown/MoreCities'



const Footer = () => {


  const [showMore, setShowMore] = useState(false)
  const [showNearMe, setShowNearMe] = useState(false)
  const [moreCities, setMoreCities] = useState(false)

  const citiesAddress = Address?.filter(
    (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent"
  )


  const BrandsContent = NearByMe.filter(
    (b) => b.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent"
  )
  // console.log(BrandsContent);
  // console.log(BrandsContent[1].card.card.brands);

  const ExploreContent = EXplore?.filter(
    (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent"
  )

  // console.log(ExploreContent[0].card.card.brands);


  return (
    <>

      <div className='footerSection'>
        <div>
          <h2>Best Places to Eat Across Cities</h2>
        </div>
        <div className='bestResturant' >
          {
            citiesAddress[0].card?.card?.cities?.map((item, index) => {

              return (
                <div className='best_res' key={citiesAddress[0].card?.card?.cities.id}>
                  <a href={item.link}>
                    <p>Best Resturant in {item.text}</p>
                  </a>
                </div>
              )
            })
          }

          <div>
            <div style={{ marginLeft: "510px" }} onClick={() => {
              setShowMore(true)

            }}>
              {!showMore && <div className='more'>

                <p>Show More</p>
                <img src={arrowIcon} alt='arrowIcon' width={25} height={25} />
              </div>}
            </div>
            {
              showMore == true && (<MoreButton citiesAddress={citiesAddress} />)
            }
          </div>
        </div>



        <div className='footerSection'>
          <div>
            <h2> {BrandsContent[0]?.card?.card?.title}</h2>
          </div>
          <div className='bestResturant'>
            {
              BrandsContent[0]?.card?.card?.brands?.map((item, index) => {

                return (

                  <div className='best_res' key={BrandsContent[0].card?.card?.brands?.id}>
                    <a href={item.link}>
                      <p>{item.text}</p>
                    </a>
                  </div>

                )
              })
            }


            <div>
              <div style={{ marginLeft: "465px" }} onClick={() => {
                setShowNearMe(true)

              }}>
                {!showNearMe && <div className='more'>

                  <p>Show More</p>
                  <img src={arrowIcon} alt='arrowIcon' width={25} height={25} />
                </div>}
              </div>
              {
                showNearMe == true && (<MoreNearButton BrandsContent={BrandsContent} />)
              }
            </div>
          </div>
        </div>


        <div className='footerSection'>
          <div>
            <h2> {ExploreContent[0]?.card?.card?.title}</h2>
          </div>
          <div className='exploreResturant'>
            {
              ExploreContent[0]?.card?.card?.brands?.map((item, index) => {

                return (

                  <div className='exploreResturant_1' key={ExploreContent[0].card?.card?.brands?.id}>
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

      <div className='footerIconed'>
        <div className='footerIcon_1'>
          <div className='heads'>
            <div>
              <h1>For better experience,download the Swiggy app now</h1>
            </div>
          </div>
          <div className='sticKers'>
            <a href='https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader' target='_blank'>
              <img src={PlayStore_logo} alt='PlayStore_logo' width={208} height={70} />
            </a>

            <a href='https://apps.apple.com/in/app/swiggy-food-grocery-delivery/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage' target='_blank'>
              <img src={AppleStore_logo} alt='PlayStore_logo' width={208} height={70} />
            </a>
          </div>
        </div>
      </div>
      <div className='footerend'>
        <div className='footerSection-1'>
          <div>
            <div className='log-img'>
              <img src={LOGO_URL} alt='logo' height={30} />
              <h2>Swiggy</h2>
            </div>
            <div>
              <p>© 2023 Bundl Technologies Pvt. Ltd</p>
            </div>
          </div>
          <div className='listItem'>
            <ul>
              <li>
                <div style={{ fontSize: "18px", color: "white", fontWeight: "600" }}>Company</div>
              </li>
              <li>
                <a>
                  <div>About</div>
                </a>
              </li>
              <li>
                <a>
                  <div>Careers</div>
                </a>
              </li>
              <li>
                <a>
                  <div>Team</div>
                </a>
              </li>
              <li>
                <a>
                  <div>Swiggy One</div>
                </a>
              </li>
              <li>
                <a>
                  <div>Swiggy Instamart</div>
                </a>
              </li>
              <li>
                <a>
                  <div>Swiggy Genie</div>
                </a>
              </li>
            </ul>
          </div>
          <div className='listItem'>
            <ul>
              <li>
                <div style={{ fontSize: "18px", color: "white", fontWeight: "600" }}>Contact us</div>
              </li>
              <li>
                <a>
                  <div>Help & Support</div>
                </a>
              </li>
              <li>
                <a>
                  <div>Partner with us</div>
                </a>
              </li>
              <li>
                <a>
                  <div>Ride with us</div>
                </a>
              </li>
            </ul>
          </div>
          <div className='listItem'>
            <ul>
              <li>
                <div style={{ fontSize: "18px", color: "white", fontWeight: "600" }}>Legal</div>
              </li>
              <li>
                <a>
                  <div>Term & Conditions</div>
                </a>
              </li>

              <li>
                <a>
                  <div>Privacy Policy</div>
                </a>
              </li>
              <li>
                <a>
                  <div>Cookies Policy</div>
                </a>
              </li>
            </ul>
          </div>
          <div className='listItem'>
            <ul>
              <li>
                <div style={{ fontSize: "18px", color: "white", fontWeight: "600" }}>We deliver to:</div>
              </li>
              <li>
                <a>
                  <div>Bangalore</div>
                </a>
              </li>

              <li>
                <a>
                  <div>Gurgaon</div>
                </a>
              </li>
              <li>
                <a>
                  <div>Delhi</div>
                </a>
              </li>
              <li>
                <a>
                  <div>Mumbai</div>
                </a>
              </li>
              <li>
                <a>
                  <div>Pune</div>
                </a>
              </li>
            </ul>
            <div className='citiesBtn' onClick={() => {
              setMoreCities(!moreCities)
            }}>
              <div className='cities-content'>
                <span>589</span>
                <p>cities</p>
              </div>
              <div>
                {<img src={arrowIcon} alt='arrowIcon' width={20} height={20} />}
              </div>
            </div>
          </div>
       
        </div>

        {moreCities == true && <MoreCities citiesAddress={citiesAddress} />}
      </div>
    </>
  )
}

export default Footer

// Bangalore
// Gurgaon
// Hyderabad
// Delhi
// Mumbai
// Pune