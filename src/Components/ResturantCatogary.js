import React, { useEffect } from 'react'
import ListItem from './ListItem';


const ResturantCatogary = ({ data, showItem, setShowIndex }) => {
    // console.log(data);


    const handleClick = () => {
        setShowIndex()
    }

    // const vegOnly = data.itemCards.filter(
    //     (veg) => veg?.card?.info?.itemAttribute
    // )
    // console.log(vegOnly);
    
    // useEffect(()=>{
    //     dispatch(vegOnly)
    // },[])


    return (
        <div>

            <div className='category'>
                <div >

                    <div className='category-details' onClick={handleClick}>
                        <span>{data.title}({data.itemCards.length})</span>
                        <span>⮯</span>

                    </div>

                    {
                        showItem && <ListItem items={data.itemCards} />
                    }
                </div>

            </div>

        </div>
    )
}

export default ResturantCatogary