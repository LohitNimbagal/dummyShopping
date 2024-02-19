import React from 'react'

function SearchBar(props) {

    const handelSubmit = (e) => {
        // e.preventDefault()
        props.setSearchTerm(e.target.value)
    }

    return (
        <form className=" w-full flex items-center justify-center p-1 mb-4" onSubmit={(e => e.preventDefault())}>
            {/* <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Welcome!</h1> */}
            {/* <p className="text-sm font-normal text-gray-600 mb-7"></p> */}

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                    viewBox="0 0 30 30" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
                <input className="pl-2 outline-none border-none " type="text" name="search" value={props.searchTerm} id="search" placeholder="Search" onChange={(e) => handelSubmit(e)} />
            </div>
        </form>
    )
}

export default SearchBar