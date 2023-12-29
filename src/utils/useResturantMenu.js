import React, { useState, useEffect } from 'react'
import { RESTURANT_MENU } from '../utils/constant'

const useResturantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {

        const response = await fetch(RESTURANT_MENU + resId)
        const result = await response.json()
        // console.log(result);
        setResInfo(result.data)
    }
    return resInfo;
}

export default useResturantMenu