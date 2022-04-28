import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { List, ListItem } from './styles';

const MovieList = ({ actors }) => {
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    let includedTitles = [];
    if (actors.length === 0) {
      setTitles([]);
      return;
    }
    actors.forEach((actor) => {
      if (actor.known_for) {
        actor.known_for.forEach((item) => {
          if (!includedTitles.includes(item.name) && !includedTitles.includes(item.title)) {
            if (item.name) {
              includedTitles = [...includedTitles, item.name];
            } else if (item.title) {
              includedTitles = [...includedTitles, item.title];
            }
          }
        });
      }
    });
    setTitles(includedTitles);
  }, [actors]);

  return (
    <List>
      {
        titles && titles.map((title, index) => <ListItem key={index}>{title}</ListItem>)
      }
    </List>
  );
};

MovieList.propTypes = {
  actors: propTypes.array
};

const mapStateToProps = (state) => ({
  actors: state.display
});

export default connect(mapStateToProps, undefined)(MovieList);
