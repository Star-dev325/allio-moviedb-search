import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

const Images = ({ actors }) => {
  const [iii, setIII] = useState([]);
  useEffect(async () => {
    let tempState = [];
    await actors.forEach(async (item) => {
      const fetched = await fetch(`https://api.themoviedb.org/3/person/${item.id}/images?api_key=04b862dce36c19174e87aa1eb9cc62eb`);
      const result = await fetched.json();
      const imagesList = result.profiles.map((item1) => `https://image.tmdb.org/t/p/original${item1.file_path}`);
      tempState = [...tempState, ...imagesList];
      const temp = iii.concat(tempState);
      setIII(temp);
    });
  }, [actors]);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {
        (iii.length !== 0) && iii.map((item, index) => (<img key={index} src={item} width='200px' height='200px'/>))
      }
    </div>
  );
};

Images.propTypes = {
  images: propTypes.array,
  actors: propTypes.array
};

export default Images;
