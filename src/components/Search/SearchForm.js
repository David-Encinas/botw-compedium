import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

import './SearchForm.scss';
import { useGlobalContext } from "../../context";

const SearchForm = () => {
  const {showSearch, isSearching, setIsSearching} = useGlobalContext();
  
  const searchItems = (e) => {
    e.preventDefault();
    setIsSearching(true)
    let searchItems = document.querySelectorAll('.item');
    let searchVal = e.target.value.toLowerCase();

    for (let i = 0; i < searchItems.length; i++) {         
      if (!searchItems[i].innerText.toLowerCase().includes(searchVal)) {
        searchItems[i].style.display = 'none'
      } else {
        searchItems[i].style.display = 'flex'
      }
    }    
  }

  const clearSearch = (e) => {
    e.preventDefault();
    let searchItems = document.querySelectorAll('.item');
    document.querySelector('.relative-div input').value = '';
    for (let i = 0; i < searchItems.length; i++) {         
      searchItems[i].style.display = 'flex'      
    }
    setIsSearching(false)   
    //setShowSearch(false) 
  }

  if (showSearch && document.querySelector('.search-form .relative-div input')) {document.querySelector('.search-form .relative-div input').focus()}
  
  return (
    <>
    {showSearch && <div className="flex-items search-form">
      <div className="relative-div">
        <input type="text" placeholder="Example: Sword, Attack: 10" onChange={searchItems} autoFocus />
        { !isSearching && <button className="searchIcon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button> }
        { isSearching && 
        <button className="clearSearch" onClick={clearSearch}>
          <FontAwesomeIcon icon={faX} />
        </button> }
      </div>
    </div>}
    </>
  )
}

export default SearchForm