import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleOnChange }) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleOnChange}
    />
);