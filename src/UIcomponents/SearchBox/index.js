import React, { useRef, useEffect, useState } from 'react';
import propTypes from 'prop-types';

import {
  SearchingContainer, TextArea, DropDown, DropDownItem
} from './styles';

const SearchBox = ({ handleChange, searchedActorList, handleActorClick }) => {
  const inputRef = useRef();
  const [dropdownHidden, setDropdowHidden] = useState(true);

  useEffect(() => {
    inputRef.current.addEventListener('input', handleChange);
  }, []);

  useEffect(() => {
    if (searchedActorList) setDropdowHidden(false);
    else setDropdowHidden(true);
  }, [searchedActorList]);

  const handleLocalClick = (e, actor) => {
    handleActorClick(actor);
  };

  return (
    <SearchingContainer>
      <TextArea id='name' onChange={handleChange} onFocus={() => { setDropdowHidden(false); }} name='name' type='text' ref={inputRef} autoComplete='off' placeholder={'ENTER ACTOR\'S NAME...'} />
      {
        <DropDown afterVisible={searchedActorList.length !== 0 && !dropdownHidden}>
          {
            searchedActorList.map(
              (item) => <DropDownItem
                key={item.id}
                onClick={(e) => { handleLocalClick(e, item); }}
              >{item.name}</DropDownItem>
            )
          }
        </DropDown>
      }
    </SearchingContainer>
  );
};

SearchBox.propTypes = {
  handleChange: propTypes.func,
  text: propTypes.string,
  searchedActorList: propTypes.array,
  handleActorClick: propTypes.func
};

export default SearchBox;
