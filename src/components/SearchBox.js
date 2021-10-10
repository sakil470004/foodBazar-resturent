import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='ma1'>
      <input
        className='pa3 b--none b--green bg-lightest-blue br-pill'
        type='search'
        placeholder='Search Food'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;