/* eslint-disable react/prop-types */
import React from 'react';

const SearchBox = ({ searchChange }) => (
  <div className="pa2">
    <input className="pa3 ba b--green gb-lightest-blue" type="search" placeholder="search robot" onChange={searchChange} />
  </div>
);

export default SearchBox;
