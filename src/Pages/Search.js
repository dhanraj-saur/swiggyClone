import React, { useState } from 'react'

const Search = ({ filterRes }) => {

    const [searchText, setSearchText] = useState("")

    return (
        <div className='search'>
            <div className='input'>
                <div >
                    <input type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                </div>
                <button
                    onClick={() => {
                        console.log(searchText);
                        const filteredResturant = filterRes.filter(
                            (res) => res?.data?.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        console.log(filteredResturant);
                        // setFilterRes(filteredResturant)
                    }}
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search