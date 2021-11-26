import React from 'react'
import { FaSearch } from "react-icons/fa";
function SearchBar() {
    return (
        <div className={`padding`}>
            <div class="input-group rounded">
                <span class="input-group-text border-0" id="search-addon">
                    <FaSearch></FaSearch>
                </span>
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />

            </div>
        </div>
    )
}

export default SearchBar
