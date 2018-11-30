import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className = 'pa2'>
        <input 
        className = 'pa3 pa b--green bg-lightest-blue'
        type='search' 
        placeholder='search robots' 
        onChange = {searchChange} // a tu mamy jaki to event z app
        />
        </div>
    );


}

export default SearchBox;